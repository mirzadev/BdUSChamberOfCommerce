import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import "./ContactUsStyles.css";
import CorporateLogo from "../../Assets/Home/bacc_logo.png";
import MapComponent from "./MapLocation";
// import AnimatedBackground1 from "../AnimatedBackground1/AnimatedBackground";
// install email js --   npm install emailjs-com
// email.js is connected using fashionrk212@gmail.com tamplate. Mail going to fobanacentral@gmail.com

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 10000); // Clear message after 10 seconds

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [status]);

  // To get animated Background
  useEffect(() => {
    document.body.classList.add("has-animated-bg");
    return () => document.body.classList.remove("has-animated-bg");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "All fields are required!" });
      return;
    }

    // Send email using EmailJS service
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_a2wnrfo",
        "template_sqoppcp",
        templateParams,
        "y1NCmHhHJJPaVsbR_"
      )
      .then(
        (response) => {
          setStatus({
            type: "success",
            message: "Your message has been sent successfully!",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <div>
      <div className="contact-us-container">
        {/* <AnimatedBackground1 /> */}
        <div className="contact-hero-section">
          <div className="hero-overlay">
            <h1>CONTACT US</h1>
          </div>
        </div>
        <div className="contactUs_header">
          <img
            src={CorporateLogo}
            alt="Healthcare"
            className="Corporate-Logo"
          />
        </div>
        <div className="contact-page">
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
                maxLength="1000"
                rows="6"
              />
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
        {status && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}
        <div className="ContactInfo">
          <div className="office-loc">
            <div
              className="fa-solid fa-thumbtack"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Our Office</h2>
            <Link
              to="https://maps.app.goo.gl/oaPLhEvRJJRH8x9q8"
              target="_blank"
              rel="noreferrer"
            >
              <div>21118 SWEETWATER LANE NORTH,</div>
              <div>BOCA RATON, FL 33428</div>
            </Link>
          </div>
          <div className="tel-contact">
            <div
              className="fa-solid fa-phone"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Phone</h2>
            <div className="phoneNumber">1(954) 818-2970 (Cell)</div>
            <div className="phoneNumber">1(954) 818-2970 (Office)</div>
          </div>
          <div className="email-contact">
            <div
              className="fa-solid fa-envelope"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Email</h2>
            <Link to="mailto:info@psptech.net" target="_blank" rel="noreferrer">
              <p className="email-address">BACCservice2024@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="Official_Contact">
        <div className="map_header">
          <h1>ON YOUR MAP</h1>
        </div>
        <div className="map-location">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
