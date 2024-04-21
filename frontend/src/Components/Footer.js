import React from 'react';
import '../CSS/Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* SHESHARE section */}
      <div className="footer-section">
        <h3>She-Share</h3>
        <ul>
          <li>About Us</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>Follow Us</li>
        </ul>
      </div>
      {/* Vertical line */}
      <div className="vertical-line"></div>
      {/* Support section */}
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li>FAQs</li>
          <li>Cancellation Policies</li>
        </ul>
      </div>
      {/* Vertical line */}
      <div className="vertical-line"></div>
      {/* Become a Host section */}
      <div className="footer-section">
        <h3>Become a Host</h3>
        <ul>
          <li>Hosting Resources</li>
          <li>Hosting Responsibility</li>
          <li>Share a Room</li>
          <li>Pets</li>
        </ul>
      </div>
      {/* Vertical line */}
      <div className="vertical-line"></div>
      {/* Term & Privacy section */}
      <div className="footer-section">
        <h3>Term & Privacy</h3>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policies</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
