import React, { useEffect, useRef } from 'react';
import './FeatureGrid.css';

const FeatureGrid = ({ 
  eyebrow = "FIND MORE CREATIVE IDEAS FOR YOUR PROJECTS",
  title = "Build perfect websites, Beautifully handcrafted templates for your website",
  items = []
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
  // Default features if none provided
  const defaultFeatures = [
    {
      icon: "https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/monitor.svg",
      title: "Web Development",
      text: "Custom web applications built with modern technologies, ensuring scalability, performance, and exceptional user experience across all devices."
    },
    {
      icon: "https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/tag.svg",
      title: "Logo and Identity",
      text: "Professional branding solutions that capture your company's essence and create memorable visual identities that stand out in the market."
    },
    {
      icon: "https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/image.svg",
      title: "Graphics Design",
      text: "Creative visual content including marketing materials, social media graphics, and print designs that effectively communicate your message."
    },
    {
      icon: "https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/smartphone.svg",
      title: "App Development",
      text: "Native and cross-platform mobile applications designed for optimal performance and user engagement on iOS and Android devices."
    },
    {
      icon: "https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/trending-up.svg",
      title: "Social Marketing",
      text: "Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions across all major platforms."
    },
    {
      icon: "https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/edit-3.svg",
      title: "Content Creation",
      text: "Compelling written and visual content that tells your story, educates your audience, and positions you as an industry authority."
    }
  ];

  const features = items.length > 0 ? items : defaultFeatures;

  return (
    <section ref={sectionRef} className="feature-grid py-5 py-lg-6">
      <div className="container">
        <div className="text-center mb-4 mb-md-4">
          <p className="eyebrow text-uppercase fw-semibold mb-2 reveal">
            {eyebrow}
          </p>
          <h2 className="display-5 fw-bold mb-0 reveal delay-1">
            {title.split(',')[0]},
            {title.split(',')[1]}
          </h2>
        </div>

        <div className="row gy-5 gx-lg-5">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className={`d-flex align-items-start feature-item reveal delay-${index + 2}`}>
                <img 
                  src={feature.icon} 
                  alt="" 
                  className="feature-icon me-3 me-lg-4" 
                  aria-hidden="true"
                />
                <div>
                  <h5 className="fw-semibold mb-2">{feature.title}</h5>
                  <p className="mb-0">
                    {feature.text}
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

export default FeatureGrid;
