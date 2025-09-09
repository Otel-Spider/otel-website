import React, { useEffect, useRef } from 'react';
import styles from '../../../assets/css/home/CtaBuildTogether.module.css';

const CtaBuildTogether = ({ 
  title = "Ready to Grow Your Hospitality Business?",
  highlight = "Grow",
  description = "Partner with Otel Spider for tailored eCommerce and marketing services that boost direct bookings, enhance brand visibility, and drive measurable growth.",
  primaryText = "Request a Quotation",
  secondaryText = "Explore Our Services",
  onPrimary,
  onSecondary,
  avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face'
  ],
  className
}) => {
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
  // Split title and highlight the specified word
  const renderHighlightedTitle = () => {
    const words = title.split(' ');
    return words.map((word, index) => {
      const isHighlighted = word.toLowerCase() === highlight.toLowerCase();
      return (
        <React.Fragment key={index}>
          {isHighlighted ? (
            <span className={styles.accent}>{word}</span>
          ) : (
            word
          )}
          {index < words.length - 1 && ' '}
        </React.Fragment>
      );
    });
  };

  const handlePrimaryClick = () => {
    if (onPrimary) {
      onPrimary();
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondary) {
      onSecondary();
    }
  };

  return (
    <section ref={sectionRef} className={`${styles.ctaSection} ${className || ''}`}>
      <img 
        src={`${process.env.PUBLIC_URL}/logos/otel-fav.png`} 
        alt="Otel Icon" 
        className={styles.icon}
        loading="lazy"
      />
      <div className={styles.container}>
        <h2 className={`${styles.headline} reveal`}>
          {renderHighlightedTitle()}
        </h2>
        
        {description && (
          <p className={`${styles.description} reveal delay-1`}>
            {description}
          </p>
        )}
        
        <div className={`${styles.actions} reveal delay-2`}>
          <button 
            className={styles.primaryButton}
            onClick={handlePrimaryClick}
            type="button"
            aria-label={primaryText}
          >
            <div className={styles.avatarGroup}>
              {avatars.slice(0, 3).map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt=""
                  aria-hidden="true"
                  className={styles.avatar}
                  loading="lazy"
                />
              ))}
            </div>
            <span className={styles.buttonText}>{primaryText}</span>
          </button>
          
          <button 
            className={styles.secondaryButton}
            onClick={handleSecondaryClick}
            type="button"
            aria-label={secondaryText}
          >
            {secondaryText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBuildTogether;
