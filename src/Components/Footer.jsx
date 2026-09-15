import React from "react";
import "./Css/Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-features">
        <div className="footer-feature">
          <img src="https://flowera.in/uploads/secure-payment-png.png" alt="" />
          <div>
            <h4>Secure Payment</h4>
            <p>With support for cards, net banking, UPI, wallets & more, we offer seamless digital payment experience</p>
          </div>
        </div>
        <div className="footer-feature">
          <img src="https://flowera.in/uploads/trusted-brand-png.png" alt="" />
          <div>
            <h4>Most Trusted Brand</h4>
            <p>Our solutions are purely consumer centric, we listen to you and work for your safety, comfort and style.</p>
          </div>
        </div>
        <div className="footer-feature">
          <img src="https://flowera.in/uploads/gift-png.png" alt="" />
          <div>
            <h4>Customised Gifting Options</h4>
            <p>Our design experts make sure you find uniqueness and exclusivity in all our offerings</p>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          
            <div className="footer-logo-badge">
              <img src="/images/footer.webp" alt="" />
            </div>
          <p>
            Flowera is a one-stop solution for Flowers, cakes & gift delivery to
            More than 500plus locations in India.
          </p>
        </div>

        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="#">All City</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Refund & Cancellation</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Become a Vendor</a></li>
            <li><a href="#">Corporate Tie-ups</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#" className="footer-social-icon" style={{ background: "#3b5998" }}><FaFacebook fontSize={34} /></a>
            <a href="#" className="footer-social-icon" style={{ background: "#e1306c" }}><FaInstagram fontSize={34} /></a>
            <a href="#" className="footer-social-icon" style={{ background: "#0077b5" }}><FaLinkedin fontSize={34} /></a>
            <a href="#" className="footer-social-icon" style={{ background: "#1da1f2" }}><FaTwitter fontSize={34} /></a>
          </div>
          <div className="footer-payments">
            <img src="https://flowera.in/uploads/payment-strip.png" alt="" className="pay-visa" />
          </div>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <div className="footer-contact-item">📧 care@flowera.in</div>
          <div className="footer-contact-item">📞 +91 7828981660</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Flowera. All rights reserved. Design & Developed by{" "}
          <span className="footer-credit">insignia</span>
        </p>
      </div>
    </footer>
  );
}