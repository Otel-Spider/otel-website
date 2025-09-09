import React, { useEffect, useRef } from 'react';
import './contactTiles.css';

// Icon mapping for Font Awesome icons
const Icon = ({ name, size = 32, className = "" }) => {
  const iconMap = {
    'map-pin': 'fas fa-map-marker-alt',
    'message-circle': 'fas fa-comments',
    'mail': 'fas fa-envelope',
    'clock': 'fas fa-clock',
    'phone': 'fas fa-phone',
    'fax': 'fas fa-fax'
  };
  
  const iconClass = iconMap[name] || 'fas fa-map-marker-alt';
  
  return (
    <i 
      className={`${iconClass} ${className}`} 
      style={{ fontSize: `${size}px` }}
      aria-hidden="true"
    />
  );
};

const ContactTiles = ({ 
  image, 
  tiles, 
  className = "" 
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all elements with .reveal class
    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    if (revealElements) {
      revealElements.forEach((element) => {
        observer.observe(element);
      });
    }

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
      className={`contact-tiles container-fluid px-0 ${className}`} 
      aria-labelledby="contact-tiles-title"
    >
      <h2 id="contact-tiles-title" className="visually-hidden">
        Contact information
      </h2>
      
      <div className="row g-0">
        {/* Left image column */}
        <div className="col-12 col-lg-6">
          <div
            className="image-cover reveal"
            style={{ 
              backgroundImage: `url(${image.src})`, 
              backgroundPosition: image.focal || 'center' 
            }}
            role="img" 
            aria-label={image.alt}
          />
        </div>

        {/* Right tiles column */}
        <div className="col-12 col-lg-6">
          <div className="row row-cols-1 row-cols-md-2 g-0 g-md-0">
            {tiles.map((tile) => {
              const TileInner = (
                <article 
                  className="tile" 
                  role="group" 
                  aria-labelledby={`${tile.id}-title`}
                >
                  <Icon name={tile.icon} className="icon" />
                  <div className="eyebrow">{tile.title}</div>
                  <div id={`${tile.id}-title`} className="title visually-hidden">
                    {tile.title}
                  </div>
                  <div className="lines">
                    {tile.lines.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                </article>
              );

              return (
                <div className={`col reveal delay-${tiles.indexOf(tile) + 1}`} key={tile.id}>
                  {TileInner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTiles;
