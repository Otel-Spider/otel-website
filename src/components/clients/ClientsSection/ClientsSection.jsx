import React, { useEffect, useRef } from 'react';
import styles from './ClientsSection.module.css';

// Client data type definition (for reference)
// type Client = {
//   id: string;
//   name: string;
//   img: string;
//   alt: string;
//   blurb: string;
//   url?: string;
// }

const ClientsSection = ({ 
  title = "WE'RE FORTUNATE TO WORK WITH FANTASTIC CLIENTS",
  subtitle = "Building lasting partnerships with industry leaders and innovative brands.",
  clients = []
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
  const renderClientCard = (client, index) => {
    const CardWrapper = client.url ? 'a' : 'div';
    const wrapperProps = client.url 
      ? {
          href: client.url,
          'aria-label': `Learn more about ${client.name}`,
          className: `${styles.clientCard} reveal delay-${index + 2}`
        }
      : {
          tabIndex: 0,
          'aria-label': `Client: ${client.name}`,
          className: `${styles.clientCard} reveal delay-${index + 2}`
        };

    return (
      <CardWrapper key={client.id} {...wrapperProps}>
        <div 
          className={styles.cardBackground}
          style={{ backgroundImage: `url(${client.backgroundImg})` }}
        >
          <div className={styles.logoContainer}>
            <img 
              src={client.logoImg} 
              alt={client.alt}
              loading="lazy"
              className={styles.clientLogo}
            />
          </div>
          <div className={styles.cardOverlay}>
            <div className={styles.overlayContent}>
              <p className={styles.clientBlurb}>{client.blurb}</p>
            </div>
          </div>
        </div>
      </CardWrapper>
    );
  };

  return (
    <section ref={sectionRef} className={styles.clientsSection}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4 text-center mb-5">
            <h2 className={`${styles.sectionTitle} reveal`}>
              {title}
            </h2>
            <p className={`${styles.sectionSubtitle} reveal delay-1`}>
              {subtitle}
            </p>
          </div>
        </div>
        
        <div className={`row ${styles.customGap} justify-content-center`}>
          {clients.map((client, index) => (
            <div key={client.id} className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
              {renderClientCard(client, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
