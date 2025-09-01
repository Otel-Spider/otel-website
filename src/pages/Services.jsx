import React from 'react';
import HeroServicesHeader from '../components/services/HeroServicesHeader';
import ServicesWithImage from '../components/services/ServicesWithImage';
import ServicesGridDark from '../components/services/ServicesGridDark';
import ServicesShowcase from '../components/services/ServicesShowcase';
import ServicesFeatureBand from '../components/services/ServicesFeatureBand';
import WhyWorkWithUs from '../components/services/WhyWorkWithUs';

const Services = () => {
  const servicesData = [
    {
      category: "CREATIVE",
      title: "Creative thinking & design",
      description: "We create innovative and beautiful designs that capture your brand's essence and connect with your audience. Our creative team brings fresh perspectives to every project."
    },
    {
      category: "DIGITAL",
      title: "Digital transformation",
      description: "Transform your business with cutting-edge digital solutions that drive growth and improve efficiency. We help you navigate the digital landscape with confidence."
    },
    {
      category: "ANALYTICS",
      title: "Data-driven insights",
      description: "Leverage powerful analytics to make informed decisions and optimize your business performance. Our data experts turn numbers into actionable strategies."
    }
  ];

  return (
    <div className="services-page" style={{ overflowX: 'hidden', width: '100%' }}>
      <HeroServicesHeader 
        label="We are awesome designer"
        title="Services simple"
        bgImageUrl="/images/services-bg.jpg"
      />
      <ServicesWithImage 
        imageSrc="/images/services-img1.jpg"
        services={servicesData}
      />
      <ServicesGridDark />
      <ServicesShowcase />
      <ServicesFeatureBand />
      <WhyWorkWithUs />
    </div>
  );
};

export default Services;
