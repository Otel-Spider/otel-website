import React, { useState, useEffect, useRef } from 'react';
import './TestimonialCarousel.css';

const TestimonialCarousel = ({
  titleLabel = "TESTIMONIAL",
  backgroundImageUrl,
  overlayOpacity = 0.5,
  testimonials = [],
  autoPlay = true,
  autoPlayDelay = 6000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const autoPlayRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && testimonials.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, autoPlayDelay);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, autoPlayDelay, testimonials.length]);

  // Pause auto-play on user interaction
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Resume auto-play after delay
  const resumeAutoPlay = () => {
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  // Navigation functions
  const goToPrevious = () => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resumeAutoPlay();
  };

  const goToNext = () => {
    pauseAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    resumeAutoPlay();
  };

  const goToSlide = (index) => {
    pauseAutoPlay();
    setCurrentIndex(index);
    resumeAutoPlay();
  };

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const offset = currentX - dragStartX;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
    
    setDragOffset(0);
  };

  // Touch/swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 100;
    const swipeDistance = touchStartX.current - touchEndX.current;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="testimonial-carousel"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none'
      }}
    >
      <div 
        className="carousel-overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      
      <div className="container">
        <div className="carousel-content">
          {/* Title Label with Divider Lines */}
          <div className="title-label-container">
            <div className="divider-line"></div>
            <span className="title-label">{titleLabel}</span>
            <div className="divider-line"></div>
          </div>

          {/* Testimonial Content */}
          <div className="testimonial-content">
            {/* Left Arrow */}
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            {/* Carousel Container */}
            <div 
              className="carousel-container"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className={`carousel-track ${isDragging ? 'dragging' : ''}`}
                style={{
                  transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? dragOffset : 0}px))`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id || index}
                    className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
                  >
                    <div className="testimonial-card">
                      <div className="testimonial-avatar">
                        <img
                          src={testimonial.avatarUrl}
                          alt={`${testimonial.author} avatar`}
                          className="avatar-image"
                        />
                      </div>
                      
                      <div className="testimonial-text">
                        <blockquote className="quote">
                          <p className="quote-text">{testimonial.quote}</p>
                          <footer className="quote-author">
                            <cite className="author-name">{testimonial.author}</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next testimonial"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          {testimonials.length > 1 && (
            <div className="pagination-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
