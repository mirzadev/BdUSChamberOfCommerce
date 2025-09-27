import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MembersBenefitPageStyles.css";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
// (Optional) swap these with your own images if you like
import BACCLogo from "../../Assets/Home/bacc_logo.png";
import HeroImage from "../../Assets/Membership/Membership-1.jpg";
import IconNetworking from "../../Assets/Membership-benefit/network.png";
import IconMatchmaking from "../../Assets/Membership-benefit/MarketAccessMatchmaking.png";
import IconVisibility from "../../Assets/Membership-benefit/VisibilityPromotion.png";
import IconTrade from "../../Assets/Membership-benefit/tradeExchange.png";
import IconPolicy from "../../Assets/Membership-benefit/policy.png";
import IconEvents from "../../Assets/Membership-benefit/EventsTradeMsn.png";
import IconSupport from "../../Assets/Membership-benefit/support.png";
import MembersBenefit from "../../Assets/Membership-benefit/membersBenefit.jpg";
import IconTraining from "../../Assets/Membership-benefit/training.png";
import IconInsights from "../../Assets/Membership-benefit/Intelligence-Insight.png";

function MembersBenefitPage() {
  // to get the background effect I am using this useEffect
  useEffect(() => {
    document.body.classList.add("has-animated-bg");
    return () => document.body.classList.remove("has-animated-bg");
  }, []);
  return (
    <div className="mb-page">
      {/* Hero */}
      <section className="mb-hero">
        <img
          className="mb-hero-bg"
          src={HeroImage}
          alt="Members collaborating"
        />
        <div className="mb-hero-overlay">
          <div className="mb-hero-inner">
            <img className="mb-hero-logo" src={BACCLogo} alt="BACC logo" />
            <h1>MEMBERSHIP BENEFITS</h1>
            <p>
              Join the Bangladesh–American business community to grow your
              network, unlock opportunities, and gain practical support across
              the Bangladesh–USA corridor.
            </p>
            <div className="mb-cta-row">
              <Link className="mb-btn primary" to="/enrolmentforms">
                Start Enrollment
              </Link>
              <Link className="mb-btn outline" to="/enrolmentforms">
                View Process
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <AnimatedBackground /> */}
      {/* Why join */}
      <section className="mb-section" aria-labelledby="why-join">
        <div className="mb-container">
          <h2 id="why-join" className="mb-h2">
            Why Join BACC?
          </h2>

          <div className="mb-feature-grid">
            <article className="mb-feature">
              <img
                className="mb-feature-img"
                src={IconNetworking}
                alt="High-Value Networking"
              />
              <h3 className="mb-feature-title">High-Value Networking</h3>
              <p className="mb-feature-text">
                Connect with executives, exporters, importers, investors, and
                policymakers on both sides of the ocean.
              </p>
            </article>

            <article className="mb-feature">
              <img
                className="mb-feature-img"
                src={IconMatchmaking}
                alt="Market Access & Matchmaking"
              />
              <h3 className="mb-feature-title">Market Access & Matchmaking</h3>
              <p className="mb-feature-text">
                Get warm introductions, B2B/B2G matchmaking, and curated
                referrals relevant to your sector.
              </p>
            </article>

            <article className="mb-feature">
              <img
                className="mb-feature-img"
                src={IconVisibility}
                alt="Visibility & Promotion"
              />
              <h3 className="mb-feature-title">Visibility & Promotion</h3>
              <p className="mb-feature-text">
                Be listed in the member directory, share news in our channels,
                and gain speaking/sponsorship options.
              </p>
            </article>
            <article className="mb-feature">
              <img
                className="mb-feature-img"
                src={IconTrade}
                alt="Events & Trade Missions"
              />
              <h3 className="mb-feature-title">US-BANGLA Trade Relations</h3>
              <p className="mb-feature-text">
                Activities, events, and current news shaping the commercial
                relationship between Bangladesh and the United States.
              </p>
            </article>
            <article className="mb-feature">
              <img
                className="mb-feature-img"
                src={IconPolicy}
                alt="Policy & Advocacy"
              />
              <h3 className="mb-feature-title">Policy & Advocacy</h3>
              <p className="mb-feature-text">
                Stay informed on regulatory changes; add your voice to
                delegations, roundtables, and comments.
              </p>
            </article>

            <article className="mb-feature">
              <img
                className="mb-feature-img"
                src={IconEvents}
                alt="Events & Trade Missions"
              />
              <h3 className="mb-feature-title">Events & Trade Missions</h3>
              <p className="mb-feature-text">
                Access member-only briefings, delegations, and trade missions
                between Bangladesh and the USA.
              </p>
            </article>

            <article className="mb-feature">
              <img
                className="mb-feature-img"
                src={IconSupport}
                alt="Practical Support"
              />
              <h3 className="mb-feature-title">Practical Support</h3>
              <p className="mb-feature-text">
                Light-touch help with due diligence, soft-landing, local
                know-how, and vendor/partner discovery.
              </p>
            </article>
            <article className="mb-feature">
              <img
                className="mb-feature-img"
                src={IconTraining}
                alt="Training & Workshops"
              />
              <h3 className="mb-feature-title">Training & Workshops</h3>
              <p className="mb-feature-text">
                Sharpen your team’s capabilities with practical sessions on
                exporting to the U.S., compliance, cross-border contracts, and
                go-to-market tactics.
              </p>
            </article>

            {/* New feature: Market Intelligence & Insights */}
            <article className="mb-feature">
              <img
                className="mb-feature-img"
                src={IconInsights}
                alt="Market Intelligence & Insights"
              />
              <h3 className="mb-feature-title">
                Market Intelligence & Insights
              </h3>
              <p className="mb-feature-text">
                Receive curated updates on sector trends, pricing, and policy
                changes—so you can move early and make data-driven decisions.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* Membership Benefits */}
      <section className="mb-section alt">
        <div className="mb-container">
          <div className="mb-get2col">
            {/* Left column */}
            <div className="mb-get-left">
              <h2 className="mb-h2">What You Get as a Member</h2>
              <ul className="mb-perks">
                <li>
                  <span className="dot" />
                  Directory listing with website link and primary contact
                  details.
                </li>
                <li>
                  <span className="dot" />
                  Invitations to member-only briefings, delegations, and
                  roundtables.
                </li>
                <li>
                  <span className="dot" />
                  Curated introductions to buyers, suppliers, partners, and
                  advisors.
                </li>
                <li>
                  <span className="dot" />
                  Brand exposure via sponsorships, exhibits, and speaking slots.
                </li>
                <li>
                  <span className="dot" />
                  Preferred rates for select trainings, programs, and
                  conferences.
                </li>
                <li>
                  <span className="dot" />
                  Timely updates on policy, trade facilitation, and market
                  insights.
                </li>
              </ul>
            </div>

            {/* Right column (image) */}
            <figure className="mb-get-right">
              <img
                className="mb-get-photo"
                src={MembersBenefit}
                alt="BACC members networking at a chamber event"
                id="animated-image-strong"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Tiers overview */}
      <section className="mb-section">
        <div className="mb-container">
          <h2 className="mb-h2">Membership Tiers</h2>
          <div className="mb-tier-grid">
            <Tier
              name="Single"
              price="$100 / year"
              points={[
                "Individual member benefits",
                "Member directory listing",
                "Access to member events",
              ]}
            />
            <Tier
              name="Couple"
              price="$150 / year"
              points={[
                "Two named individuals",
                "Directory listing",
                "Access to member events",
              ]}
            />
            <Tier
              name="Small Business"
              price="$175 / year"
              points={[
                "1–3 persons covered",
                "Company profile listing",
                "Matchmaking support",
              ]}
            />
            <Tier
              name="Corporate"
              price="$250 / year"
              points={[
                "Up to 5 employees",
                "Priority matchmaking",
                "Speaking & promo options",
              ]}
              highlighted
            />
            <Tier
              name="Trustee"
              price="$500 / year"
              points={[
                "5+ employees",
                "Custom delegations & briefings",
                "Top-tier visibility & recognition",
              ]}
            />
          </div>

          <div className="mb-cta-row center">
            <Link className="mb-btn primary" to="/enrolmentforms">
              Join Now
            </Link>
            <Link className="mb-btn outline" to="/payment">
              Go to Payment
            </Link>
          </div>

          <p className="mb-note">
            * Annual dues shown in USD. Benefits may vary by event and
            availability.
          </p>
        </div>
      </section>

      {/* Contact strip */}
      <section className="mb-section contact">
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
              BACCFloridaUSA@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Tier({ name, price, points = [], highlighted = false }) {
  return (
    <article className={`mb-tier ${highlighted ? "is-hot" : ""}`}>
      <h4 className="mb-tier-name">{name}</h4>
      <div className="mb-tier-price">{price}</div>
      <ul className="mb-tier-points">
        {points.map((p, i) => (
          <li key={i}>
            <span className="tick" /> {p}
          </li>
        ))}
      </ul>
      <Link className="mb-btn primary full" to="/membership/enroll">
        Choose {name}
      </Link>
    </article>
  );
}

export default MembersBenefitPage;
