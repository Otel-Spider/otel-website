import React from 'react';
import styles from './CtaBuildTogether.module.css';

const CtaBuildTogether = ({ 
  title = "Let's build something great together",
  highlight = "build",
  description = "Planning a new store, expanding to global markets, or looking to adopt latest technology? Reach out to us, and let's make it happen.",
  primaryText = "Book a consultation",
  secondaryText = "All services",
  onPrimary,
  onSecondary,
  avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face'
  ],
  className
}) => {
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
    <section className={`${styles.ctaSection} ${className || ''}`}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          {renderHighlightedTitle()}
        </h2>
        
        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}
        
        <div className={styles.actions}>
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
