import React, { useEffect, useRef, useState } from 'react';
import '../../../assets/css/about/FeaturesIndexedSection.css';

const FeaturesIndexedSection = ({
  items = [
    { 
      id: 'f1', 
      index: 1, 
      title: 'I am creative', 
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard text.' 
    },
    { 
      id: 'f2', 
      index: 2, 
      title: 'I am naughty', 
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard text.' 
    },
    { 
      id: 'f3', 
      index: 3, 
      title: 'I am business men', 
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard text.' 
    },
    { 
      id: 'f4', 
      index: 4, 
      plus: true, 
      title: 'I am hungry', 
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard text.' 
    },
  ],
  mutedColor = '#d9d9d9',
  divider = true,
  animate = true
}) => {
  const [animatedItems, setAnimatedItems] = useState({});
  const [countValues, setCountValues] = useState({});
  const itemRefs = useRef({});

  useEffect(() => {
    if (!animate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedItems[entry.target.dataset.id]) {
            const itemId = entry.target.dataset.id;
            const item = items.find(item => item.id === itemId);
            
            if (item) {
              // Mark as animated
              setAnimatedItems(prev => ({ ...prev, [itemId]: true }));
              
              // Animate count-up
              animateCount(itemId, item.index);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all feature items
    Object.values(itemRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [items, animatedItems, animate]);

  const animateCount = (itemId, targetValue) => {
    const duration = 1000; // 1 second
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (targetValue - startValue) * easeOut;
      
      setCountValues(prev => ({ ...prev, [itemId]: Math.round(currentValue) }));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const formatIndex = (item) => {
    const value = countValues[item.id] || (animate ? 0 : item.index);
    const formatted = value.toString().padStart(2, '0');
    return item.plus ? `${formatted}+` : formatted;
  };

  return (
    <section 
      className="features-indexed position-relative py-6"
      style={{
        '--muted': mutedColor,
        '--divider': divider ? 'rgba(0,0,0,.08)' : 'transparent'
      }}
    >
      <div className="container-fluid px-0">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`feature-col position-relative col px-4 py-5 text-center d-flex flex-column align-items-center justify-content-start ${divider ? 'has-divider' : ''}`}
            >
              <div 
                ref={(el) => itemRefs.current[item.id] = el}
                data-id={item.id}
                className={`mb-2 reveal ${animatedItems[item.id] ? 'in-view' : ''}`}
              >
                <div className="feature-index">
                  {formatIndex(item)}
                </div>
                <h5 className="fw-semibold text-dark mb-2">
                  {item.title}
                </h5>
                <p className="text-secondary lh-base mx-auto" style={{ maxWidth: '38ch' }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesIndexedSection;
