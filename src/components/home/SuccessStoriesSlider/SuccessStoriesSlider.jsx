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
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-1',
    alt: 'Luxury hotel exterior with modern architecture'
  },
  {
    id: '2',
    title: 'CHEWTON GLEN',
    badge: 'EXPERIENCE MANAGEMENT SYSTEM',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-2',
    alt: 'Elegant resort with spa facilities'
  },
  {
    id: '3',
    title: 'CLIVEDEN HOUSE',
    badge: 'DIGITAL TRANSFORMATION',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-3',
    alt: 'Historic mansion with beautiful gardens'
  },
  {
    id: '4',
    title: 'THE SAVOY',
    badge: 'CUSTOMER EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-4',
    alt: 'Iconic luxury hotel in London'
  },
  {
    id: '5',
    title: 'GLENEAGLES',
    badge: 'REVENUE OPTIMIZATION',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-5',
    alt: 'Scottish golf resort and spa'
  },
  {
    id: '6',
    title: 'THE RITZ-CARLTON',
    badge: 'BRAND EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
    href: 'https://example.com/case-study-6',
    alt: 'Luxury hotel lobby with chandeliers'
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
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 0,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 0,
      },
    },
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
            {successStories.map((story) => (
              <SwiperSlide key={story.id} className={styles.slide}>
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
                     <div className={styles.badge}>{story.badge}</div>
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
        EXPLORE
      </div>
    </section>
  );
};

export default SuccessStoriesSlider;
