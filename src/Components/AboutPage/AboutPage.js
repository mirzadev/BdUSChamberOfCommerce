import React from "react";
import "./AboutPageStyle.css";
import infoIcon from "../../Assets/About/info.png";
import AboutImg1 from "../../Assets/About/about-parallax-img1.png";
import AboutImg2 from "../../Assets/About/about-parallax-img2.png";
import exec_president from "../../Assets/About/atique_president.jpg";
import exec1 from "../../Assets/About/atique_president.jpg";
import exec2 from "../../Assets/About/atique_president.jpg";
import exec3 from "../../Assets/About/atique_president.jpg";
import director1 from "../../Assets/About/atique_president.jpg";
import director2 from "../../Assets/About/atique_president.jpg";
import director3 from "../../Assets/About/atique_president.jpg";
import director4 from "../../Assets/About/atique_president.jpg";
import director5 from "../../Assets/About/atique_president.jpg";
import director6 from "../../Assets/About/atique_president.jpg";
import director7 from "../../Assets/About/atique_president.jpg";
import director8 from "../../Assets/About/atique_president.jpg";
import historyImg from "../../Assets/About/History-Image.png";
import purposeImg from "../../Assets/About/purpose-section.png";
// import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

const executiveCommittee = [
  {
    name: "Atiquer Rahman",
    role: "President",
    org: "AeroNex",
    photo: exec_president,
  },
  {
    name: "Cristobal Toral",
    role: "Vice President",
    org: "Toral - Wines & Spirits",
    photo: exec1,
  },
  {
    name: "Alejandro M. Jerez",
    role: "Treasurer",
    org: "Valoris Wealth",
    photo: exec2,
  },
  {
    name: "Nicolas Eguiguren",
    role: "Executive Secretary",
    org: "CXP-USA at Chilexpress",
    photo: exec3,
  },
];

const directors = [
  {
    name: "Nicolás Bascuñán",
    role: "Director",
    org: "WE Family Offices",
    photo: director1,
  },
  {
    name: "Enrique Málaga",
    role: "Director",
    org: "Amerant Bank",
    photo: director2,
  },
  {
    name: "Carlos Labra",
    role: "Director",
    org: "Unity Foundation",
    photo: director3,
  },
  {
    name: "Cristian Cerna",
    role: "Director",
    org: "AltaDirección Capital",
    photo: director4,
  },
  {
    name: "María Gabriela Sepulveda",
    role: "Directora",
    org: "Innova Advisors",
    photo: director5,
  },
  {
    name: "Rodrigo Cárcamo",
    role: "Marketing Director",
    org: "Tucango",
    photo: director6,
  },
  {
    name: "Gerardo Weinstein",
    role: "Director",
    org: "SmartketingSales",
    photo: director7,
  },
  {
    name: "Ivan Saldias Karl",
    role: "Director",
    org: "Deconova Int'l Group",
    photo: director8,
  },
];
const initials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function About() {
  return (
    <div className="about-page" style={{ position: "relative", zIndex: 1 }}>
      {/* <AnimatedBackground /> */}
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>ABOUT US</h1>
        </div>
      </div>

      {/* About BD-US Chamber of Commerce */}
      <section className="about-section">
        <div className="info-area">
          <img src={infoIcon} alt="About Information" className="icon" />
          <h2>Bangladesh-US Chamber of Commerce</h2>
          <p className="header-info">
            A non-profit organization based in Miami, Florida
          </p>
          <div className="core-row">
            <div className="core-text">
              <p>
                It's primary mission is to serve as a bridge between Bangladesh
                and the United States, facilitating and expanding the exchange
                of goods, services, projects, and investment. The Chamber also
                supports cultural and sporting initiatives that strengthen
                networks and, ultimately, generate new business opportunities
                between both countries.
              </p>
              <p>
                Our members include executives, professionals, and entrepreneurs
                from a wide range of industries who aim to broaden their
                connections and share ideas, projects, and ventures. We foster
                collaboration with peer chambers and business communities across
                the U.S. and Bangladesh to promote mutual growth.
              </p>
            </div>
            <a
              href="/service"
              className="refering-link"
              aria-label="Learn more about our accuracy promise"
            >
              Learn More..
            </a>
          </div>
          <div className="core-image">
            <img
              src={AboutImg1} // replace with your imported image
              alt="About Us"
              className="animated-image-strong"
            />
            <img
              src={AboutImg2} // replace with your imported image
              alt="About Us"
              className="animated-image-strong"
            />
          </div>
        </div>
      </section>
      <section className="board-section">
        <header className="board-header">
          <h2>Board of Directors</h2>
        </header>

        <div className="board-block">
          <h3 className="board-subtitle">Executive Committee</h3>
          <ul className="board-grid" role="list">
            {executiveCommittee.map((m) => (
              <li className="board-card" key={m.name}>
                <img
                  className="board-img"
                  src={m.photo}
                  alt={`${m.name} portrait`}
                  loading="lazy"
                />
                <div className="card-body">
                  <h4 className="name">{m.name}</h4>
                  <p className="role">{m.role}</p>
                  <p className="org">{m.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="board-block">
          <h3 className="board-subtitle" id="directors-area">
            Directors
          </h3>
          <ul className="board-grid" role="list">
            {directors.map((m) => (
              <li className="board-card" key={m.name}>
                <img
                  className="board-img"
                  src={m.photo}
                  alt={`${m.name} portrait`}
                  loading="lazy"
                />
                <div className="card-body">
                  <h4 className="name">{m.name}</h4>
                  <p className="role">{m.role}</p>
                  <p className="org">{m.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="history-section">
        <div className="history-inner">
          <div className="history-image">
            <div className="polygon">
              <img
                src={historyImg} // import your image: import historyImg from "...";
                alt="Historic moment of the Chamber"
                loading="lazy"
                id="animated-image-strong"
              />
            </div>
          </div>

          <div className="history-copy">
            <h3>History</h3>
            <p>
              Bangladesh American Chamber of Commerce (BACC) is a
              self-financing, non-government organization established in 2007.
              The Chamber sustains its operations through annual membership dues
              as well as revenue from events, programs, and publications it
              produces. Guided by a mission to deepen Bangladesh–U.S. commercial
              ties, BACC connects businesses, investors, and professionals
              across sectors and stages of growth.
            </p>
            <p>
              Since its inception, BACC has delivered a consistent track record
              of impact—hosting trade missions and sector roundtables,
              organizing networking forums and skills workshops, and publishing
              practical market insights for members. The Chamber has helped
              catalyze partnerships, support SME export readiness, and amplify
              member voices in policy dialogues. Through these efforts, BACC
              continues to create tangible opportunities and long-term value for
              the Bangladesh–U.S. business community.
            </p>

            <div className="history-cta">
              <a className="history-link" href="/membership">
                MEMBERSHIP
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="purpose-section">
        <div className="purpose-grid">
          {/* Left: copy */}
          <div className="purpose-content">
            <h3 className="purpose-title">Main Purpose</h3>
            <ul className="purpose-list">
              <li>
                Join the community of professionals and Bangladeshi businesses
                based in Miami.
              </li>
              <li>
                Establish activities where the Bangladeshi community in Miami
                can meet and promote their businesses.
              </li>
              <li>
                Manage initiatives between Miami and Bangladesh where
                professionals and companies—both Bangladeshi and American—can
                build trade links and promote products and services.
              </li>
              <li>
                Partner with relevant state and trade agencies in Florida to
                help new businesses from Bangladesh establish a presence in
                Miami.
              </li>
              <li>
                Serve as a platform to support investment and trade-promotion
                initiatives that spotlight Bangladesh as an attractive
                destination.
              </li>
            </ul>
          </div>

          {/* Right: circular image */}
          <div className="purpose-media">
            <figure className="circle-frame">
              <img
                src={purposeImg} // import your image e.g. `import purposeImg from "../../Assets/About/purpose.jpg";`
                alt="Business networking across Bangladesh and the U.S."
                className="circle-img"
                loading="lazy"
                id="animated-image-strong"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="faq-inner">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {/* 1 */}
            <details className="faq-item">
              <summary>
                <span>
                  What is the Bangladesh–US Chamber of Commerce (BACC)?
                </span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                BACC is a non-profit business chamber that connects companies
                and professionals across Bangladesh and the United States. We
                promote trade, investment, knowledge-sharing, and professional
                networking through programs, events, and partnerships.
              </div>
            </details>

            {/* 2 */}
            <details className="faq-item">
              <summary>
                <span>Who can become a member?</span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                Membership is open to companies, startups, non-profits, and
                individual professionals or students who are interested in
                Bangladesh–US commerce, investment, or collaboration.
              </div>
            </details>

            {/* 3 */}
            <details className="faq-item">
              <summary>
                <span>How do I join and what are the dues?</span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                Visit our Membership page to choose a tier and submit your
                application online. Annual dues vary by tier (Individual,
                Corporate, Sponsor). You’ll receive a confirmation email and
                onboarding details after approval.
              </div>
            </details>

            {/* 4 */}
            <details className="faq-item">
              <summary>
                <span>What benefits do members receive?</span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                Benefits include curated networking, access to trade intel,
                event discounts, visibility opportunities, introductions to
                partners, and participation in working groups or committees.
                Corporate tiers receive added branding and sponsorship options.
              </div>
            </details>

            {/* 5 */}
            <details className="faq-item">
              <summary>
                <span>Does BACC help with market entry and partnerships?</span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                Yes. We provide introductions, partner referrals, and practical
                guidance through sector roundtables and member-to-member
                connections. We can also connect you with legal, logistics,
                banking, and compliance partners.
              </div>
            </details>

            {/* 6 */}
            <details className="faq-item">
              <summary>
                <span>What events do you host and how often?</span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                We organize mixers, briefings, trade forums, and training
                workshops throughout the year, plus flagship programs. Members
                get priority registration and discounted rates.
              </div>
            </details>

            {/* 7 */}
            <details className="faq-item">
              <summary>
                <span>Can I sponsor an event or program?</span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                Absolutely. We offer tiered sponsorship packages with branding,
                speaking opportunities, and tailored activations. Contact us for
                the sponsorship kit.
              </div>
            </details>

            {/* 8 */}
            <details className="faq-item">
              <summary>
                <span>Do you have volunteer or committee opportunities?</span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                Yes—members can serve on committees (events, policy, SME/export,
                youth & students, etc.). It’s a great way to contribute and
                expand your network.
              </div>
            </details>

            {/* 9 */}
            <details className="faq-item">
              <summary>
                <span>Can I join if I don’t live in Miami or the US?</span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                Yes. We welcome members from anywhere. Many of our programs
                include virtual access, and we facilitate cross-border
                connections year-round.
              </div>
            </details>

            {/* 10 */}
            <details className="faq-item">
              <summary>
                <span>How can I contact BACC?</span>
                <i className="caret" aria-hidden="true" />
              </summary>
              <div className="faq-content">
                Use the Contact page or email us. Office hours are
                Monday–Friday, 9am–5pm (ET). You can also follow us on our
                social channels for updates.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
