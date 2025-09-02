import React, { useEffect, useRef } from 'react';
import '../../../assets/css/about/SocialShowcase.css';

const SocialShowcase = ({
  title = "ON SOCIAL NETWORKS",
  imageSrc = "/images/parallax-bg30.jpg",
  overlay = "rgba(255,255,255,0.85)",
  socialLinks = [
    {
      id: 'facebook',
      name: 'Facebook',
      url: '#',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      hoverColor: '#1877f2'
    },
    {
      id: 'x',
      name: 'X',
      url: '#',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      hoverColor: '#000000'
    },
    {
      id: 'google',
      name: 'Google+',
      url: '#',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm5.926 13.5h-4.426v4.426h-3v-4.426H6.074v-3h4.426V6.074h3v4.426h4.426v3z"/>
        </svg>
      ),
      hoverColor: '#db4437'
    },
    {
      id: 'dribbble',
      name: 'Dribbble',
      url: '#',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.926 4.251c-1.31 2.947-3.547 5.049-6.251 6.301 1.977-1.758 3.48-4.199 4.251-7.301H21.926zM12 2.25c1.892 0 3.633.549 5.125 1.469-1.148 3.301-3.125 6.199-5.125 8.301-2-2.102-3.977-5-5.125-8.301C8.367 2.799 10.108 2.25 12 2.25zM2.074 4.25h4.926c-.771 3.102-2.274 5.543-4.251 7.301C2.621 9.3 2.074 7.142 2.074 4.25zM2.074 12c0 2.892.547 5.05 2.675 7.051 1.977-1.758 3.48-4.199 4.251-7.301H2.074zM12 21.75c-1.892 0-3.633-.549-5.125-1.469 1.148-3.301 3.125-6.199 5.125-8.301 2 2.102 3.977 5 5.125 8.301C15.633 21.201 13.892 21.75 12 21.75zm9.926-9.75h-4.926c.771-3.102 2.274-5.543 4.251-7.301C21.379 14.7 21.926 16.858 21.926 19.75V12z"/>
        </svg>
      ),
      hoverColor: '#ea4c89'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      hoverColor: '#0077b5'
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
    <section 
      ref={sectionRef}
      className="social-showcase position-relative"
      style={{
        backgroundImage: `url(${imageSrc})`,
        '--overlay': overlay
      }}
    >
      {/* Background overlay */}
      <div className="social-overlay"></div>
      
      {/* Content */}
      <div className="social-content">
        <div className="container text-center">
          <h3 className="social-title text-uppercase letter-spacing-2 mb-4 reveal">
            {title}
          </h3>
          
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.url}
                className={`social-icon-link reveal delay-${index + 1}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${link.name}`}
                style={{ '--hover-color': link.hoverColor }}
              >
                <div className="social-icon">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialShowcase;
