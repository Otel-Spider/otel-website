import React from 'react';
import HeroResourcesHeader from '../components/resources/HeroResourcesHeader';
import BlogGrid from '../components/resources/BlogGrid';

const Resources = () => {
  return (
    <div className="resources-page" style={{ overflowX: 'hidden', width: '100%' }}>
      <HeroResourcesHeader 
        label="Knowledge and tools for success"
        title="Resources"
        bgImageUrl="/images/services-bg.jpg"
      />
      
      <BlogGrid 
        title="Latest Stories"
        subtitle="Discover insights, ideas, and creativity."
      />
    </div>
  );
};

export default Resources;
