import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Testimonials.module.css';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'Aurora Hospitality Management',
    rating: 5,
    quote: 'OTEL transformed our digital presence completely. Their expertise in hospitality technology helped us increase our bookings by 40% within the first quarter.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    logo: '/logos/Aurora+Hospitality+Management-40ab6ad1-1920w.png'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Operations Director',
    company: 'Desert Rose Resort',
    rating: 5,
    quote: 'The team at OTEL delivered exceptional results. Their attention to detail and understanding of our industry needs exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    logo: '/logos/Desert+Rose+Resort-33c20c09-1920w.png'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Manager',
    company: 'Porto Hotels',
    rating: 5,
    quote: 'Working with OTEL has been a game-changer for our brand. Their innovative solutions and dedicated support team are unmatched in the industry.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    logo: '/logos/Porto+Hotels-1920w.png'
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'General Manager',
    company: 'Pyramisa Hotels & Resorts',
    rating: 5,
    quote: 'OTEL\'s expertise in hospitality technology is outstanding. They helped us streamline our operations and improve guest satisfaction significantly.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    logo: '/logos/Pyramisa+Hotels+-+Resorts-b71481cd-1920w.png'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    position: 'Digital Strategy Lead',
    company: 'Tropitel Hotels & Resorts',
    rating: 5,
    quote: 'The results we\'ve achieved with OTEL are remarkable. Their strategic approach and technical excellence have positioned us as industry leaders.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    logo: '/logos/Tropitel+Hotels+-+Resorts-1920w.png'
  },
  {
    id: 6,
    name: 'Robert Martinez',
    position: 'IT Director',
    company: 'Reef Oasis Resorts',
    rating: 5,
    quote: 'OTEL\'s team demonstrated exceptional technical skills and industry knowledge. They delivered a solution that perfectly fits our business model.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    logo: '/logos/Reef+Oasis+Resorts-5aa306ab-1920w.png'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Swiper configuration
  const swiperConfig = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    onSlideChange: (swiper) => {
      setActiveIndex(swiper.realIndex);
    },
  };

  // Navigation functions
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Navigation functions using stored swiper instance
  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className={styles.starRating}>
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`fas fa-star ${index < rating ? styles.filled : styles.empty}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Discover why leading hospitality brands trust OTEL for their digital transformation
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <Swiper 
            ref={swiperRef} 
            {...swiperConfig} 
            className={styles.swiper}
            onSwiper={setSwiperInstance}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className={styles.slide}>
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>
                    <i className="fas fa-quote-left"></i>
                  </div>
                  
                  <StarRating rating={testimonial.rating} />
                  
                  <blockquote className={styles.quote}>
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className={styles.clientInfo}>
                    <div className={styles.avatarContainer}>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className={styles.avatar}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.clientDetails}>
                      <h4 className={styles.clientName}>{testimonial.name}</h4>
                      <p className={styles.clientPosition}>
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                    <div className={styles.companyLogo}>
                      <img
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        className={styles.logo}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className={styles.navigation}>
            <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          {/* Custom Pagination */}
          <div className={`${styles.pagination} swiper-pagination`}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
