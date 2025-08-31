import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from '../../../assets/css/home/SuccessStoriesSlider.module.css';

// Sample data for success stories
const successStories = [
  {
    id: '1',
    title: 'THE BELFRY HOTEL & RESORT',
    badge: 'ECOMMERCE PLATFORM',
    source: 'google', // 'google', 'facebook', 'tripadvisor', 'trustpilot', 'yelp'
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-1',
    alt: 'Luxury hotel exterior with modern architecture',
    person: {
      name: 'John Doe',
      position: 'CEO, The Belfry Hotel',
      stars: 5
    }
  },
  {
    id: '2',
    title: 'CHEWTON GLEN',
    badge: 'EXPERIENCE MANAGEMENT SYSTEM',
    source: 'google',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-2',
    alt: 'Elegant resort with spa facilities',
    person: {
      name: 'Jane Smith',
      position: 'Director of Operations, Chewton Glen',
      stars: 4
    }
  },
  {
    id: '3',
    title: 'CLIVEDEN HOUSE',
    badge: 'DIGITAL TRANSFORMATION',
    source: 'facebook',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-3',
    alt: 'Historic mansion with beautiful gardens',
    person: {
      name: 'Peter Jones',
      position: 'Managing Director, Cliveden House',
      stars: 5
    }
  },
  {
    id: '4',
    title: 'THE SAVOY',
    badge: 'CUSTOMER EXPERIENCE',
    source: 'facebook',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-4',
    alt: 'Iconic luxury hotel in London',
    person: {
      name: 'Maria Garcia',
      position: 'General Manager, The Savoy',
      stars: 5
    }
  },
  {
    id: '5',
    title: 'GLENEAGLES',
    badge: 'REVENUE OPTIMIZATION',
    source: 'yelp',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-5',
    alt: 'Scottish golf resort and spa',
    person: {
      name: 'David Brown',
      position: 'Director of Sales, Gleneagles',
      stars: 4
    }
  },
  {
    id: '6',
    title: 'THE RITZ-CARLTON',
    badge: 'BRAND EXPERIENCE',
    source: 'google',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-6',
    alt: 'Luxury hotel lobby with chandeliers',
    person: {
      name: 'Sophie Wilson',
      position: 'Director of Marketing, The Ritz-Carlton',
      stars: 5
    }
  }
];

const SuccessStoriesSlider = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const swiperRef = useRef(null);
  const sliderRef = useRef(null);
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

  // Swiper configuration
  const swiperConfig = {
    modules: [Autoplay],
    spaceBetween: 20,
    slidesPerView: 3.5,
    loop: true,
    autoplay: {
      delay: 98000,
      disableOnInteraction: false,
    },
    speed: 2000,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },
  };

  // Helper function to render stars
  const renderStars = (count) => {
    return '★'.repeat(count);
  };

  // Render social media icon
  const renderSocialIcon = (source) => {
    const iconSize = 16;
    
    switch (source) {
      case 'google':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        );
      case 'facebook':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'tripadvisor':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.006 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.486 16.793c-.669.848-1.635 1.365-2.717 1.365-1.082 0-2.048-.517-2.717-1.365-.669-.848-.669-1.945 0-2.793.669-.848 1.635-1.365 2.717-1.365 1.082 0 2.048.517 2.717 1.365.669.848.669 1.945 0 2.793zm8.486-2.793c-.669-.848-1.635-1.365-2.717-1.365-1.082 0-2.048.517-2.717 1.365-.669.848-.669 1.945 0 2.793.669.848 1.635 1.365 2.717 1.365 1.082 0 2.048-.517 2.717-1.365.669-.848.669-1.945 0-2.793zm-4.243-4.243c-.669-.848-1.635-1.365-2.717-1.365-1.082 0-2.048.517-2.717 1.365-.669.848-.669 1.945 0 2.793.669.848 1.635 1.365 2.717 1.365 1.082 0 2.048-.517 2.717-1.365.669-.848.669-1.945 0-2.793z"/>
          </svg>
        );
      case 'trustpilot':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6h2v2h-2v-2zm0-8h2v6h-2V8z"/>
          </svg>
        );
      case 'yelp':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.16 12.73c-.28-.47-.71-.84-1.23-1.05-.52-.21-1.09-.25-1.64-.12-.55.13-1.04.44-1.39.88-.35.44-.54.99-.54 1.56 0 .57.19 1.12.54 1.56.35.44.84.75 1.39.88.55.13 1.12.09 1.64-.12.52-.21.95-.58 1.23-1.05.28-.47.42-1.01.42-1.56 0-.55-.14-1.09-.42-1.56zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-3-3 3-3v6zm4-6l3 3-3 3v-6z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Handle mouse movement for custom cursor
  const handleMouseMove = (e) => {
    if (isHovering) {
      setCursorPosition({
        x: e.clientX - 42, // Center the 84px circle
        y: e.clientY - 42,
      });
    }
  };

  // Handle slide hover
  const handleSlideHover = (isHoveringSlide) => {
    setIsCursorVisible(isHoveringSlide);
  };

  // Handle slider container hover
  const handleSliderHover = (isHoveringSlider) => {
    setIsHovering(isHoveringSlider);
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isHoveringSlider) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  };

  // Handle slide click
  const handleSlideClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} className={styles.successStoriesSection}>
      <div className={styles.container}>
        <h2 className={`${styles.title} reveal`}>TESTIMONIALS</h2>
        
        <div 
          className={styles.sliderContainer}
          ref={sliderRef}
          onMouseEnter={() => handleSliderHover(true)}
          onMouseLeave={() => handleSliderHover(false)}
          onMouseMove={handleMouseMove}
        >
          <Swiper
            ref={swiperRef}
            {...swiperConfig}
            className={styles.swiper}
          >
            {successStories.map((story, index) => (
              <SwiperSlide key={story.id} className={`${styles.slide} reveal`} style={{ transitionDelay: `${index * 0.08}s` }}>
                <div 
                  className={styles.slideContent}
                  onMouseEnter={() => handleSlideHover(true)}
                  onMouseLeave={() => handleSlideHover(false)}
                  onClick={() => handleSlideClick(story.href)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open case study: ${story.title}`}
                >
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.image}
                      src={story.image}
                      alt={story.alt || story.title}
                      loading="lazy"
                    />
                    <div className={styles.badge}>
                      <div className={styles.badgeTitle}>
                        {story.badge}
                      </div>
                      <div className={styles.personInfo}>
                        <div className={styles.personName}>
                          {story.person.name}
                          {story.source && (
                            <span className={styles.socialIcon}>
                              {renderSocialIcon(story.source)}
                            </span>
                          )}
                        </div>
                        <div className={styles.personPosition}>{story.person.position}</div>
                        <div className={styles.stars}>{renderStars(story.person.stars)}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.caption}>{story.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={`${styles.ctaContainer} reveal delay-1`}>
          <button className={`${styles.ctaButton} ${styles.underlinedText}`}>
            <span>VIEW ALL TESTIMONIALS</span>
          </button>
        </div>
      </div>

      {/* Custom cursor */}
      <div 
        className={`${styles.customCursor} ${isCursorVisible ? styles.visible : ''}`}
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
        }}
      >
        GRAB
      </div>
    </section>
  );
};

export default SuccessStoriesSlider;
