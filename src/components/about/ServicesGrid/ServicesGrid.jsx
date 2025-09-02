import React, { useEffect, useRef } from 'react';
import '../../../assets/css/about/services-grid.css';

const ServicesGrid = ({ 
  items = [
    {
      id: "web-development",
      title: "Web Development",
      text: "Custom websites and web applications built with modern technologies and best practices.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      id: "logo-identity",
      title: "Logo & Identity",
      text: "Professional logo design and brand identity packages that make your business stand out.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      id: "graphics-design",
      title: "Graphics Design",
      text: "Creative graphic design solutions for print and digital media with attention to detail.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="M1 12h6m6 0h6"/>
        </svg>
      )
    },
    {
      id: "app-development",
      title: "App Development",
      text: "Native and cross-platform mobile applications designed for optimal user experience.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      )
    },
    {
      id: "social-marketing",
      title: "Social Marketing",
      text: "Strategic social media marketing campaigns that engage your audience and drive growth.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      id: "content-creation",
      title: "Content Creation",
      text: "High-quality content creation services including copywriting, photography, and video production.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      )
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

  return (
    <section ref={sectionRef} className="services-grid p-5">
      <div className="container text-center">

        {/* Services Grid */}
        <div className="row row-cols-1 row-cols-md-3 g-5 g-lg-6">
          {items.map((item, index) => (
            <div key={item.id} className="col d-flex">
              <div className={`sg-card w-100 d-flex flex-column align-items-center text-center reveal delay-${index + 1}`}>
                <div className="sg-icon">
                  {item.icon}
                </div>
                
                <h3 className="fs-5 fw-semibold mb-2">
                  {item.title}
                </h3>
                
                <p className="text-muted small" style={{ maxWidth: '320px', margin: '0 auto' }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
