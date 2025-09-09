import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from '../../../assets/css/home/SuccessStoriesSlider.module.css';

// Real testimonials from Otel Spider clients
const successStories = [
  {
    id: '1',
    title: 'LAMIS SHALABY',
    badge: 'REGIONAL DIRECTOR OF MARKETING',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/Lamis+Shalaby-1920w.jpeg',
    href: '#',
    alt: 'Lamis Shalaby - Regional Director of Marketing',
    testimonial: "I got introduced to Otel Spider only when I joined Amer and unfortunately never before. Ramy, the founder was super cooperative and understanding, He showed ultimate dedication and assistance. The company offered a fully-fledged, one stop shop style that made very much easier and more professional to coordinate and accomplish the new hotel website launch while integrating channel manager. It felt so much better to talk to one team over several subjects. ALWAYS RECOMMENDED!",
    person: {
      name: 'Lamis Shalaby',
      position: 'Regional Director of Marketing',
      stars: 5
    }
  },
  {
    id: '2',
    title: 'AMIR ABDALLAH',
    badge: 'REGIONAL DIRECTOR OF SALES & MARKETING',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/Amir+Abdallah-a104928d-1920w.jpeg',
    href: '#',
    alt: 'Amir Abdallah - Regional Director of Sales & Marketing',
    testimonial: "Professional and innovative E-commerce services and technology solution.",
    person: {
      name: 'Amir Abdallah',
      position: 'Regional Director of Sales & Marketing',
      stars: 5
    }
  },
  {
    id: '3',
    title: 'AYA GAMAL',
    badge: 'ECOMMERCE MANAGER',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/Aya+Gamal-3a6e8d42-1920w.jpeg',
    href: '#',
    alt: 'Aya Gamal - eCommerce Manager',
    testimonial: "Otel Spider assisted me choosing my current channel manager. Ramy keeps following up with me if I'm facing any problems or need any assist in any thing. It's a really promising company that has a powerful potential",
    person: {
      name: 'Aya Gamal',
      position: 'eCommerce Manager',
      stars: 5
    }
  },
  {
    id: '4',
    title: 'SHERIF ANWAR',
    badge: 'REGIONAL DIRECTOR OF ECOMMERCE',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/Sherif+Anwar-14f3529b-1920w.jpeg',
    href: '#',
    alt: 'Sherif Anwar - Regional Director of eCommerce',
    testimonial: "We partnered with Otelspider to build a new website for our hotelchain and they succeeded to deliver us an amazing website and a booking engine www.pyramisahotels.com - special thanks to Ramy Ramzy the founder of Otel Spider, very supportive person. I recommend this company to anyone searching for e-Commerce solutions - 100%",
    person: {
      name: 'Sherif Anwar',
      position: 'Regional Director of eCommerce',
      stars: 5
    }
  },
  {
    id: '5',
    title: 'SAAD HOSSAM',
    badge: 'REGIONAL REVENUE & ECOMMERCE MANAGER',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/Saad+Hossam-b28cf222-1920w.jpg',
    href: '#',
    alt: 'Saad Hossam - Regional Revenue & eCommerce Manager',
    testimonial: "Professional staff, Excellent services, Very well chosen products, And their after-sales support is outstanding. I'd strongly recommend dealing with them.",
    person: {
      name: 'Saad Hossam',
      position: 'Regional Revenue & eCommerce Manager',
      stars: 5
    }
  },
  {
    id: '6',
    title: 'PASSANT BAHNASAWY',
    badge: 'DIRECTOR OF MARKETING',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/Passant+Bahnasawy-1db4f79d-1920w.jpg',
    href: '#',
    alt: 'Passant Bahnasawy - Director of Marketing',
    testimonial: "Perfect quality with the best dynamic packages in the market, I have worked with them on many successful projects, websites, booking engines & channel manager, very reliable technical support & after sales follow up.",
    person: {
      name: 'Passant Bahnasawy',
      position: 'Director of Marketing',
      stars: 5
    }
  },
  {
    id: '7',
    title: 'MARIAM MOURAD',
    badge: 'DIRECTOR OF SALES AND ECOMMERCE',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/Mariam+Mourad-9ee72457-1920w.jpeg',
    href: '#',
    alt: 'Mariam Mourad - Director of Sales and eCommerce',
    testimonial: "Professional, Supportive, the best team ever and they always provides Excellent services. Thank you Mr. Ramy for your always support.",
    person: {
      name: 'Mariam Mourad',
      position: 'Director of Sales and eCommerce',
      stars: 5
    }
  },
  {
    id: '8',
    title: 'MOHAMED SHAABAN',
    badge: 'DIRECTOR OF DIGITAL MARKETING',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/Mohammed+Shaaban-acfd5d66-1920w.png',
    href: '#',
    alt: 'Mohamed Shaaban - Director of Digital Marketing',
    testimonial: "The value that you receive from Otel Spider is that they are with you from start to finish.",
    person: {
      name: 'Mohamed Shaaban',
      position: 'Director of Digital Marketing',
      stars: 5
    }
  },
  {
    id: '9',
    title: 'GEORGE BOUSHRA',
    badge: 'SENIOR ECOMMERCE MANAGER',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/George+Boushra-8e525938-1920w.jpeg',
    href: '#',
    alt: 'George Boushra - Senior eCommerce Manager',
    testimonial: "#OtelSpider provide a lot of E-Commerce solutions and we start our partnership with #OtelSpider with Responsive Booking Engine with more effective functions and tools, appreciated to Mr. Ramy Ramzy the active person and with full recommendations to start with #OtelSpider Good Luck",
    person: {
      name: 'George Boushra',
      position: 'Senior eCommerce Manager',
      stars: 5
    }
  },
  {
    id: '10',
    title: 'ENGY EL FADALY',
    badge: 'ECOMMERCE EXECUTIVE',
    source: 'google',
    image: 'https://lirp.cdn-website.com/e2fd7e34/dms3rep/multi/opt/Engy+El+Fadaly-00f894a2-1920w.jpeg',
    href: '#',
    alt: 'Engy El Fadaly - eCommerce Executive',
    testimonial: "Otel Spider provides Excellent and effective Ecommerce solutions and outstanding consulting services for the hospitality industry. I fully recommend to deal with otel spider company.",
    person: {
      name: 'Engy El Fadaly',
      position: 'eCommerce Executive',
      stars: 5
    }
  }
];

const SuccessStoriesSlider = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
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

  // Helper function to truncate text
  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Helper function to toggle read more
  const toggleReadMore = (testimonialId) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [testimonialId]: !prev[testimonialId]
    }));
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
                  <div className={styles.caption}>
                    <div className={styles.testimonialText}>
                      "{expandedTestimonials[story.id] ? story.testimonial : truncateText(story.testimonial)}"
                    </div>
                    {story.testimonial.length > 150 && (
                      <button 
                        className={styles.readMoreBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleReadMore(story.id);
                        }}
                      >
                        {expandedTestimonials[story.id] ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
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
