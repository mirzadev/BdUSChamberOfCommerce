import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MembershipPageStyles.css";
import BACC_Logo_Membership from "../../Assets/Home/bacc_logo.png";
import membershipImage from "../../Assets/Membership/Membership-1.jpg";
import formImage from "../../Assets/Membership/Membership-1.jpg";

/* --- Tiny inline SVG icons (no external deps) --- */

const CalendarIcon = ({ className = "icon" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm14 8H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10z"></path>
  </svg>
);
const PhoneIcon = ({ className = "icon" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C11.3 21 3 12.7 3 2c0-.6.4-1 1-1h3.5c.5 0 .9.4.9 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.1 2.9z"></path>
  </svg>
);
const MailIcon = ({ className = "icon" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"></path>
  </svg>
);

/*For phone to display calling option like phone*/
function CallButton({
  tel = "+1-954-818-2970",
  className = "btn outline",
  label = "Call Us",
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard?.writeText(tel).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  };

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
      <a
        href={`tel:${tel}`}
        className={className}
        onClick={handleClick}
        aria-label={`Call ${tel}`}
      >
        <PhoneIcon className="icon sm" /> {label}
      </a>
      {copied && <span className="muted">Number copied</span>}
    </span>
  );
}

/* --- Small components --- */

function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="acc" role="tablist" aria-label="FAQs">
      {items.map((it) => {
        const open = openId === it.id;
        return (
          <div key={it.id} className="acc-item">
            <button
              type="button"
              className="acc-trigger"
              aria-expanded={open}
              aria-controls={`sect-${it.id}`}
              id={`tab-${it.id}`}
              onClick={() => setOpenId(open ? null : it.id)}
            >
              {it.q}
              <span className={`acc-caret ${open ? "rot" : ""}`}>▾</span>
            </button>
            <div
              id={`sect-${it.id}`}
              role="region"
              aria-labelledby={`tab-${it.id}`}
              className={`acc-panel ${open ? "open" : ""}`}
            >
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* --- Main page --- */
function MembershipPage() {
  useEffect(() => {
    document.body.classList.add("has-animated-bg");
    return () => document.body.classList.remove("has-animated-bg");
  }, []);
  const [openId, setOpenId] = useState(null);
  const faqs = [
    {
      id: "1",
      q: "Who is eligible to join?",
      a: "Businesses, professionals, students, and institutions engaged with or interested in Bangladesh–USA trade, investment, or professional exchange.",
    },
    {
      id: "2",
      q: "What documents do I need?",
      a: "Typically, your company name, website (if any), primary contact, and a short description of your activities. We may request supporting materials for Corporate/Institutional tiers.",
    },
    {
      id: "3",
      q: "How long does activation take?",
      a: "Memberships are usually confirmed within 3–5 business days after payment is received.",
    },
    {
      id: "4",
      q: "How do I pay my dues?",
      a: "Use the online payment page to pay by card or follow instructions for bank transfer where available. A receipt will be emailed automatically upon success.",
    },
    {
      id: "5",
      q: "Can I upgrade my membership later?",
      a: "Yes. You can upgrade at any time; we’ll pro-rate the difference according to policy.",
    },
  ];

  return (
    <div className="Membership-Container">
      {/* Hero */}
      <div className="Membership-hero-section">
        <div className="hero-overlay">
          <h1>MEMBERSHIP</h1>
        </div>
      </div>
      <div className="BACC_Logo_Membership">
        <img id="BACC-logo" src={BACC_Logo_Membership} alt="BACC logo" />
      </div>
      <h1>WELCOME TO BACC MEMBERSHIP PORTAL</h1>
      <p className="membership-intro-text">
        Join the largest network of Bangladeshi organizations in North
        Americaand explore the benefits of membership.
      </p>
      <div className="summary-section">
        <img
          src={membershipImage}
          alt="Membership Benefits"
          className="summary-image"
        />
        <div className="summary-text">
          <h2>BACC Membership Benefits</h2>
          <p>
            Becoming a BACC member connects you to a binational network,
            provides practical support for trade and investment, and raises your
            organization’s visibility across the Bangladesh–USA business
            corridor. Gain access to members-only events, expert briefings, and
            targeted introductions on both sides of the ocean. Join today to
            accelerate deals, learn from peers, and grow your impact.
          </p>
          <Link to="/membersBenefit" className="read-more-btn">
            Learn More
          </Link>
        </div>
      </div>
      <div className="summary-section-membership">
        <img
          src={formImage}
          alt="Membership image"
          className="membership-image"
        />
        <div className="summary-text">
          <h2>How to Apply for Membership?</h2>
          <p className="muted">
            Joining takes just a few minutes. You can complete everything
            online.
          </p>
          <div className="card steps">
            <ol>
              <li>
                <div className="step-num">1</div>
                <div>
                  <h4>Complete the Enrollment Form</h4>
                  <p className="muted">
                    Share your organization details, focus areas, and goals so
                    we can tailor support.
                  </p>
                  <div className="mt-8">
                    <a className="history-link" href="/membership/enroll">
                      Open Form
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="step-num">2</div>
                <div>
                  <h4>Choose a Membership Type</h4>
                  <p className="muted">
                    Individual, Small Business, or
                    Corporate/Institutional—select what fits today; you can
                    upgrade later.
                  </p>
                </div>
              </li>

              <li>
                <div className="step-num">3</div>
                <div>
                  <h4>Submit Payment Securely</h4>
                  <p className="muted">
                    Pay online by card or bank transfer where available. A
                    receipt is emailed automatically.
                  </p>
                  <div className="mt-8">
                    <a className="history-link" href="/membership/payment">
                      Go to Payment
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="step-num">4</div>
                <div>
                  <h4>Receive Confirmation</h4>
                  <p className="muted">
                    We’ll verify your details and activate your member profile
                    within 3–5 business days.
                  </p>
                  <div className="membership-hint">
                    <a className="read-more-btn" href="/membershipForm">
                      View Membership Process
                    </a>
                    <div className="hint">
                      <CalendarIcon className="icon sm" />
                      Rolling admissions • Confirmation within 3–5 business days
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <section className="section" id="faqs">
        <div className="container">
          <div className="section-head">
            <h2>Common Questions</h2>
          </div>

          <div
            className="faq-list"
            role="tablist"
            aria-label="Common Questions"
          >
            {faqs.map((it) => {
              const open = openId === it.id;
              return (
                <div key={it.id} className={`faq-item ${open ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-q"
                    onClick={() => setOpenId(open ? null : it.id)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${it.id}`}
                    id={`faq-tab-${it.id}`}
                  >
                    <span>{it.q}</span>
                    <span className="caret" aria-hidden>
                      ▾
                    </span>
                  </button>

                  {open && (
                    <div
                      id={`faq-panel-${it.id}`}
                      role="region"
                      aria-labelledby={`faq-tab-${it.id}`}
                      className="faq-a"
                    >
                      <p>{it.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Contact strip */}
      <div className="contact-strip">
        <div className="container contact-inner">
          <div>
            <p id="any-question" className="strong">
              Have questions before joining?
            </p>
            <p className="muted">
              We’re happy to help you choose the right tier and walk you through
              enrollment.
            </p>
          </div>
          <div className="cta-row">
            <a className="btn outline" href="tel:+1-954-818-2970">
              <PhoneIcon className="icon sm" /> Call Us
            </a>
            <a className="btn outline" href="mailto:info@busacc.org">
              <MailIcon className="icon sm" /> info@busacc.org
            </a>
          </div>
        </div>
      </div>
      {/* Footer CTA */}
      <section className="section" id="cta">
        <div className="container center">
          <h2>Ready to join?</h2>
          <p className="muted">
            It takes about 5 minutes to complete the form and submit payment.
          </p>
          <div className="cta-row">
            <a className="btn outline" href="/membership/enroll">
              Start Enrollment
            </a>
            <a className="btn outline" href="/membership/benefits">
              View Full Benefits
            </a>
            <a className="btn outline" href="/membership/payment">
              Go to Payment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MembershipPage;
