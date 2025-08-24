import React, { useEffect, useRef } from 'react';
import './ReturnOnExperience.css';

const ReturnOnExperience = () => {
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
    <section ref={sectionRef} className="roe-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="roe-title reveal">
              RETURN ON EXPERIENCE
            </h1>
            <p className="roe-subtitle reveal delay-1">
              Our Hospitality Performance Platform helps luxury hotels to monetise every moment, by transforming each touchpoint into a revenue opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnOnExperience;
