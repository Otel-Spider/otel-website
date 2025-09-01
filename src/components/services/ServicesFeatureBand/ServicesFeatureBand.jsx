import React, { useEffect, useRef } from 'react';
import '../../../assets/css/services/services-feature-band.css';

const ServicesFeatureBand = ({ 
  left = {
    eyebrow: "Build perfect websites",
    title: "Unlimited power and customization possibilities",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ctaLabel: "Read more",
    onClick: () => console.log('Left panel clicked')
  },
  middle = {
    eyebrow: "Unique digital experiences",
    title: "Pixel perfect design and clear code delivered to you",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ctaLabel: "Read more",
    onClick: () => console.log('Middle panel clicked')
  },
  imageSrc = "/images/services-img3.jpg",
  imageAlt = "Team working together on digital projects"
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

  const renderPanel = (panel, panelType) => (
    <div className={`col-12 col-lg-4 ${panelType === 'left' ? 'bg-dark' : 'bg-secondary'}`}>
      <div className="panel-content d-flex flex-column justify-content-center h-100 p-5 p-xl-6">
        {/* Eyebrow */}
        <div className="panel-eyebrow text-uppercase fw-semibold mb-2 reveal">
          {panel.eyebrow}
        </div>
        
        {/* Headline */}
        <h2 className="panel-title display-6 fw-bold mb-3 reveal delay-1">
          {panel.title}
        </h2>
        
        {/* Body */}
        <p className="panel-body mb-4 reveal delay-2">
          {panel.body}
        </p>
        
        {/* CTA Button */}
        <button 
          className="btn btn-outline-light btn-sm d-inline-flex align-items-center align-self-start reveal delay-3"
          onClick={panel.onClick}
          aria-label={`Read more about ${panel.eyebrow.toLowerCase()}`}
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="currentColor" 
            aria-hidden="true"
            className="me-2"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
          </svg>
          {panel.ctaLabel}
        </button>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="services-feature-band py-0" aria-label="Feature highlights">
      <div className="container-fluid g-0">
        <div className="row g-0">
          {/* Left Panel */}
          {renderPanel(left, 'left')}
          
          {/* Middle Panel */}
          {renderPanel(middle, 'middle')}
          
          {/* Right Image Column */}
          <div className="col-12 col-lg-4" style={{ minHeight: '240px' }}>
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="w-100 h-100 object-fit-cover reveal delay-1"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatureBand;
