import React, { useEffect, useRef } from 'react';
import './PageHeader.css';

const PageHeader = ({ 
  title, 
  subtitle, 
  breadcrumbs = [], 
  backgroundImageUrl = "/images/services-bg.jpg"
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
      className="page-header"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="hero-overlay"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 text-center text-white">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <nav 
                className="breadcrumb-nav mb-3 reveal" 
                aria-label="Breadcrumb navigation"
              >
                <ol className="breadcrumb-list">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="breadcrumb-item">
                      {crumb.href ? (
                        <a href={crumb.href} className="breadcrumb-link">
                          {crumb.label}
                        </a>
                      ) : (
                        <span className="breadcrumb-text">{crumb.label}</span>
                      )}
                      
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Main Title */}
            <h1 className="page-title display-3 fw-bold mb-0 reveal delay-1">{title}</h1>
            
            {/* Subtitle */}
            {subtitle && (
              <p className="page-subtitle mb-0 reveal delay-2">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
