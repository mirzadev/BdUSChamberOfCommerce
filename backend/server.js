// install from backend folder-------    npm i express stripe dotenv cors
// install from backend folder------- npm i -D nodemon
//  npm i @stripe/stripe-js
//  npm i dotenv stripe express
// then use this command  node server.js
import "dotenv/config"; // loads .env once
import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();

// CORS — make sure CLIENT_BASE_URL includes protocol, e.g. http://localhost:5173
app.use(cors({ origin: process.env.CLIENT_BASE_URL, credentials: false }));
app.use(express.json());

// Stripe
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("Missing STRIPE_SECRET_KEY in .env");
  process.exit(1);
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Optional: health check
app.get("/health", (_req, res) => res.send("OK"));

/**
 * POST /api/checkout/card
 */
app.post("/api/checkout/card", async (req, res) => {
  try {
    const { amount, email, memo } = req.body || {};
    const n = Number(amount);
    if (!Number.isFinite(n) || n <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }
    const amountInCents = Math.round(n * 100);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"], // keep if you want card-only
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "BACC Membership Dues",
              description: memo || undefined,
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      customer_email: email || undefined,
      metadata: { memo: memo || "" },
      success_url: `${process.env.CLIENT_BASE_URL}/membership/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_BASE_URL}/membership/payment?canceled=1`,
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

/**
 * POST /api/checkout/ach (optional)
 */
app.post("/api/checkout/ach", async (req, res) => {
  try {
    const { amount, email, memo } = req.body || {};
    const n = Number(amount);
    if (!Number.isFinite(n) || n <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }
    const amountInCents = Math.round(n * 100);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["us_bank_account"], // ACH only
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "BACC Membership Dues",
              description: memo || undefined,
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      customer_email: email || undefined,
      metadata: { memo: memo || "" },
      success_url: `${process.env.CLIENT_BASE_URL}/membership/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_BASE_URL}/membership/payment?canceled=1`,
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});
// GET /api/checkout/session?session_id=cs_test_...
app.get("/api/checkout/session", async (req, res) => {
  try {
    const { session_id } = req.query;
    if (!session_id)
      return res.status(400).json({ error: "Missing session_id" });

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["payment_intent.latest_charge", "line_items.data.price.product"],
    });

    // Pull charge + receipt_url if present
    const pi = session.payment_intent;
    const latestCharge = pi && typeof pi === "object" ? pi.latest_charge : null;
    const receiptUrl =
      latestCharge && typeof latestCharge === "object"
        ? latestCharge.receipt_url
        : null;

    res.json({
      id: session.id,
      status: session.status, // "complete"
      payment_status: session.payment_status, // "paid"
      amount_total: session.amount_total, // cents
      currency: session.currency, // "usd"
      customer_email: session.customer_email,
      created: session.created, // unix seconds
      metadata: session.metadata || {},
      line_items: (session.line_items?.data || []).map((li) => ({
        description: li.description,
        quantity: li.quantity,
        amount_subtotal: li.amount_subtotal,
        amount_total: li.amount_total,
      })),
      receipt_url: receiptUrl,
      reference:
        latestCharge && typeof latestCharge === "object"
          ? latestCharge.id
          : null,
      payment_method_type:
        latestCharge && typeof latestCharge === "object"
          ? latestCharge.payment_method_details?.type
          : null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Checkout Session" });
  }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
