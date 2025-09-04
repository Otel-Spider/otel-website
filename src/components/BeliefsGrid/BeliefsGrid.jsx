import React from 'react';
import './BeliefsGrid.css';

const BeliefsGrid = ({ 
  eyebrow = "TECHNOLOGY EXPERT ANALYSIS",
  title = "We provide high quality and cost effective offshore web development services",
  items = []
}) => {
  const [touchActiveCard, setTouchActiveCard] = React.useState(null);
  
  // Default beliefs if none provided
  const defaultBeliefs = [
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=460&fit=crop",
      title: "We believe in creativity",
      text: "Our team thrives on innovative thinking and creative problem-solving. We transform complex challenges into elegant, user-friendly solutions that exceed expectations and drive business growth."
    },
    {
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=460&fit=crop",
      title: "We believe in quality",
      text: "Quality is not just a goal—it's our foundation. Every line of code, every design element, and every user interaction is crafted with precision and attention to detail.",
      defaultOpen: true // middle card overlay visible by default
    },
    {
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=460&fit=crop",
      title: "We believe in relation",
      text: "Building lasting partnerships is at the heart of our success. We invest in understanding your business, goals, and vision to deliver solutions that truly matter."
    }
  ];

  const beliefs = items.length > 0 ? items : defaultBeliefs;

  // Touch event handlers for mobile
  const handleTouchStart = (index) => {
    setTouchActiveCard(index);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setTouchActiveCard(null), 3000); // Hide after 3 seconds
  };

  return (
    <section className="beliefs-grid py-5 py-lg-6">
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <p className="eyebrow text-uppercase fw-semibold mb-2">
            {eyebrow}
          </p>
          <h2 className="display-5 fw-bold mb-0">
            {title}
          </h2>
        </div>

        <div className="row g-4">
          {beliefs.map((belief, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div 
                className={`belief-card ${touchActiveCard === index ? 'touch-active' : ''}`}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
              >
                <img 
                  src={belief.img} 
                  alt="" 
                  className="belief-img"
                  loading="lazy"
                  aria-hidden="true"
                />
                
                {/* Bottom Label (visible by default on side cards) */}
                {!belief.defaultOpen && (
                  <div className="belief-label">
                    {belief.title}
                  </div>
                )}
                
                {/* Full Overlay */}
                <div className={`belief-overlay ${belief.defaultOpen ? 'default-open' : ''}`}>
                  <div className="overlay-inner">
                    <h5 className="overlay-title">{belief.title}</h5>
                    <p className="overlay-text">{belief.text}</p>
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

export default BeliefsGrid;
