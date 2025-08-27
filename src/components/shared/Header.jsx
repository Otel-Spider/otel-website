import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/shared/header.css';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isSideMenuOpen]);

  return (
    <header className="header-main">
      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Left Menu Button */}
          <div className="menu-toggle-container">
            <button 
              className="navbar-toggler menu-toggle-btn" 
              type="button" 
              aria-label="Toggle side menu"
              onClick={toggleSideMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
            <span className="menu-text">Menu</span>
          </div>
          
          {/* Centered Logo */}
          <div className="navbar-brand-container">
            <Link className="navbar-brand p-0" to="/">
              <img src={`${process.env.PUBLIC_URL}/logos/Otel-Spider-Logo-Finalfiles-1920w.png`} alt="OTEL Website" height="80" className="logo" />
            </Link>
          </div>
          
          {/* Right Buttons */}
          <div className="navbar-actions">
            <Link className="btn btn-outline-primary me-2" to="/support">
              Support
            </Link>
            <Link className="btn btn-primary" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Side Menu for Mobile */}
      <div className={`side-menu ${isSideMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-overlay" onClick={closeSideMenu}></div>
        <div className="side-menu-content">
          <div className="side-menu-header">
            <Link className="navbar-brand" to="/" onClick={closeSideMenu}>
              <img src={`${process.env.PUBLIC_URL}/logos/Otel-Spider-Logo-Finalfiles-1920w.png`} alt="OTEL Website" height="60" className="logo" />
            </Link>
            <button 
              className="side-menu-close" 
              onClick={closeSideMenu}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <nav className="side-menu-nav">
            <ul className="side-menu-list">
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/" onClick={closeSideMenu}>Home</Link>
              </li>
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/about" onClick={closeSideMenu}>About Us</Link>
              </li>
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/services" onClick={closeSideMenu}>Services</Link>
              </li>
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/success-stories" onClick={closeSideMenu}>Success Stories</Link>
              </li>
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/clients" onClick={closeSideMenu}>Clients</Link>
              </li>
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/resources" onClick={closeSideMenu}>Resources</Link>
              </li>
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/careers" onClick={closeSideMenu}>Careers</Link>
              </li>
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/contact" onClick={closeSideMenu}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          
                     <div className="side-menu-footer">
             <div className="side-menu-contact">
               <div className="contact-item">
                 <i className="fas fa-phone me-2"></i>
                 <span>+1 (555) 123-4567</span>
               </div>
               <div className="contact-item">
                 <i className="fas fa-envelope me-2"></i>
                 <span>info@otelwebsite.com</span>
               </div>
             </div>
             <div className="side-menu-social">
               <a href="#" className="social-link-black" aria-label="Facebook">
                 <i className="fab fa-facebook-f"></i>
               </a>
               <a href="#" className="social-link-black" aria-label="Twitter">
                 <i className="fab fa-twitter"></i>
               </a>
               <a href="#" className="social-link-black" aria-label="LinkedIn">
                 <i className="fab fa-linkedin-in"></i>
               </a>
               <a href="#" className="social-link-black" aria-label="Instagram">
                 <i className="fab fa-instagram"></i>
               </a>
               <a href="#" className="social-link-black" aria-label="YouTube">
                 <i className="fab fa-youtube"></i>
               </a>
             </div>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
