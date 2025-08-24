import React, { useState, useRef, useEffect } from 'react';
import styles from './FunFacts.module.css';
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
  projects: TargetIcon,
  tasks: TrophyIcon,
};

const FunFacts = ({ 
  eyebrow = "FUN FACTS",
  titleTop = "Things you need to know about",
  titleBottom = "Udjat",
  stats = [
    { id: 'clients', value: 269, label: 'Happy Clients', ariaLabel: '269 happy clients' },
    { id: 'projects', value: 520, label: 'Projects Delivered', ariaLabel: '520 projects delivered' },
    { id: 'tasks', value: 20983, label: 'Tasks Delivered', ariaLabel: '20,983 tasks delivered' },
  ]
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {/* Eyebrow */}
            <div className={styles.eyebrow}>{eyebrow}</div>
            
            {/* Main Title */}
            <h2 className={styles.title}>
              {titleTop}
              <br />
              <span className={styles.titleHighlight}>{titleBottom}</span>
            </h2>

            {/* Stats Grid */}
            <div className="row g-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon || defaultIcons[stat.id] || PersonIcon;
                const { count } = countUpHooks[index] || { count: 0 };
                
                return (
                  <div key={stat.id} className="col-6 col-md-4">
                    <div 
                      className={`${styles.statItem} ${isVisible ? styles.visible : ''}`}
                      style={{ animationDelay: `${index * 120}ms` }}
                      aria-label={stat.ariaLabel || `${formatNumber(count)} ${stat.label.toLowerCase()}`}
                    >
                      <div className={styles.iconContainer}>
                        <IconComponent />
                      </div>
                      <div className={styles.number}>
                        {formatNumber(count)}
                      </div>
                      <div className={styles.label}>
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
