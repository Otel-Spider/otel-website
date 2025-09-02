import React, { useEffect, useRef } from 'react';
import '../../../assets/css/about/hero-about.css';

const HeroAbout = ({ imageSrc = '/images/about-me-2.jpg' }) => {
  const sectionRef = useRef(null);

  // Scroll-triggered animation
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
    <>
      {/* Hero section */}
      <section 
        ref={sectionRef}
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
              <div className="card shadow rounded-3 border-0 w-100 reveal">
                <div className="card-body p-4 p-lg-5">
                  {/* Quote icon */}
                  <div className="mb-2 reveal delay-1">
                    <i className="fas fa-quote-left quote-icon" style={{ fontSize: '60px' }}></i>
                  </div>

                  {/* Headline */}
                  <h2 className="mb-4 fw-bold reveal delay-2">Hello, I'm a UI/UX Designer & Frontend Developer from Victoria, Australia. I hold a master degree of Design from World University.
                  </h2>

                  {/* Details list */}
                  <div className="details-list">
                    <div className="row mb-3 reveal delay-3">
                      <div className="col-4">
                        <span className="detail-label">Name:</span>
                      </div>
                      <div className="col-8">
                        <span className="detail-value">Andrew Smith</span>
                      </div>
                    </div>

                    <div className="row mb-3 reveal delay-4">
                      <div className="col-4">
                        <span className="detail-label">Email:</span>
                      </div>
                      <div className="col-8">
                        <span className="detail-value">andrew@gmail.com</span>
                      </div>
                    </div>

                    <div className="row mb-3 reveal delay-5">
                      <div className="col-4">
                        <span className="detail-label">Phone:</span>
                      </div>
                      <div className="col-8">
                        <span className="detail-value">+44 (0) 123 456 7890</span>
                      </div>
                    </div>

                    <div className="row mb-3 reveal delay-6">
                      <div className="col-4">
                        <span className="detail-label">Date of birth:</span>
                      </div>
                      <div className="col-8">
                        <span className="detail-value">23 February 1986</span>
                      </div>
                    </div>

                    <div className="row mb-3 reveal delay-7">
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
