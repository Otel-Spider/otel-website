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
      {/* Top Header */}
      <div className="top-header bg-dark text-light py-2">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-8 col-lg-6">
              <div className="d-flex align-items-center">
                <div className="contact-item me-4">
                  <i className="fas fa-phone me-2"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope me-2"></i>
                  <span>info@otelwebsite.com</span>
                </div>
              </div>
            </div>
            <div className="col-4 col-lg-6">
              <div className="d-flex justify-content-end align-items-center">
                <div className="social-links">
                  <a href="#" className="text-light me-3" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-light me-3" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-light me-3" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-light me-3" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-light" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand p-0" to="/">
            <img src={`${process.env.PUBLIC_URL}/logos/Otel-Spider-Logo-Finalfiles-1920w.png`} alt="OTEL Website" height="80" className="logo" />
          </Link>
          
          <button 
            className="navbar-toggler d-lg-none" 
            type="button" 
            aria-label="Toggle side menu"
            onClick={toggleSideMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="d-none d-lg-flex navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/services/web-development">Web Development</Link></li>
                  <li><Link className="dropdown-item" to="/services/mobile-apps">Mobile Apps</Link></li>
                  <li><Link className="dropdown-item" to="/services/consulting">Technology Consulting</Link></li>
                  <li><Link className="dropdown-item" to="/services/cloud-solutions">Cloud Solutions</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Success Stories
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/testimonials">Testimonials</Link></li>
                  <li><Link className="dropdown-item" to="/projects">Featured Projects</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Clients
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/clients/featured">Featured Clients</Link></li>
                  <li><Link className="dropdown-item" to="/clients/previous-work">Previous Work</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                  <li><Link className="dropdown-item" to="/news">News</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/careers">Careers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
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
                <div className="side-menu-dropdown">
                  <span className="side-menu-link">Services</span>
                  <ul className="side-menu-submenu">
                    <li><Link className="side-menu-sublink" to="/services/web-development" onClick={closeSideMenu}>Web Development</Link></li>
                    <li><Link className="side-menu-sublink" to="/services/mobile-apps" onClick={closeSideMenu}>Mobile Apps</Link></li>
                    <li><Link className="side-menu-sublink" to="/services/consulting" onClick={closeSideMenu}>Technology Consulting</Link></li>
                    <li><Link className="side-menu-sublink" to="/services/cloud-solutions" onClick={closeSideMenu}>Cloud Solutions</Link></li>
                  </ul>
                </div>
              </li>
              <li className="side-menu-item">
                <div className="side-menu-dropdown">
                  <span className="side-menu-link">Success Stories</span>
                  <ul className="side-menu-submenu">
                    <li><Link className="side-menu-sublink" to="/testimonials" onClick={closeSideMenu}>Testimonials</Link></li>
                    <li><Link className="side-menu-sublink" to="/projects" onClick={closeSideMenu}>Featured Projects</Link></li>
                  </ul>
                </div>
              </li>
              <li className="side-menu-item">
                <div className="side-menu-dropdown">
                  <span className="side-menu-link">Clients</span>
                  <ul className="side-menu-submenu">
                    <li><Link className="side-menu-sublink" to="/clients/featured" onClick={closeSideMenu}>Featured Clients</Link></li>
                    <li><Link className="side-menu-sublink" to="/clients/previous-work" onClick={closeSideMenu}>Previous Work</Link></li>
                  </ul>
                </div>
              </li>
              <li className="side-menu-item">
                <div className="side-menu-dropdown">
                  <span className="side-menu-link">Resources</span>
                  <ul className="side-menu-submenu">
                    <li><Link className="side-menu-sublink" to="/blog" onClick={closeSideMenu}>Blog</Link></li>
                    <li><Link className="side-menu-sublink" to="/news" onClick={closeSideMenu}>News</Link></li>
                  </ul>
                </div>
              </li>
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/careers" onClick={closeSideMenu}>Careers</Link>
              </li>
              <li className="side-menu-item">
                <Link className="side-menu-link" to="/contact" onClick={closeSideMenu}>Contact</Link>
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
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
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
