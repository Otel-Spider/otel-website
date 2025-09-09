import React, { useEffect, useRef } from 'react';
import './helpCta.css';

const HelpCtaSection = ({
  kicker = "WE WOULD LOVE TO WORK WITH YOU",
  title = "How we can help",
  subtitle = "We're here to help you bring your ideas to life. Let's discuss your project and create something amazing together.",
  buttonText = "Start your project",
  buttonHref = "#",
  onButtonClick = null,
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

  const handleButtonClick = (e) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    }
  };

  return (
    <section ref={sectionRef} className={`helpCtaSection py-6 py-lg-8 ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="ctaContent text-center">
              <p className="kicker reveal">
                {kicker}
              </p>
              <h1 className="title reveal delay-1">
                {title}
              </h1>
              <p className="subtitle reveal delay-2">
                {subtitle}
              </p>
              <div className="buttonContainer reveal delay-3">
                {buttonHref && !onButtonClick ? (
                  <a 
                    href={buttonHref}
                    className="btn btn-outline-dark btn-lg ctaButton"
                    aria-label={`${buttonText} - Opens in new tab`}
                  >
                    {buttonText}
                  </a>
                ) : (
                  <button 
                    onClick={handleButtonClick}
                    className="btn btn-outline-dark btn-lg ctaButton"
                    aria-label={buttonText}
                  >
                    {buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCtaSection;
