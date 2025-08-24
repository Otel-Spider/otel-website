import React from 'react';
import Hero from '../components/Hero';
import ReturnOnExperience from '../components/ReturnOnExperience';
import ServicesShowcase from '../components/ServicesShowcase';
import TrustedSlider from '../components/TrustedSlider';
import GrowthPath from '../components/GrowthPath';
import SuccessStoriesSlider from '../components/SuccessStoriesSlider';
import Testimonials from '../components/Testimonials';
import FunFacts from '../components/FunFacts';
import TeamShowcase from '../components/TeamShowcase';
import CtaBuildTogether from '../components/CtaBuildTogether';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ReturnOnExperience />
      <ServicesShowcase />
      <TrustedSlider />
      <GrowthPath />
      <SuccessStoriesSlider />
      <FunFacts />
      <Testimonials />
      <TeamShowcase />
      <CtaBuildTogether />
    </div>
  );
};

export default Home;
