import React, { useEffect, useRef } from 'react';
import styles from './WhyWorkWithUs.module.css';

// Feature data type definition (for reference)
// type Feature = {
//   id: string;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

const WhyWorkWithUs = ({ 
  title = "WHY WORK WITH US?",
  subtitle = "We deliver exceptional results through our proven expertise, innovative solutions, and unwavering commitment to client success.",
  features = []
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
  const renderFeatureCard = (feature) => {
    return (
      <div key={feature.id} className="col-lg-3 col-md-6 col-12 mb-4">
        <article 
          className={`${styles.cardLift} h-100`}
          tabIndex={0}
          role="article"
        >
          <div className="py-5 px-4 text-center h-100 d-flex flex-column">
            <div className={styles.iconCircle}>
              {feature.icon}
            </div>
            <h3 className={`${styles.featureTitle} mb-3`}>
              {feature.title}
            </h3>
            <p className={`${styles.featureDescription} mb-0 flex-grow-1`}>
              {feature.description}
            </p>
          </div>
        </article>
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
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={feature.id} className="col-lg-3 col-md-6 col-12 mb-4">
              <article 
                className={`${styles.cardLift} h-100 reveal delay-${index + 2}`}
                tabIndex={0}
                role="article"
              >
                <div className="py-5 px-4 text-center h-100 d-flex flex-column">
                  <div className={styles.iconCircle}>
                    {feature.icon}
                  </div>
                  <h3 className={`${styles.featureTitle} mb-3`}>
                    {feature.title}
                  </h3>
                  <p className={`${styles.featureDescription} mb-0 flex-grow-1`}>
                    {feature.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
