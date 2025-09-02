import React, { useEffect, useRef } from 'react';
import '../../../assets/css/services/services-with-image.css';

const ServicesWithImage = ({ 
  imageSrc = "/images/services-img3.jpg",
  services = [
    {
      category: "CREATIVE",
      title: "Creative thinking & design",
      description: "We create innovative and beautiful designs that capture your brand's essence and connect with your audience."
    },
    {
      category: "DIGITAL",
      title: "Digital transformation",
      description: "Transform your business with cutting-edge digital solutions that drive growth and improve efficiency."
    },
    {
      category: "ANALYTICS",
      title: "Data-driven insights",
      description: "Leverage powerful analytics to make informed decisions and optimize your business performance."
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
    <section ref={sectionRef} className="services-with-image py-5">
      <div className="container">
        {/* Centered Image */}
        <div className="row centered-image justify-content-center">
          <div className="col-12 col-lg-12 text-center">
            <img 
              src={imageSrc} 
              alt="Services showcase" 
              className="services-main-image img-fluid rounded-3 reveal"
            />
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className={`service-card text-start h-100 reveal delay-${index + 1}`}>
                <small className="service-category d-block text-muted text-uppercase fw-semibold mb-2">
                  {service.category}
                </small>
                <h3 className="service-title fs-5 fw-semibold mb-3">
                  {service.title}
                </h3>
                <p className="service-description text-muted mb-3">
                  {service.description}
                </p>
                <div className="service-indicator"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWithImage;
