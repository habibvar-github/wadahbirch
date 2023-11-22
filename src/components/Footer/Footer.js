import React from "react";
import "./Footer.css"; // Make sure to create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="email-subscription">
        <h2>Give your inbox a refresh.</h2>
        <p>
          10% off your first order when you sign up for our plastic-free and
          spam-free emails.
        </p>
        <form className="subscription-form">
          <input
            type="email"
            placeholder="Enter email address"
            aria-label="Email Address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>SHOP</h4>
          <ul>
            <li>
              <a href="/all-products">All Products</a>
            </li>
            <li>
              <a href="/oral-care">Oral Care</a>
            </li>
            <li>
              <a href="/personal-care">Personal Care</a>
            </li>
            <li>
              <a href="/bundles">Bundles</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>ABOUT</h4>
          <ul>
            <li>
              <a href="/ingredients">Ingredients</a>
            </li>
            <li>
              <a href="/sustainability">Sustainability</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>MORE</h4>
          <ul>
            <li>
              <a href="/wholesale">Wholesale</a>
            </li>
            <li>
              <a href="/store-locator">Store Locator</a>
            </li>
          </ul>
        </div>
        <div className="footer-socials-and-certifications">
          {/* Add social icons here */}
          {/* Add certification logos here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Wadah Birch. All Rights Reserved.</p>
        <p>
          Icon by <a href="https://freeicons.io/profile/3">icon king1</a>
          on <a href="https://freeicons.io">freeicons.io</a>
        </p>
        <div className="footer-contact-links">
          <a href="mailto:info@wadahbirch.com">info@wadahbirch.com</a>
          {/* Add other contact details and legal links here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
