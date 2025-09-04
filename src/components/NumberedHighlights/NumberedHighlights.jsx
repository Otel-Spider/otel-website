import React from 'react';
import './NumberedHighlights.css';

const NumberedHighlights = ({ 
  items = [],
  accentColor = '#f6572f'
}) => {
  // Default highlights if none provided
  const defaultHighlights = [
    {
      no: '01',
      eyebrow: 'Save your time',
      title: 'Best Services',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    },
    {
      no: '02',
      eyebrow: 'All you need',
      title: 'Professional',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    },
    {
      no: '03',
      eyebrow: 'Dedicated Supports',
      title: 'Support',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    },
    {
      no: '04',
      eyebrow: 'Creative Thinking',
      title: 'Digital Marketing',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    },
  ];

  const highlights = items.length > 0 ? items : defaultHighlights;

  return (
    <section 
      className="numbered-section bg-dark text-light" 
      aria-label="Service highlights"
      style={{ '--accent': accentColor }}
    >
      <div className="container py-6">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0">
          {highlights.map((highlight, index) => (
            <div key={index} className="col">
              <div className="highlight-col px-4 py-5 text-center">
                <span 
                  className="highlight-no d-block" 
                  aria-hidden="true"
                >
                  {highlight.no}
                </span>
                <p className="highlight-eyebrow text-uppercase mb-1">
                  {highlight.eyebrow}
                </p>
                <h3 className="highlight-title text-uppercase mb-3">
                  {highlight.title}
                </h3>
                <p className="highlight-desc">
                  {highlight.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumberedHighlights;
