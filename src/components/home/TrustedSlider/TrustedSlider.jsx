import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../assets/css/home/TrustedSlider.css';

const TrustedSlider = () => {
  const titleRef = useRef(null);
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

  // Hotel logos from the logos folder
  const hotelLogos = [
    { id: 1, name: 'Aurora Hospitality Management', logo: `${process.env.PUBLIC_URL}/logos/Aurora+Hospitality+Management-40ab6ad1-1920w.png` },
    { id: 2, name: 'Azur Hotels & Resorts', logo: `${process.env.PUBLIC_URL}/logos/Azur+Hotels+-+Resorts.png` },
    { id: 3, name: 'Desert Rose Resort', logo: `${process.env.PUBLIC_URL}/logos/Desert+Rose+Resort-33c20c09-1920w.png` },
    { id: 4, name: 'Grand Nile Tower Cairo', logo: `${process.env.PUBLIC_URL}/logos/Grand+Nile+Tower+Cairo-1920w.png` },
    { id: 5, name: 'Porto Hotels', logo: `${process.env.PUBLIC_URL}/logos/Porto+Hotels-1920w.png` },
    { id: 6, name: 'Pyramisa Hotels & Resorts', logo: `${process.env.PUBLIC_URL}/logos/Pyramisa+Hotels+-+Resorts-b71481cd-1920w.png` },
    { id: 7, name: 'Reef Oasis Resorts', logo: `${process.env.PUBLIC_URL}/logos/Reef+Oasis+Resorts-5aa306ab-1920w.png` },
    { id: 8, name: 'Tropitel Hotels & Resorts', logo: `${process.env.PUBLIC_URL}/logos/Tropitel+Hotels+-+Resorts-1920w.png` }
  ];

  const [sliderRef, setSliderRef] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 0.5, // Smaller scroll increment for more responsive feel
    autoplay: false, // Disabled autoplay
    pauseOnHover: false,
    speed: 600, // Faster transition speed for more responsive feel
    cssEase: 'ease-out', // Smooth easing
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 0.25, // Even smaller increments on tablets
          speed: 500,
          cssEase: 'ease-out',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0.25, // Smaller increments on mobile
          speed: 500,
          cssEase: 'ease-out',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0.25, // Consistent small increments
          speed: 500,
          cssEase: 'ease-out',
        }
      }
    ]
  };

  // Scroll-based slider control
  useEffect(() => {
    let scrollTimeout;
    let scrollAccumulator = 0;
    const scrollThreshold = 1; // Very low threshold for responsiveness

    const handleScroll = () => {
      if (!sliderRef) return;
      
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      
      // Accumulate scroll movement for smoother control
      scrollAccumulator += scrollDelta;
      
      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // Move slider based on accumulated scroll
      if (Math.abs(scrollAccumulator) >= scrollThreshold) {
        if (scrollAccumulator > 0) {
          sliderRef.slickNext();
        } else {
          sliderRef.slickPrev();
        }
        scrollAccumulator = 0; // Reset accumulator
      }
      
      // Set a timeout to handle small scroll movements
      scrollTimeout = setTimeout(() => {
        if (Math.abs(scrollAccumulator) > 0) {
          if (scrollAccumulator > 0) {
            sliderRef.slickNext();
          } else {
            sliderRef.slickPrev();
          }
          scrollAccumulator = 0;
        }
      }, 50); // Very short delay for responsiveness
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [sliderRef, lastScrollY]);

  // Fade-in animation for title
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="trusted-slider-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 
              ref={titleRef}
              className="trusted-title reveal"
            >
              Trusted by the world's top hotel groups
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="slider-container">
              <Slider 
                {...sliderSettings}
                ref={(slider) => setSliderRef(slider)}
              >
                {hotelLogos.map((hotel, index) => (
                  <div key={hotel.id} className="logo-slide reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
                    <div className="logo-wrapper">
                      <img
                        src={hotel.logo}
                        alt={`${hotel.name} logo`}
                        className="hotel-logo"
                        onError={(e) => {
                          // Fallback for missing images
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="logo-fallback">
                        {hotel.name}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSlider;
