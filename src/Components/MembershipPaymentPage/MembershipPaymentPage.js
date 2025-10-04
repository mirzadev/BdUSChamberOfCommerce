import React, { useState, useRef } from "react";
import "./MembershipPaymentStyles.css";
import { Link } from "react-router-dom";
import BACCLogo from "../../Assets/Home/bacc_logo.png";
import PaymentHero from "../../Assets/MembershipPayment/payment.jpg";
import LogoPayPal from "../../Assets/MembershipPayment/paypal.png";
import LogoVenmo from "../../Assets/MembershipPayment/VenmoLogo.png";
import LogoZelle from "../../Assets/MembershipPayment/ZellePayment.png";
import ZelleQR from "../../Assets/MembershipPayment/QR-UnikaHolding.png";
import QRCode from "react-qr-code";
//  install:    npm i react-qr-code

/* ---------------------------
   Configure your destinations
   --------------------------- */
const PAYPAL_LINK = "https://www.paypal.com"; // TODO: replace
const ZELLE_NAME = "Bangladesh American Chamber of Commerce";
const ZELLE_EMAIL = "BACCFloridaUSA@gmail.com"; // TODO: replace with your Zelle email/phone
const VENMO_HANDLE = "@BACCFloridaUSA"; // TODO: replace
const VENMO_LINK = "https://id.venmo.com/signin#/lgn"; // optional

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

  const payQuickRef = useRef(null);
  const amountInputRef = useRef(null);

  const scrollToAmount = () => {
    payQuickRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(
      () => amountInputRef.current?.focus({ preventScroll: true }),
      400
    );
  };

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
              <button className="mb-btn primary" onClick={scrollToAmount}>
                Enter Amount
              </button>
              <button
                className="mb-btn outline"
                onClick={() =>
                  document
                    .getElementById("methods")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Choose Method
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Header */}
      <section className="pay-header">
        <div className="pay-header-inner">
          <h1>ONLINE PAYMENTS</h1>
          <p className="pay-muted">Please enter your payment amount below…</p>

          <div className="pay-quick" id="pay-quick" ref={payQuickRef}>
            <label className="pay-inline">
              <span className="pay-label required">Amount (USD)</span>
              <input
                ref={amountInputRef}
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                placeholder="100.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                aria-required="true"
                aria-label="Amount in US dollars"
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
      <section className="pay-section" id="methods">
        <h1>PAYMENT METHODS</h1>
        <p className="pay-muted">
          Chose the payment that is appropriate for you
        </p>
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
                className="pay-btn primary"
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
                  className="pay-btn primary"
                  onClick={() => copyToClipboard(ZELLE_EMAIL)}
                  title="Copy Zelle recipient"
                >
                  Copy Zelle Info
                </button>
                {/* QR image  */}
                <img className="pay-qr" src={ZelleQR} alt="Zelle QR" />
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
                  className="pay-btn primary"
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

                {/* QR that opens your Venmo profile */}
                <div className="pay-qr-box" aria-hidden>
                  <QRCode value={VENMO_LINK} size={120} />
                </div>
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
            <h3 className="mb-h3">Questions about the Payment ?</h3>
            <p className="mb-muted">
              We’re happy to help you decide and make introductions.
            </p>
          </div>
          <div className="mb-cta-row">
            <a className="mb-btn outline" href="tel:+1-954-818-2970">
              Call: +1-954-818-2970
            </a>
            <a className="mb-btn outline" href="mailto:info@busacc.org">
              BACCFloridaUSA@gmail.com
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
