import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/home/footer.css';

const Footer = () => {
  return (
    <footer className="footer-main bg-dark text-light">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-4">
          {/* Company Info Section */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="footer-section">
              <img src="/logos/Otel-Spider-Logo-Finalfiles-1920w.png" alt="OTEL Website" height="60" className="logo mb-3" />
              <h5 className="footer-title">OTEL Website</h5>
              <p className="footer-description">
                Your trusted technology partner for innovative solutions and digital transformation.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" aria-label="Twitter" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="Instagram" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-section">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/services" className="footer-link">Services</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-section">
              <h5 className="footer-title">Services</h5>
              <ul className="footer-links">
                <li><Link to="/services/web-development" className="footer-link">Web Development</Link></li>
                <li><Link to="/services/mobile-apps" className="footer-link">Mobile Apps</Link></li>
                <li><Link to="/services/consulting" className="footer-link">Consulting</Link></li>
                <li><Link to="/services/cloud-solutions" className="footer-link">Cloud Solutions</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Resources Section */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-section">
              <h5 className="footer-title">Resources</h5>
              <ul className="footer-links">
                <li><Link to="/blog" className="footer-link">Blog</Link></li>
                <li><Link to="/news" className="footer-link">News</Link></li>
                <li><Link to="/careers" className="footer-link">Careers</Link></li>
                <li><Link to="/sitemap" className="footer-link">Sitemap</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-section">
              <h5 className="footer-title">Contact</h5>
              <ul className="footer-contact">
                <li className="contact-item">
                  <i className="fas fa-phone contact-icon"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="contact-item">
                  <i className="fas fa-envelope contact-icon"></i>
                  <span>info@otelwebsite.com</span>
                </li>
                <li className="contact-item">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <span>123 Tech Street, Digital City</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <hr className="footer-divider" />
          <div className="row align-items-center">
            <div className="col-md-6 col-12 mb-3 mb-md-0">
              <p className="copyright-text">
                &copy; 2025 OTEL Website. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <div className="footer-legal">
                <Link to="/privacy" className="legal-link">Privacy Policy</Link>
                <Link to="/terms" className="legal-link">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
