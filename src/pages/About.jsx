import React from 'react';
import HeroAbout from '../components/about/HeroAbout';
import StudioIntroGrid from '../components/about/StudioIntroGrid';
import QuoteEducation from '../components/about/QuoteEducation';
import ServicesGrid from '../components/about/ServicesGrid';
import SkillsDonutSection from '../components/about/SkillsDonutSection';
import FeaturesIndexedSection from '../components/FeaturesIndexedSection';
import SocialShowcase from '../components/about/SocialShowcase';

const About = () => {
  return (
    <div className="about-page" style={{ overflowX: 'hidden', width: '100%' }}>
      <HeroAbout imageSrc="/images/about-me-2.jpg" />
      <StudioIntroGrid />
      <QuoteEducation />
      <ServicesGrid />
      <SkillsDonutSection imageSrc="/images/parallax-bg28.jpg" />
      <FeaturesIndexedSection 
        mutedColor="#d9d9d9"
        divider={true}
        animate={true}
      />
      <SocialShowcase 
        imageSrc="/images/parallax-bg30.jpg"
        overlay="rgba(255,255,255,0.85)"
      />
    </div>
  );
};

export default About;
