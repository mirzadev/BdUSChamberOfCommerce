import "./FooterStyles.css";
import FaceBook from "../../Assets/footerItem/Facebook.png";
import Twiter from "../../Assets/footerItem/Twiter.png";
import YouTube from "../../Assets/footerItem/YouTube.png";
import Location from "../../Assets/footerItem/Location_Symbol.png";
import Telephone from "../../Assets/footerItem/Telephone_Logo.png";
import Email from "../../Assets/footerItem/Email_Logo.png";
import pspTechLogo from "../../Assets/footerItem/pspTech-logo.png";
import BACCLogo from "../../Assets/Home/bacc_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom">
        <div className="social-media-div">
          <h4>Social Media</h4>
          <div className="social-media">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FaceBook} alt="facebook" height="40" width="40" />
            </Link>
            <Link to="/" target="_blank" rel="noreferrer">
              <img
                className="twiter"
                src={Twiter}
                alt="twiter"
                height="40"
                width="40"
              />
            </Link>
            <Link
              to="https://www.youtube.com/@pspmusic-florida1643"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YouTube} alt="youtube" height="40" width="50" />
            </Link>
          </div>
        </div>
        <div className="useful-links">
          <h4>Useful Links</h4>
          <div className="link-menues">
            <div className="link-menu-1">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/event">Event</Link>
            </div>
            <div className="link-menu-2">
              <Link to="/membership">Membership</Link>
              <Link to="/enrolmentforms">Enrollment Forms</Link>
              <Link to="/benefit">Member's Benefit</Link>
              <Link to="/membershippayments">Membership Payments</Link>
            </div>
            <div className="link-menu-3">
              <Link to="/contact">Contact Us</Link>
              <Link to="/trade">Trade Mission</Link>
              <Link to="/tradeenrollment">Trade Enrollment</Link>
              <Link to="/tradepayments">Trade Payments</Link>
            </div>
          </div>
        </div>
        <div className="footer-contact-us">
          <h4>Contact Us</h4>
          <div className="contact-footer_items">
            <div className="location-address">
              <Link
                to="https://maps.app.goo.gl/YunFfjs7cT2uq6My8"
                target="_blank"
                rel="noreferrer"
                className="location-link"
              >
                <div className="loc_address_cont">
                  <img
                    src={Location}
                    alt="location"
                    className="location-image"
                  />
                  <p className="location-address">
                    21118 N Sweetwater Ln, Boca Raton, FL 33428
                  </p>
                </div>
              </Link>
              <div className="telephone">
                <img
                  src={Telephone}
                  alt="telephone"
                  className="telephone-image"
                />
                <p className="telephone-number">1(954) 818-2970 (Cell)</p>
              </div>
              <Link
                to="mailto:BACCservice@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="email">
                  <img src={Email} alt="email" className="email-image" />
                  <p className="email-address">BACCservice2024@gmail.com</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <div className="footer_logo">
          <img src={BACCLogo} alt="BACC logo" className="footer-brand" />
        </div>
        <div className="copyright-BACC">
          <p>Copyright @ Bangladesh Chamber of Commerce, FL, USA</p>
        </div>
        <div className="copyright-note">
          <Link to="https://psptech.net/" target="_blank" rel="noreferrer">
            <p>Tech Support:</p>
            <img src={pspTechLogo} alt="psptech" height="35" width="35" />
            <p>PSP Technology Inc</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
