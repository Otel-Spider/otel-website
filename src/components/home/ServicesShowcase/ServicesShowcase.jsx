import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../../../assets/css/home/ServicesShowcase.module.css';

const ServicesShowcase = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [lastClickedButton, setLastClickedButton] = useState(null);

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
  const services = [
    {
      id: 1,
      title: 'Hospitality eCommerce Consulting',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
      icon: (
        <svg width="55" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M8 12h8"/>
          <path d="M12 8v8"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Performance Marketing Services',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
      icon: (
        <svg width="55" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
          <path d="M13 2l3 3-3 3"/>
          <path d="M16 5h-6"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Hotel Website Development',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center',
      icon: (
        <svg width="55" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <path d="M6 9h12"/>
          <path d="M6 13h8"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Hotel Booking Engine',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
      icon: (
        <svg width="55" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M8 14h.01"/>
          <path d="M12 14h.01"/>
          <path d="M16 14h.01"/>
          <path d="M8 18h.01"/>
          <path d="M12 18h.01"/>
          <path d="M16 18h.01"/>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Hotel Channel Manager',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop&crop=center',
      icon: (
        <svg width="55" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
          <path d="M6 2v2"/>
          <path d="M6 11v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8"/>
          <path d="M18 15h1.5a2.5 2.5 0 0 1 0 5H18"/>
          <path d="M18 22v-2"/>
          <path d="M15 18l3-3-3-3"/>
          <path d="M9 6l3 3-3 3"/>
        </svg>
      )
    },
    {
      id: 6,
      title: 'Hotel Loyalty Solution',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          <path d="M12 8v8"/>
          <path d="M8 12h8"/>
        </svg>
      )
    }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

     const swiperConfig = {
     modules: [Pagination, Navigation, Autoplay],
     spaceBetween: 20,
     slidesPerView: 1.2,
     centeredSlides: true,
     loop: true,
     autoplay: {
       delay: 4000,
       disableOnInteraction: false,
     },
     pagination: {
       clickable: true,
       el: '.swiper-pagination',
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     breakpoints: {
       480: {
         slidesPerView: 1.5,
         spaceBetween: 25,
       },
       576: {
         slidesPerView: 3,
         spaceBetween: 30,
       },
     }
   };

  return (
    <section ref={sectionRef} className={styles.servicesShowcase}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Content */}
          <div className="col-lg-5 mb-0 mb-lg-0">
            <div className={styles.content}>
              <h2 className={`${styles.headline} reveal`}>
                <span className={`${styles.headlineLine1} reveal delay-1`}>Our Key</span>
                <span className={`${styles.headlineLine2} reveal delay-2`}>Services</span>
              </h2>
              <h3 className={`${styles.subheadline} reveal delay-3`}>
                For Growing Hospitality
              </h3>
              <p className={`${styles.description} reveal delay-4`}>
                We deliver a complete range of hospitality eCommerce and marketing services designed to help hotels boost direct bookings, strengthen brand visibility, and achieve sustainable growth.
              </p>
              <a href="#services" className={`${styles.seeMoreLink} reveal delay-5`}>
                See More »
              </a>
            </div>
          </div>

          {/* Right Column - Service Tiles */}
          <div className="col-lg-7 p-0">
            {/* Desktop Grid View */}
            <div className={`${styles.desktopGrid} d-none d-lg-block`}>
              <div className="row g-3 g-md-4">
                {services.map((service, index) => (
                  <div key={service.id} className="col-6 col-md-6 col-lg-4 px-0 m-0">
                    <div 
                      className={`${styles.serviceTile} reveal`}
                      style={{ transitionDelay: `${(index + 6) * 0.04}s` }}
                      tabIndex="0"
                      role="button"
                      aria-label={`Learn more about ${service.title}`}
                      onTouchStart={(e) => e.currentTarget.classList.add(styles.touchActive)}
                      onTouchEnd={(e) => e.currentTarget.classList.remove(styles.touchActive)}
                    >
                      <div className={styles.tileBackground}>
                        <img 
                          src={service.image} 
                          alt="" 
                          loading="lazy"
                          className={styles.tileImage}
                        />
                        <div className={styles.gradientOverlay}></div>
                        
                        {/* Animated Border Element */}
                        <div className={styles.serviceBorder}></div>
                      </div>
                      
                      <div className={styles.tileContent}>
                        <div className={styles.tileIcon}>
                          {service.icon}
                        </div>
                        <h4 className={styles.tileTitle}>
                          {service.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

                         {/* Mobile Slider View */}
             <div className={`${styles.mobileSlider} d-lg-none`}>
               <Swiper 
                 {...swiperConfig} 
                 className={styles.swiper}
                 onSwiper={(swiper) => {
                   swiperRef.current = swiper;
                 }}
               >
                                 {services.map((service, index) => (
                   <SwiperSlide key={service.id} className={styles.swiperSlide}>
                     <div 
                       className={`${styles.serviceTile} reveal`}
                       style={{ transitionDelay: `0.1s` }}
                       tabIndex="0"
                       role="button"
                       aria-label={`Learn more about ${service.title}`}
                       onTouchStart={(e) => e.currentTarget.classList.add(styles.touchActive)}
                       onTouchEnd={(e) => e.currentTarget.classList.remove(styles.touchActive)}
                     >
                      <div className={styles.tileBackground}>
                        <img 
                          src={service.image} 
                          alt="" 
                          loading="lazy"
                          className={styles.tileImage}
                        />
                        <div className={styles.gradientOverlay}></div>
                        
                        {/* Animated Border Element */}
                        <div className={styles.serviceBorder}></div>
                      </div>
                      
                      <div className={styles.tileContent}>
                        <div className={styles.tileIcon}>
                          {service.icon}
                        </div>
                        <h4 className={styles.tileTitle}>
                          {service.title}
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
                                                           {/* Custom Navigation - Both Arrows */}
                                 <div className={styles.sliderNavigation}>
                   <button 
                     className={`${styles.navButton} ${styles.prevButton} ${lastClickedButton === 'prev' ? styles.clicked : ''}`}
                     onClick={(e) => {
                       // Navigate to previous slide
                       if (swiperRef.current) {
                         swiperRef.current.slidePrev();
                       }
                       // Set this as the last clicked button
                       setLastClickedButton('prev');
                     }}
                   >
                     <img src="/logos/otel-left.png" alt="Previous" className={styles.arrowIcon} />
                   </button>
                   <button 
                     className={`${styles.navButton} ${styles.nextButton} ${lastClickedButton === 'next' ? styles.clicked : ''}`}
                     onClick={(e) => {
                       // Navigate to next slide
                       if (swiperRef.current) {
                         swiperRef.current.slideNext();
                       }
                       // Set this as the last clicked button
                       setLastClickedButton('next');
                     }}
                   >
                     <img src="/logos/otel-right.png" alt="Next" className={styles.arrowIcon} />
                   </button>
                 </div>
              
              {/* Custom Pagination */}
              <div className={`${styles.pagination} swiper-pagination`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
