import React from "react";
import "./Footer.css";
import logo from "./Img/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section footer-logo">
            <img src={logo} alt="Company Logo" className="footer-logo-img" />
            <p>
              We supply high-quality industrial products including valves,
              cables, joints, plumbing items and more across Oman and the GCC.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About Us</a>
              </li>
              <li>
                <a href="/products">All Products</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Product Categories</h4>
            <ul>
              <li>
                <a href="#">Mechanical Products</a>
              </li>
              <li>
                <a href="#">Macoga - Expansion Joints</a>
              </li>
              <li>
                <a href="#">Electrical Products</a>
              </li>
              <li>
                <a href="#">Oil & Gas Products</a>
              </li>
              <li>
                <a href="#">Tubefit</a>
              </li>
              <li>
                <a href="#">Valve Products</a>
              </li>
              <li>
                <a href="#">Plumbing Materials</a>
              </li>
              <li>
                <a href="#">Safety Items</a>
              </li>
              <li>
                <a href="#">Sanitary Ware</a>
              </li>
              <li>
                <a href="#">Plywood Items</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              📞{" "}
              <a href="tel:+96898128375" className="contact-link">
                +968-98128375
              </a>
            </p>
            <p>
              ✉{" "}
              <a
                href="mailto:highrisetrade72@gmail.com"
                className="contact-link"
              >
                highrisetrade72@gmail.com
              </a>
            </p>
            <p>📍 Industrial Area, Muscat, Oman</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;