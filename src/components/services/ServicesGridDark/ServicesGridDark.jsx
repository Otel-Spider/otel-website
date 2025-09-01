import React, { useEffect, useRef } from 'react';
import '../../../assets/css/services/services-grid-dark.css';

const ServicesGridDark = ({ 
  items = [
    {
      id: "web-development",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices for optimal performance and user experience."
    },
    {
      id: "logo-identity",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Logo & Identity",
      description: "Professional logo design and brand identity packages that make your business stand out and build lasting recognition."
    },
    {
      id: "graphics-design",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="M1 12h6m6 0h6"/>
        </svg>
      ),
      title: "Graphics Design",
      description: "Creative graphic design solutions for print and digital media with attention to detail and modern design principles."
    },
    {
      id: "app-development",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      title: "App Development",
      description: "Native and cross-platform mobile applications designed for optimal user experience and seamless functionality."
    },
    {
      id: "social-marketing",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      title: "Social Marketing",
      description: "Strategic social media marketing campaigns that engage your audience and drive sustainable business growth."
    },
    {
      id: "content-creation",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      title: "Content Creation",
      description: "High-quality content creation services including copywriting, photography, and video production."
    }
  ]
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

  const renderIcon = (icon) => {
    if (typeof icon === 'string') {
      return <img src={icon} alt="" className="service-icon" />;
    }
    return <div className="service-icon">{icon}</div>;
  };

  return (
    <section ref={sectionRef} className="services-grid-dark py-5 py-lg-6">
      <div className="container">
        <div className="row" role="list">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className="col-12 col-md-6 col-lg-4 mb-5" 
              role="listitem"
            >
              <div className={`service-item text-center reveal delay-${index + 1}`}>
                <div className="service-icon-wrapper mb-3">
                  {renderIcon(item.icon)}
                </div>
                
                <h6 className="service-title fw-semibold mt-3 mb-2">
                  {item.title}
                </h6>
                
                <p 
                  className="service-description mb-0 mx-auto" 
                  style={{ maxWidth: '360px' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridDark;
