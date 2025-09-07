import React, { useEffect, useRef } from 'react';
import './FeatureIntro.css';

const FeatureIntro = () => {
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in effect (respects reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section id="feature-intro" className="feature-intro " ref={sectionRef}>
      <div className="container text-center py-5 py-md-6">
        <p className="eyebrow text-uppercase fw-semibold mb-2">
          WE COMBINE DESIGN, THINKING AND CRAFT
        </p>
        
        <h2 className="display-5 fw-bold mb-3">
          Beautiful and easy to use UI, professional<br className="d-none d-md-inline" />
          animations and drag &amp; drop feature
        </h2>
        
        <p className="lead mx-auto text-muted mb-5 maxw-800">
          Our platform combines cutting-edge design principles with intuitive user experience, 
          delivering professional-grade animations and seamless drag & drop functionality that 
          empowers users to create stunning content effortlessly.
        </p>
        
        <div className="team-wrap position-relative">
          <img 
            src={`${process.env.PUBLIC_URL}/images/services-img11.jpg`}
            alt="Our talented team of designers and developers working together" 
            className="img-fluid team-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureIntro;
