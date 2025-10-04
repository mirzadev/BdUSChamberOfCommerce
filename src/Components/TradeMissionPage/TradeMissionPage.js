import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./TradeMissionPageStyles.css";
import TradeMissionHero from "../../Assets/TradeMission/TradeMissionHero.jpeg";

// Tiny inline icons (no external deps)
const IconForm = ({ className = "tm-ico" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v2H8v-2zm0 4h5v2H8v-2z"></path>
  </svg>
);
const IconPay = ({ className = "tm-ico" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2V7zm0 4h20v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6zm4 4h6v2H6v-2z"></path>
  </svg>
);

function TradeMissionPage() {
  const enrollRef = useRef(null);
  const payRef = useRef(null);

  const handleJump = (e) => {
    const val = e.target.value;
    const target =
      val === "enroll"
        ? enrollRef.current
        : val === "payment"
        ? payRef.current
        : null;

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Move focus for a11y after a short delay (post-scroll)
      setTimeout(() => target.querySelector("h2")?.focus(), 450);
    }
  };

  return (
    <div className="tm-page">
      {/* Hero */}
      <section className="tm-hero">
        <img
          className="payment-hero-bg"
          src={TradeMissionHero}
          alt="Make a secure payment to BACC"
        />
        <div className="tm-hero-overlay">
          <div className="tm-hero-inner">
            <h1>TRADE MISSIONS</h1>
            <p>
              Join curated delegations to explore opportunities, meet buyers and
              partners, and build lasting commercial ties between Bangladesh and
              the United States.
            </p>
            <div className="tm-cta-row">
              <button
                className="tm-btn primary"
                onClick={() =>
                  enrollRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Start Enrollment
              </button>
              <button
                className="tm-btn outline"
                onClick={() =>
                  payRef.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Go to Payment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Selector */}
      <section className="tm-section-header">
        <div className="tm-container">
          <label className="tm-jump-label" htmlFor="tm-jump">
            Jump to:
          </label>
          <select id="tm-jump" className="tm-select" onChange={handleJump}>
            <option value="">Select a section…</option>
            <option value="enroll">Trade Mission Enrollment Form</option>
            <option value="payment">Trade Mission Payment</option>
          </select>
        </div>
      </section>

      {/* Two-topic summary */}
      <section className="tm-section">
        <h1>TRADE MISSION</h1>
        <p className="pay-muted">Enroll to your largest business community</p>
        <div className="tm-container tm-grid-2">
          {/* Enrollment summary */}
          <article className="tm-card" ref={enrollRef} id="enroll">
            <header className="tm-card-head">
              <IconForm />
              <h2 tabIndex="-1">Trade Mission Enrollment Form</h2>
            </header>
            <p className="tm-text">
              Apply to join an upcoming delegation. Tell us about your company,
              objectives, target sectors, and preferred cities so we can match
              meetings and site visits effectively.
            </p>
            <ul className="tm-list">
              <li>Information about your business and it's business address</li>
              <li>Business website (if any)</li>
              <li>Primary Attendee (Full Name) </li>
              <li>Contact Telephone & Email </li>
              <li>Brief Company Description</li>
            </ul>
            <div className="tm-actions">
              <Link className="tm-btn primary" to="/tradeenrollment">
                Open Enrollment Form
              </Link>
              <Link className="tm-btn outline" to="/trade-mission/enroll#faq">
                View Requirements
              </Link>
            </div>
          </article>

          {/* Payment summary */}
          <article className="tm-card" ref={payRef} id="payment">
            <header className="tm-card-head">
              <IconPay />
              <h2 tabIndex="-1">Trade Mission Payment</h2>
            </header>
            <p className="tm-text">
              Secure your spot by submitting the program fee. You can pay by
              card, ACH, PayPal, Zelle, or Venmo. A receipt is emailed
              automatically.
            </p>
            <ul className="tm-list">
              <li>Program &amp; coordination fees</li>
              <li>Optional events &amp; sponsorships</li>
              <li>Refund/cancellation policy</li>
              <li>Receipt &amp; invoice options</li>
            </ul>
            <div className="tm-actions">
              <Link className="tm-btn primary" to="/payments">
                Proceed to Payment
              </Link>
              <Link className="tm-btn outline" to="/payments">
                See Payment Methods
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section className="enrollment-section contact">
        <div className="mb-container contact-inner">
          <div>
            <h3 className="mb-h3">Questions about the Enrollment ?</h3>
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

export default TradeMissionPage;
