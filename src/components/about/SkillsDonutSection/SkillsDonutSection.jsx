import React, { useEffect, useRef, useState } from 'react';
import './skills-donut.css';

const SkillsDonutSection = ({
  items = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      percent: 90,
      description: "Creative visual solutions with attention to detail and modern design principles."
    },
    {
      id: "web-design",
      title: "Web Design",
      percent: 96,
      description: "User-centered web design that combines aesthetics with functionality and performance."
    },
    {
      id: "photography",
      title: "Photography",
      percent: 95,
      description: "Professional photography skills capturing moments and creating compelling visual stories."
    },
    {
      id: "branding",
      title: "Branding",
      percent: 90,
      description: "Strategic brand identity development that builds recognition and trust."
    }
  ],
  imageSrc = '/images/parallax-bg28.jpg',
  pink = '#ff2f68',
  ringSize = 170,
  ringStroke = 4,
  overlay = 'rgba(0,0,0,.8)'
}) => {
  const [animatedItems, setAnimatedItems] = useState({});
  const [progressValues, setProgressValues] = useState({});
  const sectionRef = useRef(null);
  const itemRefs = useRef({});

  // Calculate SVG dimensions
  const viewBox = 122;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const gapAngle = 30; // degrees
  const startAngle = -90 - gapAngle / 2; // Start from top with gap

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedItems[entry.target.dataset.id]) {
            const itemId = entry.target.dataset.id;
            const item = items.find(item => item.id === itemId);
            
            if (item) {
              // Mark as animated
              setAnimatedItems(prev => ({ ...prev, [itemId]: true }));
              
              // Animate progress
              animateProgress(itemId, item.percent);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    // Observe all skill items
    Object.values(itemRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [items, animatedItems]);

  const animateProgress = (itemId, targetPercent) => {
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();
    const startPercent = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentPercent = startPercent + (targetPercent - startPercent) * easeOut;
      
      setProgressValues(prev => ({ ...prev, [itemId]: Math.round(currentPercent) }));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const getStrokeDashoffset = (itemId) => {
    const percent = progressValues[itemId] || 0;
    return circumference * (1 - percent / 100);
  };

  return (
    <section 
      ref={sectionRef}
      className="skills-section position-relative text-center"
      style={{
        '--pink': pink,
        '--overlay': overlay,
        backgroundImage: `url(${imageSrc})`
      }}
    >
      {/* Dark overlay */}
      <div className="skills-overlay"></div>
      
      {/* Content */}
      <div className="container py-7 position-relative">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
          {items.map((item) => (
            <div key={item.id} className="col">
              <div 
                ref={(el) => itemRefs.current[item.id] = el}
                data-id={item.id}
                className="d-flex flex-column align-items-center text-center text-white"
              >
                {/* Circular Progress Ring */}
                <div 
                  className="skills-donut-container"
                  style={{ width: ringSize, height: ringSize }}
                >
                  <svg
                    width={ringSize}
                    height={ringSize}
                    viewBox={`0 0 ${viewBox} ${viewBox}`}
                    className="skills-donut"
                  >
                    <g transform={`rotate(${startAngle} ${viewBox/2} ${viewBox/2})`}>
                      {/* Track circle */}
                      <circle
                        cx={viewBox/2}
                        cy={viewBox/2}
                        r={radius}
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth={ringStroke}
                      />
                      
                      {/* Progress circle */}
                      <circle
                        cx={viewBox/2}
                        cy={viewBox/2}
                        r={radius}
                        fill="none"
                        stroke="var(--pink)"
                        strokeWidth={ringStroke}
                        strokeLinecap="round"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={getStrokeDashoffset(item.id)}
                        style={{
                          transform: 'translateZ(0)',
                          willChange: 'stroke-dashoffset'
                        }}
                      />
                    </g>
                  </svg>
                  
                  {/* Center badge */}
                  <div className="skills-badge">
                    <span className="skills-percent">
                      {progressValues[item.id] || 0}%
                    </span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="fw-semibold mt-3 mb-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="small mt-2" style={{ maxWidth: '320px' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsDonutSection;
