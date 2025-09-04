import React, { useState, useEffect, useRef } from 'react';
import './HeroEcommerce.css';

const HeroEcommerce = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideshowIntervalRef = useRef(null);
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Background images array
  const backgroundImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop'
  ];

  // Preload images
  useEffect(() => {
    backgroundImages.forEach(imageUrl => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  // Slideshow logic
  useEffect(() => {
    if (isReducedMotion) return;

    const startSlideshow = () => {
      slideshowIntervalRef.current = setInterval(() => {
        setCurrentSlideIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
      }, 5000);
    };

    startSlideshow();

    return () => {
      if (slideshowIntervalRef.current) {
        clearInterval(slideshowIntervalRef.current);
      }
    };
  }, [backgroundImages.length, isReducedMotion]);

  // Handle slide transition
  useEffect(() => {
    if (isReducedMotion) return;

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1500); // Match CSS transition duration

    return () => clearTimeout(timer);
  }, [currentSlideIndex, isReducedMotion]);

  // Smooth scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      scrollToNextSection();
    }
  };

  return (
    <section className="hero-ecommerce">
      {/* Background Images */}
      <div className="hero-background">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlideIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden={index !== currentSlideIndex}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12 text-center">
            <p className="hero-subtitle">
              We provide innovative solutions to expand business
            </p>
            <h1 className="hero-headline">
              We have been helping<br />build brands
            </h1>
            
            <button
              className="scroll-button"
              onClick={scrollToNextSection}
              onKeyDown={handleKeyDown}
              aria-label="Scroll to next section"
            >
              <svg 
                className="scroll-arrow" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M7 10L12 15L17 10" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEcommerce;
