import React from 'react';
import '../../../assets/css/about/quote-education.css';

const QuoteEducation = ({ 
  quote = {
    lead: "Unity is strength...",
    sub: "When there is teamwork and collaboration, wonderful things can be achieved.",
    author: "Mattie Stepanek"
  },
  image = {
    src: '/images/about-me-3.jpg',
    alt: 'Portrait image'
  },
  items = [
    {
      number: "01",
      title: "University of Design",
      subtitle: "Bachelor of Arts 1990",
      text: "Studied graphic design and visual communication, focusing on user experience and digital media."
    },
    {
      number: "02", 
      title: "Tech Institute",
      subtitle: "Master of Science 1995",
      text: "Advanced studies in computer science and software engineering with emphasis on web technologies."
    },
    {
      number: "03",
      title: "Business School",
      subtitle: "MBA 2000", 
      text: "Master of Business Administration with focus on digital transformation and innovation management."
    },
    {
      number: "04",
      title: "Creative Academy",
      subtitle: "Professional Certificate 2005",
      text: "Specialized training in creative direction and brand strategy for digital platforms."
    }
  ]
}) => {
  return (
    <section className="quote-education container-fluid px-0 py-5 py-lg-6">
      {/* Quote Header Block */}
      <div className="container text-center mb-5">
        <div className="qe-quote-icon mb-3">
        <i className="fas fa-quote-left quote-icon" style={{ fontSize: '40px' }}></i>
        </div>
        
        <h2 className="qe-lead display-6 fw-bold mb-1">
          {quote.lead}
        </h2>
        
        <p className="qe-sub text-dark mb-3">
          {quote.sub}
        </p>
        
        <p className="qe-author text-uppercase letter-spacing-1 text-muted">
          {quote.author}
        </p>
      </div>

      {/* Content Row */}
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          {/* Left Column - Image */}
          <div className="col-lg-6">
            <div className="ratio ratio-16x9 h-100">
              <img 
                src={image.src} 
                alt={image.alt}
                className="qe-image"
              />
            </div>
          </div>

          {/* Right Column - Education List */}
          <div className="col-lg-6 bg-light px-4 px-lg-5 d-flex align-items-center">
            <div className="row row-cols-1 row-cols-md-2 g-0 w-100">
              {items.map((item, index) => (
                <div key={index} className="col px-1 mb-4">
                  <div className="education-item d-flex flex-column flex-md-row text-center text-md-start">
                    <div className="qe-number display-6 fw-light text-muted opacity-50 me-md-4 mb-3 mb-md-0" style={{ flexShrink: 0 }}>
                      {item.number}
                    </div>
                    
                    <div className="education-content">
                      <h3 className="qe-item-title fs-5 fw-semibold mb-1">
                        {item.title}
                      </h3>
                      
                      <p className="qe-item-sub text-uppercase text-muted small mb-2">
                        {item.subtitle}
                      </p>
                      
                      <p className="text-muted small">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteEducation;
