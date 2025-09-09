import React, { useState, useRef, useEffect } from 'react';
import styles from '../../../assets/css/home/FunFacts.module.css';
import { PersonIcon, TargetIcon, TrophyIcon } from './icons';

// Custom hook for count-up animation
const useCountUp = (end, durationMs = 1600, easing = (t) => t) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easing(progress);
      
      const currentValue = Math.floor(startValue + (end - startValue) * easedProgress);
      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return { count, startAnimation, isAnimating };
};

// Default icons mapping
const defaultIcons = {
  clients: PersonIcon,
  awards: TrophyIcon,
  services: TargetIcon,
};

const FunFacts = ({ 
  eyebrow = "KEY STATS",
  titleTop = "Our journey in hospitality is reflected in numbers that showcase the trust of our partners, the recognition we have earned, and the services we proudly deliver.",
  titleBottom = "",
  stats = [
    { id: 'clients', value: 100, label: 'Trusted Partnerships', ariaLabel: '100+ clients trusted partnerships' },
    { id: 'awards', value: 3, label: 'Recognized Excellence', ariaLabel: '3 awards recognized excellence' },
    { id: 'services', value: 9, label: 'Proven Expertise', ariaLabel: '9 services proven expertise' },
  ]
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

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
  
  // Create count-up hooks for each stat - fixed hooks rule violation
  const countUpHook1 = useCountUp(stats[0]?.value || 0);
  const countUpHook2 = useCountUp(stats[1]?.value || 0);
  const countUpHook3 = useCountUp(stats[2]?.value || 0);
  
  const countUpHooks = [countUpHook1, countUpHook2, countUpHook3];

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
            
            // Start count-up animations with stagger
            countUpHooks.forEach((hook, index) => {
              setTimeout(() => {
                hook.startAnimation();
              }, index * 120);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, countUpHooks]);

  // Format number with thousands separators
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className={styles.funFactsSection} ref={sectionRef}>
      {/* OTEL Favicon in upper right corner */}
      <div className={styles.otelFavicon}>
        <img 
          src={`${process.env.PUBLIC_URL}/logos/otel-fav.png`} 
          alt="OTEL" 
          className={styles.faviconImage}
        />
      </div>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {/* Eyebrow */}
            <div className={`${styles.eyebrow} reveal`}>{eyebrow}</div>
            
            {/* Main Title */}
            <h2 className={`${styles.title} reveal delay-1`}>
              {titleTop}
              {titleBottom && (
                <>
                  <br />
                  <span className={`${styles.titleHighlight} reveal delay-2`}>{titleBottom}</span>
                </>
              )}
            </h2>

            {/* Stats Grid */}
            <div className="row justify-content-center g-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon || defaultIcons[stat.id] || PersonIcon;
                const { count } = countUpHooks[index] || { count: 0 };
                
                return (
                  <div key={stat.id} className="col-6 col-md-4">
                    <div 
                      className={`${styles.statItem} ${isVisible ? styles.visible : ''} reveal`}
                      style={{ animationDelay: `${index * 120}ms`, transitionDelay: `${index * 0.08}s` }}
                      aria-label={stat.ariaLabel || `${formatNumber(count)} ${stat.label.toLowerCase()}`}
                    >
                      <div className={`${styles.iconContainer} reveal`} style={{ transitionDelay: `${(index * 0.08) + 0.04}s` }}>
                        <IconComponent />
                      </div>
                      <div className={`${styles.number} reveal`} style={{ transitionDelay: `${(index * 0.08) + 0.08}s` }}>
                        {stat.id === 'clients' ? `${formatNumber(count)}+` : formatNumber(count)}
                      </div>
                      <div className={`${styles.label} reveal`} style={{ transitionDelay: `${(index * 0.08) + 0.12}s` }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
