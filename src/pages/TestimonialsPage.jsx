import React from 'react';
import PageHeader from '../components/succestory/PageHeader/PageHeader';
import TestimonialCarousel from '../components/succestory/TestimonialCarousel/TestimonialCarousel';

const TestimonialsPage = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face',
      quote: "Working with this team was an absolute pleasure. They delivered beyond our expectations and created a stunning website that perfectly represents our brand. The attention to detail and creative solutions they provided were exceptional.",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
      quote: "The level of professionalism and creativity exceeded all our expectations. They transformed our vision into reality with a website that not only looks amazing but also performs flawlessly. Highly recommended!",
      author: "Michael Chen"
    },
    {
      id: 3,
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face',
      quote: "From concept to launch, the entire process was smooth and collaborative. They listened to our needs, provided innovative solutions, and delivered a product that has significantly improved our online presence.",
      author: "Emily Rodriguez"
    },
    {
      id: 4,
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
      quote: "Outstanding work quality and exceptional customer service. They went above and beyond to ensure our satisfaction. The final result is a beautiful, functional website that perfectly captures our brand essence.",
      author: "David Thompson"
    },
    {
      id: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face',
      quote: "The team's expertise in design and development is unmatched. They created a website that not only meets our current needs but also anticipates future growth. The user experience is intuitive and engaging.",
      author: "Lisa Wang"
    },
    {
      id: 6,
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face',
      quote: "Professional, creative, and reliable. They delivered our project on time and within budget, exceeding all expectations. The website they created has received countless compliments from our customers.",
      author: "Robert Martinez"
    }
  ];

  // Breadcrumbs for the page header
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Success Stories' }
  ];

  return (
    <div className="testimonials-page">
      {/* Page Header */}
      <PageHeader
        title="Success Stories"
        subtitle="Customer stories & feedback that inspire"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="/images/services-bg.jpg"
      />

      {/* Testimonial Carousel */}
      <TestimonialCarousel
        backgroundImageUrl="/images/parallax-bg28.jpg"
        overlayOpacity={0.7}
        testimonials={testimonials}
        autoPlay={true}
        autoPlayDelay={8000}
      />
    </div>
  );
};

export default TestimonialsPage;
