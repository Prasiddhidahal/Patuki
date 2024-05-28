import React from "react";
import { FiMail } from "react-icons/fi";
import { FiMapPin, FiPhone } from "react-icons/fi";
import facebook from "../images/facebook.png";
import instagram from "../images/insta.png";
import twitter from "../images/twitter.png";
import "../styles/Footer.css"; // Correct path to Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <h2>Patuki</h2>
        <p>We are here to help Women with skills.</p>

        <div className="social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="insta" />
          </a>
          <a
            href="https://www.Twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="section">
        <h2>Contact Us</h2>
        <p>
          <FiPhone /> 9800922532
        </p>
        <p>
          <FiMail /> contact@patuki.com
        </p>
        <p>
          <FiMapPin /> Nepal
        </p>
      </div>
      <div className="section">
        <h2>About Us</h2>
        <p>Support</p>
        <p>Privacy & Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
