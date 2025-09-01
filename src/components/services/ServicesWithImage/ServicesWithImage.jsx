import React from 'react';
import '../../../assets/css/services/services-with-image.css';

const ServicesWithImage = ({ 
  imageSrc = "/images/services-main.jpg",
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
  return (
    <section className="services-with-image py-5">
      <div className="container">
        {/* Centered Image */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <img 
              src={imageSrc} 
              alt="Services showcase" 
              className="services-main-image img-fluid rounded-3 shadow"
            />
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="service-card text-center h-100">
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
