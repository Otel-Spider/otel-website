import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/shared/footer.css';

const Footer = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Unobserve after first reveal to run once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    // Observe all elements with .reveal class
    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    if (revealElements) {
      revealElements.forEach((element) => {
        observer.observe(element);
      });
    }

    // Cleanup
    return () => {
      if (revealElements) {
        revealElements.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <footer ref={sectionRef} className="footer-main bg-dark text-light">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-4">
                      {/* Left Column - Company Info */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-section reveal" style={{ transitionDelay: '0.08s' }}>
                <img src={`${process.env.PUBLIC_URL}/logos/Otel-Spider-Logo-Finalfiles-1920w.png`} alt="Otel Spider" height="60" className="logo mb-3" />
                <h5 className="footer-title">Growing Hospitality, Together.</h5>
                <p className="footer-description">
                  Otel Spider delivers hospitality-focused eCommerce and marketing services that help hotels boost direct bookings, strengthen online presence, and achieve sustainable growth.
                </p>
                <p className="copyright-text mt-3">
                  &copy; 2019-2025 Otel Spider. All Rights Reserved
                </p>
              </div>
            </div>
          
                      {/* Vertical Divider */}
            <div className="col-lg-1 d-none d-lg-block">
              <div className="footer-divider-vertical reveal" style={{ transitionDelay: '0.16s' }}></div>
            </div>
            
            {/* Second Column - Get to Know Us */}
            <div className="col-lg-2 col-md-6 col-6">
              <div className="footer-section reveal" style={{ transitionDelay: '0.24s' }}>
                <h5 className="footer-title">Get To Know Us</h5>
                <div className="footer-links-two-columns">
                  <ul className="footer-links">
                    <li><Link to="/about" className="footer-link">About Us</Link></li>
                    <li><Link to="/services" className="footer-link">Services</Link></li>
                    <li><Link to="/success-stories" className="footer-link">Success Stories</Link></li>
                    <li><Link to="/clients" className="footer-link">Clients</Link></li>
                  </ul>
                  <ul className="footer-links">
                    <li><Link to="/careers" className="footer-link">Careers</Link></li>
                    <li><Link to="/blog" className="footer-link">Blog</Link></li>
                    <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                    <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          
                      {/* Vertical Divider */}
            <div className="col-lg-1 d-none d-lg-block">
              <div className="footer-divider-vertical reveal" style={{ transitionDelay: '0.32s' }}></div>
            </div>
            
            {/* Third Column - Come Visit Us */}
            <div className="col-lg-1 col-md-6 col-6">
              <div className="footer-section reveal" style={{ transitionDelay: '0.4s' }}>
                <h5 className="footer-title">Visit Us</h5>
                <ul className="footer-links">
                  <li><span className="footer-link">Cairo Office</span></li>
                  <li><span className="footer-link">Alexandria Branch</span></li>
                  <li><span className="footer-link">Giza Development Center</span></li>
                </ul>
                
                {/* Social Links - Mobile Only */}
                <div className="d-md-none mt-3">
                  <h5 className="footer-title">Follow Us</h5>
                  <div className="social-links-vertical">
                    <a href="https://www.linkedin.com/company/otel-spider" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link-vertical">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/OtelSpider" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link-vertical">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/otelspider/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link-vertical">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@otelspider" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link-vertical">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          
                      {/* Vertical Divider */}
            <div className="col-lg-1 d-none d-lg-block">
              <div className="footer-divider-vertical reveal" style={{ transitionDelay: '0.48s' }}></div>
            </div>
            
            {/* Fourth Column - Follow Us (Desktop Only) */}
            <div className="col-lg-1 col-md-6 col-6 d-none d-md-block">
              <div className="footer-section reveal" style={{ transitionDelay: '0.56s' }}>
                <h5 className="footer-title">Follow Us</h5>
                <div className="social-links-vertical">
                  <a href="https://www.linkedin.com/company/otel-spider" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link-vertical">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.facebook.com/OtelSpider" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link-vertical">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/otelspider/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link-vertical">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@otelspider" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link-vertical">
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
