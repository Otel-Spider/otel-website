import React from 'react';
import HeroEcommerce from '../components/ecommerce/HeroEcommerce/HeroEcommerce';
import FeatureIntro from '../components/ecommerce/FeatureIntro/FeatureIntro';
import FeatureGrid from '../components/ecommerce/FeatureGrid/FeatureGrid';
import BeliefsGrid from '../components/ecommerce/BeliefsGrid/BeliefsGrid';
import NumberedHighlights from '../components/ecommerce/NumberedHighlights/NumberedHighlights';
import NewsletterSignup from '../components/ecommerce/NewsletterSignup/NewsletterSignup';
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
    </div>
  );
};

export default EcommercePage;
