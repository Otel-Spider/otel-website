import React, { useEffect, useRef } from 'react';
import './socialLinksStrip.css';

const SocialLinksStrip = ({ 
  title = "ON SOCIAL NETWORKS", 
  links = [], 
  className = "" 
}) => {
  // Default social links if none provided
  const defaultLinks = [
    { platform: 'facebook', href: 'https://facebook.com/yourpage', label: 'Follow us on Facebook' },
    { platform: 'twitter', href: 'https://twitter.com/yourhandle', label: 'Follow us on Twitter' },
    { platform: 'google', href: 'https://google.com', label: 'Follow us on Google' },
    { platform: 'dribbble', href: 'https://dribbble.com/yourprofile', label: 'Follow us on Dribbble' },
    { platform: 'linkedin', href: 'https://linkedin.com/company/yourcompany', label: 'Follow us on LinkedIn' }
  ];

  const socialLinks = links.length > 0 ? links : defaultLinks;
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all elements with .reveal class
    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    if (revealElements) {
      revealElements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      if (revealElements) {
        revealElements.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  // Icon mapping for Font Awesome icons
  const getIconClass = (platform) => {
    const iconMap = {
      facebook: 'fab fa-facebook-f',
      twitter: 'fab fa-twitter',
      google: 'fab fa-google',
      dribbble: 'fab fa-dribbble',
      linkedin: 'fab fa-linkedin-in'
    };
    return iconMap[platform] || 'fab fa-link';
  };

  // Brand color mapping for hover effects
  const getBrandColor = (platform) => {
    const colorMap = {
      facebook: '#1877F2',
      twitter: '#1DA1F2',
      google: '#EA4335',
      dribbble: '#EA4C89',
      linkedin: '#0A66C2'
    };
    return colorMap[platform] || '#1f1f1f';
  };

  return (
    <section ref={sectionRef} className={`social-links-strip ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="social-eyebrow reveal">{title}</div>
            <div className="social-buttons-container reveal delay-1">
              {socialLinks.map((link, index) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  aria-label={link.label || `Follow us on ${link.platform}`}
                  title={link.platform}
                  style={{
                    '--brand-color': getBrandColor(link.platform)
                  }}
                >
                  <i className={getIconClass(link.platform)} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinksStrip;

// Example usage:
/*
<SocialLinksStrip
  title="ON SOCIAL NETWORKS"
  links={[
    { platform: 'facebook', href: 'https://facebook.com/yourpage' },
    { platform: 'twitter', href: 'https://twitter.com/yourhandle' },
    { platform: 'google', href: 'https://google.com' },
    { platform: 'dribbble', href: 'https://dribbble.com/yourprofile' },
    { platform: 'linkedin', href: 'https://linkedin.com/company/yourcompany' },
  ]}
/>
*/
