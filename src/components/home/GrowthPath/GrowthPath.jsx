import React, { useState, useEffect, useRef } from 'react';
import DottedPathFiveNodes from "./DottedPathFiveNodes";

import '../../../assets/css/home/GrowthPath.css';



const GrowthPath = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
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
  
  // Create the image path explicitly
  const getImagePath = (index) => {
    // Check if we're in production by looking at the current URL
    const isProduction = window.location.hostname === 'otel-spider.github.io';
    const baseUrl = isProduction ? '/otel-website' : '';
    const imageNumber = index + 1;
    const path = `${baseUrl}/images/pp-icon-${imageNumber}.svg`;
    console.log('Image path for index', index, ':', path);
    console.log('Is Production:', isProduction);
    console.log('Hostname:', window.location.hostname);
    console.log('Base URL:', baseUrl);
    return path;
  };

  // Data array for the growth journey stops
  const growthStops = [
    {
      id: 1,
      title: "Discovery",
      headline: "We Know Where You Grow from Here.",
      text: "We start by understanding your current state and identifying the biggest opportunities for growth. Every business has untapped potential waiting to be unlocked.",
      cta: "Let's explore",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Strategy",
      headline: "We Craft Your Growth Strategy.",
      text: "We craft a comprehensive growth strategy tailored to your unique market position. This isn't just planning—it's your roadmap to transformation.",
      cta: "You betcha",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Implementation",
      headline: "We Implement Your Growth Systems.",
      text: "We roll up our sleeves and get to work. Our team implements the systems, processes, and technologies that will drive your growth forward.",
      cta: "Game on",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V10C2 16 6 21 12 23C18 21 22 16 22 10V7L12 2ZM12 20C7.6 18.4 4 14.8 4 10V8.5L12 4L20 8.5V10C20 14.8 16.4 18.4 12 20Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Optimization",
      headline: "We Optimize Your Performance.",
      text: "We continuously monitor, measure, and refine your growth systems. Data-driven insights help us optimize performance and maximize results.",
      cta: "Absolutely",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Scale",
      headline: "We Scale Your Success.",
      text: "With solid foundations in place, we help you scale your success. Expand into new markets, launch new products, and build sustainable growth.",
      cta: "Let's soar",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor" transform="rotate(45 12 12)"/>
        </svg>
      )
    }
  ];

  // Navigation handlers
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % growthStops.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + growthStops.length) % growthStops.length);
  };

  const goToStop = (index) => {
    setActiveIndex(index);
  };

  // Hover handlers for SVG nodes
  const handleNodeHover = (nodeIndex) => {
    setHoveredNode(nodeIndex);
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
  };

  // Click handler for SVG nodes
  const handleNodeClick = (nodeIndex) => {
    setActiveIndex(nodeIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section ref={sectionRef} className="growth-path">
      {/* Mobile Image Container - Shows current active image above text on mobile */}
      <div className="mobile-image-container">
        <div className="mobile-image-item">
          <h2 className="mobile-growth-headline">
            {activeIndex !== null ? (
              growthStops[activeIndex].headline.split('<br/>').map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < growthStops[activeIndex].headline.split('<br />').length - 1 && <br />}
                </React.Fragment>
              ))
            ) : (
              <>
                We Know Where You<br />
                Grow from Here.
              </>
            )}
          </h2>
          <img 
            src={getImagePath(activeIndex)}
            alt={`Step ${activeIndex + 1}`}
            className="mobile-step-icon"
          />
        </div>
      </div>
      
      {/* Background SVG Path */}
      <section style={{ padding: "0px 0", background: "#fff", position: "relative" }}>
        <div className="growth-path-svg-container">
        <DottedPathFiveNodes className="growth-path-svg reveal" 
          height={520} 
          onNodeHover={handleNodeHover}
          onNodeLeave={handleNodeLeave}
          onNodeClick={handleNodeClick}
          activeNode={activeIndex}
          hoveredNode={hoveredNode}
          activeIndex={activeIndex}
        />
        </div>
        
        {/* Centered Container with Headline and Content */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: "100%"
        }}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
                             {/* Left Column - Headline */}
                               <div className="col-lg-8 col-xxl-8 col-xl-8">
                  <h2 className="growth-headline reveal">
                    {activeIndex !== null ? (
                      growthStops[activeIndex].headline.split('<br/>').map((part, index) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < growthStops[activeIndex].headline.split('<br />').length - 1 && <br />}
                        </React.Fragment>
                      ))
                                         ) : (
                       <>
                         We Know Where You<br />
                         Grow from Here.
                       </>
                     )}
                  </h2>
                </div>

                             {/* Right Column - Dynamic Content */}
               <div className="col-lg-4 col-xxl-4 col-xl-4">
                 <div className="content-card reveal delay-2" aria-live="polite">
                                       <div className="content-text">
                      <p className="content-paragraph reveal delay-3">
                        {activeIndex !== null ? growthStops[activeIndex].text : "Click on any step to explore our growth journey and discover how we can help transform your business."}
                      </p>
                      <div className="cta-badge reveal delay-4">
                        {activeIndex !== null ? growthStops[activeIndex].cta : "Get Started"}
                      </div>
                    </div>
                  
                  {/* Navigation Buttons */}
                  <div className="navigation-controls">
                    <button 
                      className="nav-btn prev-btn" 
                      onClick={goToPrevious}
                      aria-label="Previous step"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                      </svg>
                    </button>
                    <button 
                      className="nav-btn next-btn" 
                      onClick={goToNext}
                      aria-label="Next step"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GrowthPath;

