import React, { useEffect, useRef } from 'react';
import styles from './ClientLogos.module.css';

// ClientLogo data type definition (for reference)
// type ClientLogo = {
//   id: string;
//   name: string;
//   logo: string;
//   alt: string;
//   url: string;
// }

const ClientLogos = ({ 
  title = "OUR VALUABLE CLIENT",
  subtitle = "We're proud to work with industry-leading brands and innovative companies that trust us with their digital presence.",
  items = []
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
  const renderLogoCard = (item) => {
    return (
      <div key={item.id} className="col-lg-4 col-md-4 col-12" role="listitem">
        <a
          href={item.url}
          className={styles.cardLink}
          aria-label={`Visit ${item.name}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.logoWrap}>
            <img 
              src={item.logo} 
              alt={item.alt}
              loading="lazy"
              className={styles.logoImg}
            />
          </div>
        </a>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <h2 className={`${styles.sectionTitle} reveal`}>
              {title}
            </h2>
            <p className={`${styles.lead} mx-auto reveal delay-1`}>
              {subtitle}
            </p>
          </div>
        </div>
        
        <div className="row g-4" role="list">
          {items.map((item, index) => (
            <div key={item.id} className="col-lg-4 col-md-4 col-12" role="listitem">
              <a
                href={item.url}
                className={`${styles.cardLink} reveal delay-${index + 2}`}
                aria-label={`Visit ${item.name}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className={styles.logoWrap}>
                  <img 
                    src={item.logo} 
                    alt={item.alt}
                    loading="lazy"
                    className={styles.logoImg}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
