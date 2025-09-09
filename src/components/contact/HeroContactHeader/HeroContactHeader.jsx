import React, { useEffect, useRef } from 'react';
import '../../../assets/css/services/hero-services-header.css';

const HeroContactHeader = ({ 
  label = "Get in touch with us",
  title = "Contact",
  bgImageUrl = "/images/services-bg.jpg"
}) => {
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
    <section 
      ref={sectionRef}
      className="hero-services-header"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="hero-overlay"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 text-center text-white">
            <small className="hero-label d-block mb-3 reveal">
              {label}
            </small>
            <h1 className="hero-title display-3 fw-bold mb-0 reveal delay-1">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContactHeader;
