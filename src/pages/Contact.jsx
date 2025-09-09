import React from 'react';
import HeroContactHeader from '../components/contact/HeroContactHeader';
import HelpCtaSection from '../components/contact/HelpCtaSection';
import ContactTiles from '../components/contact/ContactTiles';
import ProjectInquiryForm from '../components/contact/ProjectInquiryForm';
import SocialLinksStrip from '../components/contact/SocialLinksStrip';

const Contact = () => {
  const handleStartProject = () => {
    // Handle button click - could open a modal, navigate to a form, etc.
    console.log('Start project clicked!');
    // Example: window.location.href = '/contact-form';
  };

  const handleFormSubmit = async (formData) => {
    // Handle form submission - could integrate with EmailJS, API, etc.
    console.log('Form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // You could replace this with actual API call:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  };


  const contactTilesData = [
    {
      id: 'address',
      icon: 'map-pin',
      title: 'Contact Address',
      lines: [
        '301 The Greenhouse, Custard',
        'Factory, London, E2 8DY.'
      ]
    },
    {
      id: 'talk',
      icon: 'message-circle',
      title: "Let's Talk",
      lines: [
        'Phone: 1-800-222-000',
        'Fax: 1-800-222-002'
      ]
    },
    {
      id: 'email',
      icon: 'mail',
      title: 'Email Us',
      lines: [
        'info@domain.com',
        'hire@domain.com'
      ]
    },
    {
      id: 'hours',
      icon: 'clock',
      title: 'Working Hours',
      lines: [
        'Mon–Sat: 9 AM – 11 PM',
        'Sunday: 10 AM – 6 PM'
      ]
    }
  ];

  return (
    <div className="contact-page" style={{ overflowX: 'hidden', width: '100%' }}>
      <HeroContactHeader 
        label="Get in touch with us"
        title="Contact"
        bgImageUrl="/images/services-bg.jpg"
      />
      
      
      
      <HelpCtaSection 
        kicker="WE WOULD LOVE TO WORK WITH YOU"
        title="How we can help"
        subtitle="We're here to help you bring your ideas to life. Let's discuss your project and create something amazing together."
        buttonText="Start your project"
        onButtonClick={handleStartProject}
      />
      <ContactTiles
        image={{ 
          src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop', 
          alt: 'Team discussing project at table',
          focal: 'center'
        }}
        tiles={contactTilesData}
      />
      
      <ProjectInquiryForm
        eyebrow="Tell us about your project"
        title="TELL US ABOUT YOUR PROJECT"
        intro="We're here to help you bring your ideas to life. Let's discuss your project and create something amazing together."
        budgetOptions={['< $5k', '$5k – $10k', '$10k – $25k', '$25k+']}
        onSubmit={handleFormSubmit}
      />
      
      <SocialLinksStrip
        title="ON SOCIAL NETWORKS"
        links={[
          { platform: 'facebook', href: 'https://facebook.com/yourpage', label: 'Follow us on Facebook' },
          { platform: 'twitter', href: 'https://twitter.com/yourhandle', label: 'Follow us on Twitter' },
          { platform: 'google', href: 'https://google.com', label: 'Follow us on Google' },
          { platform: 'dribbble', href: 'https://dribbble.com/yourprofile', label: 'Follow us on Dribbble' },
          { platform: 'linkedin', href: 'https://linkedin.com/company/yourcompany', label: 'Follow us on LinkedIn' }
        ]}
      />
    </div>
  );
};

export default Contact;
