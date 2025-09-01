import React, { useEffect, useRef } from 'react';
import '../../../assets/css/services/services-showcase.css';

const ServicesShowcase = ({ 
  imageSrc = "/images/services-img2.jpg",
  imageAlt = "iMac device mockup",
  title = "Beautifully handcrafted templates for your website",
  checklist = [
    {
      id: "ui-design",
      text: "Beautiful and easy to understand UI, professional animations"
    },
    {
      id: "theme-advantages",
      text: "Theme advantages are pixel perfect design & clear code delivered"
    },
    {
      id: "flexible-services",
      text: "Present your services with flexible, convenient and multipurpose"
    },
    {
      id: "creative-ideas",
      text: "Find more creative ideas for your projects"
    },
    {
      id: "customization",
      text: "Unlimited power and customization possibilities"
    }
  ],
  ctaLabel = "View Portfolio",
  onCtaClick
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

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
    // Default behavior - could navigate to portfolio or open modal
    console.log('View Portfolio clicked');
  };

  return (
    <section ref={sectionRef} className="services-showcase py-5 py-lg-6 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div className="image-wrapper text-center text-lg-start">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="img-fluid showcase-image reveal"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-12 col-lg-6">
            <div className="content-wrapper">
              {/* Headline */}
              <h2 
                className="fw-bold mb-4 reveal delay-1"
                style={{ maxWidth: '46ch' }}
              >
                {title}
              </h2>

              {/* Checklist */}
              <ul className="checklist list-unstyled mb-4" role="list">
                {checklist.map((item, index) => (
                  <li 
                    key={item.id} 
                    className={`checklist-item d-flex align-items-start mb-3 reveal delay-${index + 2}`}
                    role="listitem"
                  >
                    <div className="check-icon me-3 flex-shrink-0">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 16 16" 
                        fill="currentColor" 
                        aria-hidden="true"
                        className="check-icon-svg"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <span className="checklist-text mb-0">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className="btn btn-dark btn-lg d-inline-flex align-items-center reveal delay-7"
                onClick={handleCtaClick}
                aria-label="View portfolio"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="currentColor" 
                  aria-hidden="true"
                  className="me-2"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                {ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
