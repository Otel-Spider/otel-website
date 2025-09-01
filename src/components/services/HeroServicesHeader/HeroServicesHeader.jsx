import React from 'react';
import '../../../assets/css/services/hero-services-header.css';

const HeroServicesHeader = ({ 
  label = "We are awesome designer",
  title = "Services simple",
  bgImageUrl = "/images/services-hero-bg.jpg"
}) => {
  return (
    <section 
      className="hero-services-header"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="hero-overlay"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 text-center text-white">
            <small className="hero-label d-block mb-3">
              {label}
            </small>
            <h1 className="hero-title display-3 fw-bold mb-0">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServicesHeader;
