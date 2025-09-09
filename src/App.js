import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './components/Root';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TestimonialsPage from './pages/TestimonialsPage';
import EcommercePage from './pages/EcommercePage';
import Clients from './pages/Clients';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import './assets/css/shared/fonts.css';



const Projects = () => (
  <div className="container py-5">
    <h1>Featured Projects</h1>
    <p>Showcase of our best work.</p>
  </div>
);


const Portfolio = () => (
  <div className="container py-5">
    <h1>Portfolio</h1>
    <p>Our complete portfolio of projects.</p>
  </div>
);

const Blog = () => (
  <div className="container py-5">
    <h1>Blog</h1>
    <p>Latest insights and articles.</p>
  </div>
);

const News = () => (
  <div className="container py-5">
    <h1>News</h1>
    <p>Latest news and updates.</p>
  </div>
);

const Careers = () => (
  <div className="container py-5">
    <h1>Careers</h1>
    <p>Join our team and grow with us.</p>
  </div>
);

const ContactOld = () => (
  <div className="container py-5">
    <h1>Contact Us</h1>
    <p>Get in touch with our team.</p>
  </div>
);

const Privacy = () => (
  <div className="container py-5">
    <h1>Privacy Policy</h1>
    <p>Our privacy policy and data protection practices.</p>
  </div>
);

const Terms = () => (
  <div className="container py-5">
    <h1>Terms of Service</h1>
    <p>Terms and conditions for using our services.</p>
  </div>
);

const Sitemap = () => (
  <div className="container py-5">
    <h1>Sitemap</h1>
    <p>Complete site structure and navigation.</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="success-stories" element={<TestimonialsPage />} />
          <Route path="ecommerce" element={<EcommercePage />} />

          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="resources" element={<Resources />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="news" element={<News />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
