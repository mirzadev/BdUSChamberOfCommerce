import React, { useState } from "react";
import "./MembershipPaymentStyles.css";
import { Link } from "react-router-dom";
import BACCLogo from "../../Assets/Home/bacc_logo.png";
import PaymentHero from "../../Assets/MembershipPayment/payment.jpg";
import LogoPayPal from "../../Assets/MembershipPayment/paypal.png";
import LogoVenmo from "../../Assets/MembershipPayment/VenmoLogo.png";
import LogoZelle from "../../Assets/MembershipPayment/ZellePayment.png";

/* ---------------------------
   Configure your destinations
   --------------------------- */
const PAYPAL_LINK = "https://www.paypal.com/paypalme/YOURHANDLE"; // TODO: replace
const STRIPE_CHECKOUT_URL = "/checkout"; // TODO: route (or external) for cards/ACH
const MERCHANT_SERVICE_URL = "/payment/invoice-request"; // TODO: route/form for invoices

// Zelle + Venmo recipient info
const ZELLE_NAME = "Bangladesh American Chamber of Commerce";
const ZELLE_EMAIL = "BACCservice2024@gmail.com"; // TODO: replace with your Zelle email/phone
const VENMO_HANDLE = "@YourVenmoHandle"; // TODO: replace
const VENMO_LINK = "https://venmo.com/u/YourVenmoHandle"; // optional

/* Tiny inline icons (no external deps) */
const IconCard = () => (
  <svg viewBox="0 0 24 24" className="pay-ico" aria-hidden="true">
    <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2V7zm0 4h20v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6zm4 4h6v2H6v-2z"></path>
  </svg>
);
const IconBank = () => (
  <svg viewBox="0 0 24 24" className="pay-ico" aria-hidden="true">
    <path d="M12 2 2 7v2h20V7L12 2zM3 11v9h2v-9H3zm4 0v9h2v-9H7zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2z"></path>
  </svg>
);
const IconInvoice = () => (
  <svg viewBox="0 0 24 24" className="pay-ico" aria-hidden="true">
    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v2H8v-2zm0 4h5v2H8v-2z"></path>
  </svg>
);

function PaymentPage() {
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [email, setEmail] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
  };

  const openExternal = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const safeAmount = amount?.trim() ? parseFloat(amount) : null;
  const paypalHref = safeAmount
    ? `${PAYPAL_LINK}/${encodeURIComponent(safeAmount)}`
    : PAYPAL_LINK;
  const sanitizeAmount = (val) => {
    if (val == null) return NaN;
    // remove spaces, dollar signs, commas; make comma decimal US-friendly
    const cleaned = String(val)
      .trim()
      .replace(/\s+/g, "")
      .replace(/\$/g, "")
      .replace(/,/g, "");
    const n = Number.parseFloat(cleaned);
    return Number.isFinite(n) ? n : NaN;
  };

  const validAmount = sanitizeAmount(amount) > 0;
  return (
    <div className="pay-page">
      {/* Hero Section */}
      <section className="payment-hero">
        <img
          className="payment-hero-bg"
          src={PaymentHero}
          alt="Make a secure payment to BACC"
        />
        <div className="payment-hero-overlay">
          <div className="payment-hero-inner">
            <img className="payment-hero-logo" src={BACCLogo} alt="BACC logo" />
            <h1>PAY MEMBERSHIP DUES</h1>
            <p>
              Secure online payment via PayPal, credit/debit card, ACH, Zelle,
              or Venmo. Your support helps strengthen Bangladesh–USA business
              ties.
            </p>
            <div className="mb-cta-row">
              <Link className="mb-btn primary" to="/membership/payment#methods">
                Pay Now
              </Link>
              <Link className="mb-btn outline" to="/membership/payment#options">
                View Methods
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Header */}
      <section className="pay-header">
        <div className="pay-header-inner">
          <h1>ONLINE PAYMENTS</h1>
          <p className="pay-muted">
            Choose any of the options below to pay membership dues or event fees
            securely.
          </p>
          <div className="pay-quick">
            <label className="pay-inline">
              <span>Amount (USD)</span>
              <input
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                placeholder="100.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <label className="pay-inline">
              <span>Receipt Email (optional)</span>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="pay-inline grow">
              <span>Memo (optional)</span>
              <input
                type="text"
                placeholder="e.g., Annual Dues"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </label>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="pay-section">
        <div className="pay-container">
          <div className="pay-grid">
            {/* PayPal */}
            <article className="pay-method">
              <div className="pay-method-head">
                <img src={LogoPayPal} alt="PayPal" className="pay-logo" />
                <h3>PayPal</h3>
              </div>
              <p className="pay-text">
                Pay quickly with your PayPal balance or linked card.
              </p>
              <button
                className="pay-btn primary"
                onClick={() => openExternal(paypalHref)}
              >
                Pay with PayPal
              </button>
              <p className="pay-hint">
                <strong>Tip:</strong> If amount isn’t prefilled, enter it on
                PayPal.
              </p>
            </article>

            {/* Credit/Debit Card (via your merchant/Stripe) */}
            <article className="pay-method">
              <div className="pay-method-head">
                <IconCard />
                <h3>Credit / Debit Card</h3>
              </div>
              <p className="pay-text">
                Visa, Mastercard, AmEx, Discover. Processed by our secured
                merchant provider.
              </p>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const n = sanitizeAmount(amount);
                  if (!Number.isFinite(n) || n <= 0) {
                    alert("Please enter a valid amount (e.g., 100.00).");
                    return;
                  }
                  try {
                    const resp = await fetch(
                      "http://localhost:3001/api/checkout/card",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ amount: n, email, memo }), // send a number
                      }
                    );
                    const data = await resp.json();
                    if (!resp.ok)
                      throw new Error(data.error || "Checkout error");
                    window.location.href = data.url;
                  } catch (err) {
                    alert(
                      err.message || "Something went wrong. Please try again."
                    );
                  }
                }}
              >
                <button
                  type="submit"
                  className="pay-btn primary"
                  disabled={!validAmount}
                >
                  Continue to Secure Checkout
                </button>
              </form>
              <p className="pay-hint">
                {/* Explain it’s a handoff */}
                You’ll be redirected to our secure card processor.
              </p>
            </article>

            {/* ACH (Bank transfer via Stripe/processor) */}
            <article className="pay-method">
              <div className="pay-method-head">
                <IconBank />
                <h3>ACH (Bank)</h3>
              </div>
              <p className="pay-text">
                Pay directly from a U.S. bank account (lower fees). Identity
                verification required.
              </p>
              <button
                className="pay-btn"
                disabled={!validAmount}
                onClick={async () => {
                  const n = sanitizeAmount(amount);
                  if (!Number.isFinite(n) || n <= 0) {
                    alert("Please enter a valid amount (e.g., 100.00).");
                    return;
                  }
                  try {
                    const resp = await fetch(
                      "http://localhost:3001/api/checkout/ach",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ amount: n, email, memo }),
                      }
                    );
                    const data = await resp.json();
                    if (!resp.ok)
                      throw new Error(data.error || "Checkout error");
                    window.location.href = data.url;
                  } catch (err) {
                    alert(
                      err.message || "Something went wrong. Please try again."
                    );
                  }
                }}
              >
                Link Bank Account
              </button>
              <p className="pay-hint">
                ACH is typically cleared in 2–3 business days.
              </p>
            </article>

            {/* Merchant Service (invoice / virtual terminal) */}
            <article className="pay-method">
              <div className="pay-method-head">
                <IconInvoice />
                <h3>Merchant Service</h3>
              </div>
              <p className="pay-text">
                Prefer an invoice or to pay via our virtual terminal?
              </p>
              <a className="pay-btn outline" href={MERCHANT_SERVICE_URL}>
                Request an Invoice
              </a>
              <p className="pay-hint">
                You’ll receive a secure pay link by email.
              </p>
            </article>

            {/* Zelle */}
            <article className="pay-method">
              <div className="pay-method-head">
                <img src={LogoZelle} alt="Zelle" className="pay-logo" />
                <h3>Zelle</h3>
              </div>
              <p className="pay-text">
                Send to: <strong>{ZELLE_NAME}</strong>
                <br />
                Email/Phone: <strong>{ZELLE_EMAIL}</strong>
              </p>
              <div className="pay-row">
                <button
                  className="pay-btn"
                  onClick={() => copyToClipboard(ZELLE_EMAIL)}
                  title="Copy Zelle recipient"
                >
                  Copy Zelle Info
                </button>
                {/* Optional: add a QR image <img className="pay-qr" src={ZelleQR} alt="Zelle QR" /> */}
              </div>
              <p className="pay-hint">
                Include your <em>Name</em> &amp; <em>Memo</em> in the payment
                note.
              </p>
            </article>

            {/* Venmo */}
            <article className="pay-method">
              <div className="pay-method-head">
                <img src={LogoVenmo} alt="Venmo" className="pay-logo" />
                <h3>Venmo</h3>
              </div>
              <p className="pay-text">
                Handle: <strong>{VENMO_HANDLE}</strong>
              </p>
              <div className="pay-row">
                <a
                  className="pay-btn"
                  href={VENMO_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Venmo
                </a>
                <button
                  className="pay-btn"
                  onClick={() => copyToClipboard(VENMO_HANDLE)}
                  title="Copy Venmo handle"
                >
                  Copy Handle
                </button>
              </div>
              <p className="pay-hint">
                Add your <em>Email</em> &amp; <em>Memo</em> so we can match your
                payment.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* Note / Help */}
      <section className="payment-section contact">
        <div className="mb-container contact-inner">
          <div>
            <h3 className="mb-h3">Questions about the right tier?</h3>
            <p className="mb-muted">
              We’re happy to help you decide and make introductions.
            </p>
          </div>
          <div className="mb-cta-row">
            <a className="mb-btn outline" href="tel:+1-954-818-2970">
              Call: +1-954-818-2970
            </a>
            <a className="mb-btn outline" href="mailto:info@busacc.org">
              BACCservice2024@gmail.com
            </a>
          </div>
        </div>
        <p className="pay-small">
          By proceeding, you agree to our refund policy and terms of service.
        </p>
      </section>
    </div>
  );
}

export default PaymentPage;
