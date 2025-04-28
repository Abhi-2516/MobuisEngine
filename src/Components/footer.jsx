import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-logo-container">
          <img src="src\images\footer.png" alt="MobiusEngine Logo" className="footer-logo" />
        </div>

        <div className="footer-info-container">
          <div className="footer-info">
            <h4>Address</h4>
            <p>1875 Mission St Ste 103 #4450<br />San Francisco, CA 94103</p>
          </div>
          <div className="footer-info">
            <h4>Email</h4>
            <p><a href="mailto:finance@mobiusengine.ai">finance@mobiusengine.ai</a></p>
          </div>
          <div className="footer-info">
            <h4>Telephone</h4>
            <p><a href="tel:6508896026">650-889-6026</a></p>
          </div>
          <div className="footer-info">
            <h4>Socials</h4>
            <div className="social-icons">
              <a href="#"><img src="src\images\ll.png" alt="LinkedIn" /></a>
              <a href="#"><img src="src\images\ll.png" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Mobiusservices LLC</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
