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
      title: "Skillful",
      headline: "Expert skills, exceptional results.",
      text: "We bring skill and precision to every project, ensuring strategies are tailored to meet the unique needs of your hotel.",
      cta: "Skillful",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Professional",
      headline: "Professional at every step.",
      text: "Our team operates with transparency, respect, and accountability—building trust in every partnership.",
      cta: "Professional",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Innovative",
      headline: "Innovating for your growth.",
      text: "We embrace cutting-edge tools and creative thinking to keep your hotel ahead in the digital landscape.",
      cta: "Innovative",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Dedicated",
      headline: "Committed to your success.",
      text: "Your goals are our priority. We stay committed to delivering measurable outcomes that matter most to you.",
      cta: "Dedicated",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Excellent",
      headline: "Excellence is our standard.",
      text: "We set high standards in everything we do, striving for quality and long-term impact in all services.",
      cta: "Excellent",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          <path d="M12 6l1.5 3.5L17 11l-3.5 1.5L12 16l-1.5-3.5L7 11l3.5-1.5L12 6z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Reliable",
      headline: "A partner you can rely on.",
      text: "Dependable and consistent, we are always there to support your growth and adapt to your evolving needs.",
      cta: "Reliable",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
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
                Expert skills,<br />
                exceptional results.
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
            <div className="row align-items-center">
                             {/* Left Column - Headline */}
                               <div className="col-lg-6 col-xxl-6 col-xl-6">
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
                         Expert skills,<br />
                         exceptional results.
                       </>
                     )}
                  </h2>
                </div>

                             {/* Spacer Column */}
               <div className="col-lg-2 col-xxl-2 col-xl-2 d-none d-lg-block">
                 {/* Empty spacer to push right column further right */}
               </div>

                             {/* Right Column - Main Title and Dynamic Content */}
               <div className="col-lg-4 col-xxl-4 col-xl-4">
                 {/* Main Title */}
                 <div className="main-title-container reveal delay-1">
                   <h1 className="main-title">WHY SPIDER</h1>
                 </div>
                 
                 <div className="content-card reveal delay-2" aria-live="polite">
                                       <div className="content-text">
                      <p className="content-paragraph reveal delay-3">
                        {activeIndex !== null ? growthStops[activeIndex].text : "We bring skill and precision to every project, ensuring strategies are tailored to meet the unique needs of your hotel."}
                      </p>
                      <div className="cta-badge reveal delay-4">
                        {activeIndex !== null ? growthStops[activeIndex].cta : "Skillful"}
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

