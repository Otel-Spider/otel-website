import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/shared/footer.css';

const Footer = () => {
  return (
    <footer className="footer-main bg-dark text-light">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-4">
          {/* Left Column - Company Info */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="footer-section">
              <img src={`${process.env.PUBLIC_URL}/logos/Otel-Spider-Logo-Finalfiles-1920w.png`} alt="OTEL Website" height="60" className="logo mb-3" />
              <h5 className="footer-title">OTEL Website</h5>
              <p className="footer-description">
                Your trusted technology partner for innovative solutions and digital transformation.
              </p>
              <p className="copyright-text mt-3">
                &copy; 2025 OTEL Website. All rights reserved.
              </p>
            </div>
          </div>
          
          {/* Vertical Divider */}
          <div className="col-lg-1 d-none d-lg-block">
            <div className="footer-divider-vertical"></div>
          </div>
          
          {/* Second Column - Get to Know Us */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-section">
              <h5 className="footer-title">Get to Know Us</h5>
              <div className="footer-links-two-columns">
                <ul className="footer-links">
                  <li><Link to="/" className="footer-link">Home</Link></li>
                  <li><Link to="/about" className="footer-link">About Us</Link></li>
                  <li><Link to="/services" className="footer-link">Services</Link></li>
                  <li><Link to="/testimonials" className="footer-link">Testimonials</Link></li>
                  <li><Link to="/projects" className="footer-link">Projects</Link></li>
                </ul>
                <ul className="footer-links">
                  <li><Link to="/clients" className="footer-link">Clients</Link></li>
                  <li><Link to="/blog" className="footer-link">Blog</Link></li>
                  <li><Link to="/news" className="footer-link">News</Link></li>
                  <li><Link to="/careers" className="footer-link">Careers</Link></li>
                  <li><Link to="/contact" className="footer-link">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Vertical Divider */}
          <div className="col-lg-1 d-none d-lg-block">
            <div className="footer-divider-vertical"></div>
          </div>
          
          {/* Third Column - Come Visit Us */}
          <div className="col-lg-1 col-md-6 col-6">
            <div className="footer-section">
              <h5 className="footer-title">Visit Us</h5>
              <ul className="footer-links">
                <li><span className="footer-link">Cairo Office</span></li>
                <li><span className="footer-link">Alexandria Branch</span></li>
                <li><span className="footer-link">Giza Development Center</span></li>
              </ul>
            </div>
          </div>
          
          {/* Vertical Divider */}
          <div className="col-lg-1 d-none d-lg-block">
            <div className="footer-divider-vertical"></div>
          </div>
          
          {/* Fourth Column - Follow Us */}
          <div className="col-lg-1 col-md-6 col-6">
            <div className="footer-section">
              <h5 className="footer-title">Follow Us</h5>
              <div className="social-links-vertical">
                <a href="#" aria-label="Facebook" className="social-link-vertical">
                  <i className="fab fa-facebook"></i>
                  
                </a>
                <a href="#" aria-label="Twitter" className="social-link-vertical">
                  <i className="fab fa-twitter"></i>
                  
                </a>
                <a href="#" aria-label="LinkedIn" className="social-link-vertical">
                  <i className="fab fa-linkedin"></i>
                  
                </a>
                <a href="#" aria-label="Instagram" className="social-link-vertical">
                  <i className="fab fa-instagram"></i>
                  
                </a>
                <a href="#" aria-label="YouTube" className="social-link-vertical">
                  <i className="fab fa-youtube"></i>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
