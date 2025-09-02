import React, { useEffect, useRef } from 'react';
import '../../../assets/css/services/why-work-with-us.css';

const WhyWorkWithUs = ({ 
  title = "WHY WORK WITH US?",
  items = [
    {
      id: 1,
      imageSrc: "/images/latest-blog6.jpg",
      imageAlt: "Creative design process",
      subtitle: "We believe in creativity",
      description: "Our team brings fresh perspectives and innovative solutions to every project, ensuring your brand stands out in today's competitive market.",
      backDescription: "We push creative boundaries and deliver designs that not only look amazing but also drive real business results."
    },
    {
      id: 2,
      imageSrc: "/images/latest-blog5.jpg",
      imageAlt: "Quality craftsmanship",
      subtitle: "Quality craftsmanship",
      description: "Every detail matters to us. We craft pixel-perfect designs with clean, maintainable code that exceeds expectations.",
      backDescription: "Our attention to detail and commitment to excellence ensures that every project we deliver is of the highest quality."
    },
    {
      id: 3,
      imageSrc: "/images/latest-blog7.jpg",
      imageAlt: "Client partnership",
      subtitle: "Client partnership",
      description: "We don't just work for you, we work with you. Building lasting relationships through collaboration and trust.",
      backDescription: "We believe in transparent communication and collaborative partnerships that lead to successful, long-term relationships."
    }
  ]
}) => {
  const sectionRef = useRef(null);

  // Scroll-triggered animation
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

  return (
    <section ref={sectionRef} className="why-work-with-us py-5 py-lg-6">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title fw-bold text-uppercase mb-0 reveal">
              {title}
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="row g-4">
          {items.map((item, index) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-4">
              <div className={`card h-100 border-0 reveal delay-${index + 1}`}>
                <div className="card-body d-flex flex-column">
                  {/* Flip Image Container */}
                  <div className="flip-image-container mb-3">
                    <div className="flip-image-inner">
                      {/* Front Side - Image */}
                      <div className="flip-image-front">
                        <img 
                          src={item.imageSrc} 
                          alt={item.imageAlt}
                          className="img-fluid"
                          loading="lazy"
                          decoding="async"
                          style={{ minHeight: '200px', objectFit: 'cover' }}
                          onError={(e) => {
                            console.error(`Failed to load image: ${item.imageSrc}`);
                          }}
                        />
                      </div>
                      
                      {/* Back Side - Colored Panel */}
                      <div className="flip-image-back">
                        <div className="back-content d-flex align-items-center justify-content-center h-100">
                          <p className="back-description text-center px-3 mb-0">
                            {item.backDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Content - Always Visible */}
                  <h3 className="card-subtitle fw-bold mb-2">
                    {item.subtitle}
                  </h3>
                  <p className="card-text flex-grow-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
