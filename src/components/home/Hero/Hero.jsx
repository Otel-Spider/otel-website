import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import SimpleParticles from './SimpleParticles';
import '../../../assets/css/home/Hero.css';

const Hero = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const sectionRef = useRef(null);

  // Initialize typed.js
  useEffect(() => {
    console.log('Hero component mounted');
    
    // Use a longer delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
      console.log('Starting Typed.js initialization...');
      console.log('typedRef.current:', typedRef.current);
      
      if (typedRef.current) {
        try {
          // Clear any existing content
          typedRef.current.innerHTML = '';
          
          // Destroy any existing instance
          if (typedInstance.current) {
            typedInstance.current.destroy();
          }
          
          // Create new Typed instance
          typedInstance.current = new Typed('#typed', {
            strings: [
              'Marketing Systems',
              'Sales Systems', 
              'RevOps Systems',
              'Web Systems'
            ],
            typeSpeed: 50,
            backSpeed: 35,
            backDelay: 1200,
            loop: true,
            showCursor: false,
            autoInsertCss: true,
          });
          console.log('Typed.js initialized successfully!');
        } catch (error) {
          console.error('Error initializing Typed.js:', error);
          console.error('Error details:', error.message);
        }
      } else {
        console.error('Typed.js element not found');
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      if (typedInstance.current) {
        try {
          typedInstance.current.destroy();
          console.log('Typed.js instance destroyed');
        } catch (error) {
          console.error('Error destroying Typed.js instance:', error);
        }
      }
    };
  }, []);

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

  // Handle CTA button click
  const handleCTAClick = () => {
    // Add your CTA action here
    console.log('CTA button clicked');
    // Example: scroll to services section or open contact form
  };

  return (
    <section ref={sectionRef} className="hero-section">
      {/* Particles Background */}
      <SimpleParticles
        particleCount={40}
        particleColor="#0f6c63"
        className="particles"
      />

      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Content Container */}
      <div className="hero-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-12">
              <h1 className="hero-headline reveal">
                <div id="typed" ref={typedRef} style={{ minWidth: '300px', display: 'inline-block', color: 'Dark Cyan' }}></div>
                <span className="hero-suffix">, Grow.</span>
              </h1>
              
              <p className="hero-subheadline reveal delay-1">
                From marketing and sales to RevOps and web development, reach new heights with full lifecycle solutions fueled by HubSpot. Our technical experts get your hubs firing on all cylinders so your organization can soar.
              </p>

              {/* CTA Button */}
              <div className="hero-cta reveal delay-2">
                <button 
                  className="hero-cta-button"
                  onClick={handleCTAClick}
                  type="button"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
