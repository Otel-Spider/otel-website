import React from 'react';
import '../../../assets/css/about/studio-intro-grid.css';

const StudioIntroGrid = ({ 
  images = [
    { src: '/images/about-me-4.jpg', alt: 'Work project 1' },
    { src: '/images/about-me-5.jpg', alt: 'Work project 2' },
    { src: '/images/about-me-6.jpg', alt: 'Work project 3' }
  ],
  intro = {
    titleLines: [
      "A digital studio crafting beautiful experiences.",
      "We create premium designs and technology."
    ],
    copy: "We are idea-driven, working with a strong focus on design and user experience. Our projects should engage your audience, we want to create wonderful digital things that people love to be part of and use. That's what your brand and audience deserve.",
    ctaText: "Check my expertise",
    ctaHref: "#"
  },
  overlays = [
    {
      years: "2019 to 2023",
      title: "Digital Experience",
      text: "Creating immersive digital experiences that engage and inspire users across all platforms.",
      buttonText: "Visit Website",
      buttonHref: "#"
    },
    {
      years: "2001 to 2005",
      title: "Motion Picture",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonText: "Visit Website",
      buttonHref: "#"
    },
    {
      years: "2015 to 2019",
      title: "Brand Identity",
      text: "Building memorable brand identities that resonate with audiences and drive business growth.",
      buttonText: "Visit Website",
      buttonHref: "#"
    }
  ]
}) => {
  return (
    <section className="studio-intro-grid py-5 py-lg-6">
      {/* Intro Row */}
      <div className="container my-5">
      <div className="row mb-5">
        {/* Left side - Asterisk and headline */}
        <div className="col-lg-7 mb-4 mb-lg-0">
          <div className="d-flex align-items-start">
            <div className="studio-asterisk me-4">
            <span className="star-icon"> * </span>
            </div>
            <div>
              <h1 className="display-5 fw-medium mb-3">
                {intro.titleLines.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < intro.titleLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
            </div>
          </div>
        </div>

        {/* Right side - Copy and CTA */}
        <div className="col-lg-5 d-flex flex-column justify-content-center">
          <p className="fs-6 mb-4">
            {intro.copy}
          </p>
          <a 
            href={intro.ctaHref} 
            className="cta-link text-decoration-none d-inline-flex align-items-center"
          >
            {intro.ctaText}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="currentColor"
              className="ms-2"
            >
              <path d="M8 1L15 8L8 15M15 8H1"/>
            </svg>
          </a>
        </div>
      </div>
      </div>

      {/* Work Grid Row */}
      <div className="container-fluid">
      <div className="row g-4">
        {images.map((image, index) => (
          <div key={index} className="col-lg-4">
            <div className="work-item">
              <img 
                src={image.src} 
                alt={image.alt}
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              
              {/* Overlay - Show on all images */}
              <div className="work-overlay">
                <div className="overlay-content">
                  <div className="years text-muted small mb-2">
                    {overlays[index].years}
                  </div>
                  <h3 className="h5 fw-bold mb-3">
                    {overlays[index].title}
                  </h3>
                  <p className="small text-muted mb-4">
                    {overlays[index].text}
                  </p>
                  <a 
                    href={overlays[index].buttonHref}
                    className="btn btn-dark btn-sm"
                  >
                    {overlays[index].buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      </div>
    </section>
  );
};

export default StudioIntroGrid;
