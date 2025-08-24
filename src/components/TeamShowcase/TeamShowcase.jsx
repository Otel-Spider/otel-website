import React, { useState, useEffect } from 'react';
import styles from './TeamShowcase.module.css';

const TeamShowcase = ({ 
  title,
  subtitle = "A Group of Incredibly Talented Troublemakers",
  ctaText = "SEE WHAT WE'RE ABOUT",
  onCtaClick,
  members = [
    { 
      id: '1', 
      name: 'Alex Carter', 
      role: 'Creative Director', 
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face&sat=-100',
      hoverSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      alt: 'Alex Carter, Creative Director'
    },
    { 
      id: '2', 
      name: 'Jordan Miles', 
      role: 'Art Director', 
      src: 'https://spherical.co/wp-content/themes/legend/images/cebo.jpg.webp',
      hoverSrc: 'https://spherical.co/wp-content/themes/legend/images/cebo-dark.jpg.webp',
      alt: 'Jordan Miles, Art Director'
    },
    { 
      id: '3', 
      name: 'Sam Patel', 
      role: 'Senior Developer', 
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face&sat=-100',
      hoverSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face',
      alt: 'Sam Patel, Senior Developer'
    },
    { 
      id: '4', 
      name: 'Nora Blake', 
      role: 'Product Designer', 
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face&sat=-100',
      hoverSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face',
      alt: 'Nora Blake, Product Designer'
    },
    { 
      id: '5', 
      name: 'Maya Chen', 
      role: 'Brand Strategist', 
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop&crop=face&sat=-100',
      hoverSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop&crop=face',
      alt: 'Maya Chen, Brand Strategist'
    }
  ]
}) => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  // Preload hover images for smooth transitions
  useEffect(() => {
    const preloadImage = (src) => {
      if (src && !preloadedImages.has(src)) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, src]));
        };
      }
    };

    members.forEach(member => {
      if (member.hoverSrc) {
        preloadImage(member.hoverSrc);
      }
    });
  }, [members, preloadedImages]);

  const handleMemberHover = (memberId) => {
    setHoveredMember(memberId);
  };

  const handleMemberLeave = () => {
    setHoveredMember(null);
  };

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <section className={styles.teamShowcase}>
      <div className={styles.container}>
        {title && (
          <h2 className={styles.title}>{title}</h2>
        )}
        
        <div className={styles.gallery}>
          {members.map((member) => {
            const isHovered = hoveredMember === member.id;
            const displaySrc = isHovered && member.hoverSrc ? member.hoverSrc : member.src;
            const altText = member.alt || `${member.name}, ${member.role}`;
            
            return (
              <div
                key={member.id}
                className={styles.memberCard}
                onMouseEnter={() => handleMemberHover(member.id)}
                onMouseLeave={handleMemberLeave}
                onFocus={() => handleMemberHover(member.id)}
                onBlur={handleMemberLeave}
                tabIndex={0}
                role="button"
                aria-label={altText}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={displaySrc}
                    alt={altText}
                    className={`${styles.memberImage} ${isHovered ? styles.hovered : ''}`}
                    loading="lazy"
                  />
                  
                  {/* Overlay with name and role - positioned at bottom center */}
                  <div className={`${styles.overlay} ${isHovered ? styles.visible : ''}`}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberRole}>{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.subtitle}>{subtitle}</div>
        
        <div className={styles.ctaContainer}>
          <button 
            className={styles.ctaButton}
            onClick={handleCtaClick}
            type="button"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
