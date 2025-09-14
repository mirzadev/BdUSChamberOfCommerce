// npm install framer-motion
import React, { useState, useEffect } from "react";
import "./HomeStyle.css";
import { motion, AnimatePresence } from "framer-motion";
import StatsSection from "../PerformanceCount/StatisticSection";
import MemberCarousel from "../OurMembers/OurMembersCarouselFunc";
// import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import BACC_Logo from "../../Assets/Home/bacc_logo.png";
import OfficeImg1 from "../../Assets/Home/OfficeImg-1.jpg";
import OfficeImg2 from "../../Assets/Home/OfficeImg-2.jpg";
import OfficeImg3 from "../../Assets/Home/OfficeImg-3.jpg";
import OfficeImg4 from "../../Assets/Home/OfficeImg-4.png";
import OfficeImg5 from "../../Assets/Home/OfficeImg-5.jpg";
import OfficeImg6 from "../../Assets/Home/OfficeImg-6.jpg";
import OfficeImg7 from "../../Assets/Home/OfficeImg-7.jpg";
import OfficeImg8 from "../../Assets/Home/OfficeImg-8.jpg";
import OfficeImg9 from "../../Assets/Home/OfficeImg-9.jpg";
import OfficeImg10 from "../../Assets/Home/OfficeImg-10.jpg";
import image1 from "../../Assets/Home/economicGrowth.png";
import image2 from "../../Assets/Home/communityBonding.png";
import image3 from "../../Assets/Home/CulturalPride.png";
import professionalLook from "../../Assets/Home/ProfessionalPicture.png";
import presidentImage from "../../Assets/Home/atique_president.jpg";
import presidentSignature from "../../Assets/Home/president_signature.png";
import promotionVisibility from "../../Assets/Home/PromotionVisibility.png";
import eventParticipation from "../../Assets/Home/EventParticipation.png";
import partnershipEntiry from "../../Assets/Home/PartnershipWithEntities.png";
import tradeExchange from "../../Assets/Home/tradeExchange.png";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

function HomeItems() {
  const homeImages = [
    OfficeImg1,
    OfficeImg2,
    OfficeImg3,
    OfficeImg4,
    OfficeImg5,
    OfficeImg6,
    OfficeImg7,
    OfficeImg8,
    OfficeImg9,
    OfficeImg10,
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % homeImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <AnimatedBackground />
      <div className="top-vision">
        <div className="BACC_logo">
          <img id="BACC-logo" src={BACC_Logo} alt="BACC logo" />
        </div>
        <h1 className="visually-hidden">
          Bangladesh American Chamber of Commerce
        </h1>
        <p>Empowering Business Through Unity</p>
      </div>
      <section className="home-section">
        <motion.div
          className="home-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Bangladesh American Chamber of Commerce</h2>
          <p>
            The Bangladesh American Chamber of Commerce is a collective of
            businesses, professionals, and individuals committed to advancing
            commercial ties between Bangladesh and the United States. Our
            mission is to foster bilateral trade and enhance intercultural
            understanding, serving as a vital channel for communication and
            information on emerging opportunities for interested stakeholders.
          </p>

          <p>
            We actively support initiatives that strengthen business
            collaboration, investment, and innovation across sectors. Through
            strategic partnerships and networking events, we empower our members
            to succeed in a dynamic global marketplace. The Chamber stands as a
            trusted advocate for growth, progress, and mutual prosperity between
            both nations.
          </p>
        </motion.div>
        <div className="home-image">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage} // important for triggering exit/enter
              src={homeImages[currentImage]}
              alt="Office team"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </section>
      <section className="president-message-section">
        <div className="message-wrapper">
          <div className="president-image">
            <img src={presidentImage} alt="Atiquer Rahman, President" />
            <div className="president-name">Atiquer Rahman, President</div>
          </div>
          <div className="president-text">
            <h2>A Message from the President</h2>
            <p>
              The Bangladesh American Chamber of Commerce is a for-profit
              corporation and an affiliate of the Association of Bi-National
              Chambers of Commerce. We are dedicated to creating trade
              opportunities and strengthening regional, national, and industrial
              commercial relationships between the United States and Bangladesh.
            </p>
            <p>
              Our mission is to empower members to foster and promote trade
              while enriching the economic and cultural ties that unite
              Bangladesh and the United States.
            </p>
            <div className="signature-block">
              <img src={presidentSignature} alt="Atiquer Rahman, President" />
              <strong>Atiquer Rahman</strong>
              <span className="president-designation">
                President, Bangladesh American Chamber of Commerce
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="culture-section">
        <h2>Our Core Values</h2>
        <p>
          At the Bangladesh American Chamber of Commerce, we are dedicated to
          building strong economic bridges and celebrating cultural unity. We
          champion the growth of our members through shared values, purposeful
          networking, and meaningful collaboration.
        </p>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-img">
              <img
                src={image1}
                alt="Economic Empowerment"
                className="section-img"
                height="100"
                width="100"
              />
            </div>
            <div className="value-text">
              <h3>Economic Growth</h3>
              <p>
                We support businesses and entrepreneurs to thrive by promoting
                trade, investment, and innovation between the U.S. and
                Bangladesh.
              </p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-img">
              <img
                src={image2}
                alt="Community Networking"
                className="section-img"
                height="120"
                width="120"
              />
            </div>
            <div className="value-text">
              <h3>Community Bonding</h3>
              <p>
                Our strength lies in our network. We foster trusted connections
                among professionals, leaders, and organizations with shared
                goals.
              </p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-img">
              <img
                src={image3}
                alt="Cultural Exchange"
                className="section-img"
                height="100"
                width="100"
              />
            </div>
            <div className="value-text">
              <h3>Cultural Pride</h3>
              <p>
                We honor our heritage and encourage cultural exchange, creating
                mutual respect and deeper understanding between our communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="statistic-header">
        <h2>Our Impact at a Glance</h2>
      </div>
      <StatsSection />
      <MemberCarousel />
      {/* Membership Section */}
      <section className="membership-section">
        <div className="Upper-Membership-section">
          <div className="upper-left">
            <motion.div
              className="membership-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Elect to Become a Member and Enjoy Our Benefits</h2>
              <p className="membership-lead">
                Your business can offer its tailored services to our community
                and promote your brand across our digital channels. Other
                benefits include:
              </p>
            </motion.div>

            <div className="membership-benefits">
              <article className="membership-card">
                <img
                  src={eventParticipation}
                  alt="benefit-icons"
                  className="benefit-icon"
                />
                <h3>Event Participation</h3>
                <p>
                  The Chamber hosts and sponsors a wide range of events to
                  create business opportunities for our members.
                </p>
              </article>

              <article className="membership-card">
                <img
                  src={partnershipEntiry}
                  alt="benefit-icons"
                  className="benefit-icon"
                />
                <h3>Partnership with Related Entities</h3>
                <p>
                  Facilitates deeper engagement and new business opportunities
                  with a broader network of professionals and organizations.
                </p>
              </article>

              <article className="membership-card">
                <img
                  src={promotionVisibility}
                  alt="benefit-icons"
                  className="benefit-icon"
                />
                <h3>Promotion & Visibility</h3>
                <p>
                  We provide multiple avenues for members to market their
                  products and services.
                </p>
              </article>

              <article className="membership-card">
                <img
                  src={tradeExchange}
                  alt="benefit-icons"
                  className="benefit-icon"
                />
                <h3>US - BANGLA Trade Relations</h3>
                <p>
                  Activities, events, and current news shaping the commercial
                  relationship between Bangladesh and the United States.
                </p>
              </article>
              <div id="membership-Link">
                <a className="membership-link" href="/membership">
                  HOW TO BE A MEMBER
                </a>
              </div>
            </div>

            <div className="upper-right">
              <img
                src={professionalLook}
                alt="Membership illustration"
                className="membership-hero"
              />
            </div>
          </div>
        </div>

        <div className="membership-ctas">
          <section className="membership-block">
            <h3>We are Available</h3>

            <div className="membership-hours">
              <p>Monday to Friday 9am to 5pm</p>
              <p>Online: 24 hours, 7 days a week</p>
            </div>

            <a className="membership-link" href="mailto:info@example.org">
              E-MAIL US
            </a>
          </section>

          <section className="membership-block">
            <h3>Main Location</h3>
            <address>
              21118 N Sweetwater Ln,
              <br />
              Boca Raton, FL 33428
            </address>
            <a className="membership-link" href="/contact">
              CONTACT US
            </a>
          </section>

          <section className="membership-block">
            <h3>Address in Bangladesh</h3>
            <address>
              Gulshan,
              <br />
              Dhaka.
            </address>
            <a className="membership-link" href="/contact">
              CONTACT US
            </a>
          </section>
        </div>
      </section>
    </div>
  );
}

export default HomeItems;
