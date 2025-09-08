import React from 'react';
import HeroClientsHeader from '../components/clients/HeroClientsHeader';
import ClientsSection from '../components/clients/ClientsSection';
import ClientLogos from '../components/clients/ClientLogos';
import WhyWorkWithUs from '../components/clients/WhyWorkWithUs';
import { clientsData } from '../data/clientsData';
import { clientLogosData } from '../data/clientLogosData';
import { whyWorkWithUsData } from '../data/whyWorkWithUsData';

const Clients = () => {
  return (
    <div className="clients-page" style={{ overflowX: 'hidden', width: '100%' }}>
      <HeroClientsHeader 
        label="Unlimited power and customization possibilities"
        title="Valuable clients"
        bgImageUrl="https://www.themezaa.com/html/pofo/images/parallax-bg13.jpg"
      />
      
      <ClientsSection 
        title="WE'RE FORTUNATE TO WORK WITH FANTASTIC CLIENTS"
        subtitle="Building lasting partnerships with industry leaders and innovative brands that drive digital transformation."
        clients={clientsData}
      />
      
      <ClientLogos 
        title="OUR VALUABLE CLIENT"
        subtitle="We're proud to work with industry-leading brands and innovative companies that trust us with their digital presence."
        items={clientLogosData}
      />
      
      <WhyWorkWithUs 
        title="WHY WORK WITH US?"
        subtitle="We deliver exceptional results through our proven expertise, innovative solutions, and unwavering commitment to client success."
        features={whyWorkWithUsData}
      />
    </div>
  );
};

export default Clients;
