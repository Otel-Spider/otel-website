import React, { useState, useEffect, useRef } from 'react';
import styles from '../../../assets/css/home/TeamShowcase.module.css';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('🎯 Element in view:', entry.target.className);
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

  // Mobile detection and slider functionality
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        if (nextSlide >= members.length) {
          // Reset to beginning after a brief delay for seamless loop
          setTimeout(() => {
            setCurrentSlide(0);
          }, 500);
          return members.length - 1; // Stay at last slide briefly
        }
        return nextSlide;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, members.length]);

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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      if (nextSlide >= members.length) {
        // Reset to beginning after a brief delay for seamless loop
        setTimeout(() => {
          setCurrentSlide(0);
        }, 500);
        return members.length - 1; // Stay at last slide briefly
      }
      return nextSlide;
    });
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1;
      if (prevSlide < 0) {
        // Jump to end after a brief delay for seamless loop
        setTimeout(() => {
          setCurrentSlide(members.length - 1);
        }, 500);
        return 0; // Stay at first slide briefly
      }
      return prevSlide;
    });
  };

  return (
    <section ref={sectionRef} className={styles.teamShowcase}>
      <div className={styles.container}>
        {title && (
          <h2 className={`${styles.title} reveal`}>{title}</h2>
        )}
        
        <div className={styles.gallery}>
          {isMobile ? (
            // Mobile Slider View
            <div className={styles.sliderContainer}>
                             <div 
                 className={styles.sliderTrack}
                 style={{
                   transform: `translateX(-${currentSlide * (100)}%)`,
                   transition: 'transform 0.5s ease-in-out'
                 }}
               >
                                  {/* Add duplicate slides for seamless loop */}
                 {[...members, ...members.slice(0, 2)].map((member, index) => {
                   const isHovered = hoveredMember === member.id;
                   const displaySrc = isHovered && member.hoverSrc ? member.hoverSrc : member.src;
                   const altText = member.alt || `${member.name}, ${member.role}`;
                   
                   return (
                     <div
                       key={`${member.id}-${index}`}
                       className={`${styles.sliderSlide} reveal`}
                       style={{ 
                         transitionDelay: `${index * 0.08}s`,
                         opacity: 1,
                         transform: 'none'
                       }}
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
              
              {/* Slider Navigation */}
              <div className={styles.sliderNavigation}>
                <button 
                  className={styles.sliderNavButton}
                  onClick={goToPrevSlide}
                  aria-label="Previous member"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                  </svg>
                </button>
                
                <div className={styles.sliderDots}>
                  {members.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.sliderDot} ${index === currentSlide ? styles.active : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  className={styles.sliderNavButton}
                  onClick={goToNextSlide}
                  aria-label="Next member"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            // Desktop Grid View
            members.map((member, index) => {
              const isHovered = hoveredMember === member.id;
              const displaySrc = isHovered && member.hoverSrc ? member.hoverSrc : member.src;
              const altText = member.alt || `${member.name}, ${member.role}`;
              
              return (
                <div
                  key={member.id}
                  className={`${styles.memberCard} reveal`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
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
                      onLoad={() => console.log('✅ Desktop image loaded successfully:', displaySrc)}
                      onError={(e) => {
                        console.error('❌ Desktop image failed to load:', displaySrc);
                        e.target.style.display = 'none';
                      }}
                      style={{
                        opacity: 1,
                        visibility: 'visible',
                        display: 'block'
                      }}
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
            })
          )}
        </div>

        <div className={`${styles.subtitle} reveal delay-1`}>{subtitle}</div>
        
        <div className={`${styles.ctaContainer} reveal delay-2`}>
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
