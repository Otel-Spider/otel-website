import React from 'react';
import HeroEcommerce from '../components/HeroEcommerce/HeroEcommerce';
import FeatureIntro from '../components/FeatureIntro/FeatureIntro';
import FeatureGrid from '../components/FeatureGrid/FeatureGrid';
import BeliefsGrid from '../components/BeliefsGrid/BeliefsGrid';
import NumberedHighlights from '../components/NumberedHighlights/NumberedHighlights';
import NewsletterSignup from '../components/NewsletterSignup/NewsletterSignup';
import './EcommercePage.css';

const EcommercePage = () => {
  return (
    <div className="ecommerce-page">
      <HeroEcommerce />
      
      {/* Feature Intro Section */}
      <FeatureIntro />
      
      {/* Feature Grid Section */}
      <FeatureGrid />
      
                        {/* Beliefs Grid Section */}
                  <BeliefsGrid />
                  
                  {/* Numbered Highlights Section */}
                  <NumberedHighlights />
                  
                  {/* Newsletter Signup Section */}
                  <NewsletterSignup />
                  
                  {/* Next Section */}
                  <section id="next-section" className="next-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12 text-center">
              <h2>Next Section</h2>
              <p>This is the next section that the scroll button navigates to.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;
