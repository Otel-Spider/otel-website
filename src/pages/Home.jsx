import React from 'react';
import Hero from '../components/home/Hero';
import ReturnOnExperience from '../components/home/ReturnOnExperience';
import ServicesShowcase from '../components/home/ServicesShowcase';
import TrustedSlider from '../components/home/TrustedSlider';
import GrowthPath from '../components/home/GrowthPath';
import SuccessStoriesSlider from '../components/home/SuccessStoriesSlider';
import FunFacts from '../components/home/FunFacts';
import TeamShowcase from '../components/home/TeamShowcase';
import CtaBuildTogether from '../components/home/CtaBuildTogether';

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
      <TeamShowcase />
      <CtaBuildTogether />
    </div>
  );
};

export default Home;
