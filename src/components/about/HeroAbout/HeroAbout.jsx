import React from 'react';
import './hero-about.css';

const HeroAbout = ({ imageSrc = '/images/about-me-2.jpg' }) => {
  return (
    <>
      {/* Hero section */}
      <section 
        className="hero-about"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="container-fluid h-100">
          <div className="row h-100">
            {/* Left column - Empty space */}
            <div className="col-lg-7 p-0">
            </div>

            {/* Right column - White card */}
            <div className="col-lg-5 d-flex align-items-center justify-content-center p-4 p-lg-5">
              <div className="card shadow rounded-3 border-0 w-100">
                <div className="card-body p-4 p-lg-5">
                  {/* Quote icon */}
                  <div className="mb-2">
                    <i className="fas fa-quote-left quote-icon" style={{ fontSize: '60px' }}></i>
                  </div>

                  {/* Headline */}
                  <h2 className="mb-4 fw-bold">Hello, I'm a UI/UX Designer & Frontend Developer from Victoria, Australia. I hold a master degree of Design from World University.
                  </h2>

                  {/* Details list */}
                  <div className="details-list">
                    <div className="row mb-3">
                      <div className="col-4">
                        <span className="detail-label">Name:</span>
                      </div>
                      <div className="col-8">
                        <span className="detail-value">Andrew Smith</span>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-4">
                        <span className="detail-label">Email:</span>
                      </div>
                      <div className="col-8">
                        <span className="detail-value">andrew@gmail.com</span>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-4">
                        <span className="detail-label">Phone:</span>
                      </div>
                      <div className="col-8">
                        <span className="detail-value">+44 (0) 123 456 7890</span>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-4">
                        <span className="detail-label">Date of birth:</span>
                      </div>
                      <div className="col-8">
                        <span className="detail-value">23 February 1986</span>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-4">
                        <span className="detail-label">Nationality:</span>
                      </div>
                      <div className="col-8">
                        <span className="detail-value">United Kingdom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
