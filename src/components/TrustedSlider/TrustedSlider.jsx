import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TrustedSlider.css';

const TrustedSlider = () => {
  const titleRef = useRef(null);

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

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };

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
    <section className="trusted-slider-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 
              ref={titleRef}
              className="trusted-title"
            >
              Trusted by the world's top hotel groups
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="slider-container">
              <Slider {...sliderSettings}>
                {hotelLogos.map((hotel) => (
                  <div key={hotel.id} className="logo-slide">
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
