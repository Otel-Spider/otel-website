import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-section">
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Welcome to OTEL Website
              </h1>
              <p className="lead mb-4">
                Your trusted technology partner for innovative solutions and digital transformation.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-light btn-lg">Get Started</button>
                <button className="btn btn-outline-light btn-lg">Learn More</button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src="/logo-light.svg" 
                alt="OTEL Logo" 
                className="img-fluid"
                style={{ maxHeight: '200px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Our Services</h2>
              <p className="lead text-muted">Comprehensive technology solutions for your business</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-code fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Custom websites and web applications built with modern technologies.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Mobile Apps</h5>
                  <p className="card-text">Native and cross-platform mobile applications for iOS and Android.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-cogs fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Technology Consulting</h5>
                  <p className="card-text">Expert guidance on technology strategy and digital transformation.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fas fa-cloud fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">Cloud Solutions</h5>
                  <p className="card-text">Scalable cloud infrastructure and migration services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">About OTEL Website</h2>
              <p className="lead mb-4">
                We are a team of passionate technologists dedicated to helping businesses succeed in the digital age.
              </p>
              <p className="mb-4">
                With years of experience in web development, mobile apps, and technology consulting, 
                we provide comprehensive solutions that drive growth and innovation.
              </p>
              <button className="btn btn-primary btn-lg">Learn More About Us</button>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6 mb-3">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">100+</h3>
                    <p className="text-muted">Projects Completed</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">50+</h3>
                    <p className="text-muted">Happy Clients</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">5+</h3>
                    <p className="text-muted">Years Experience</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">24/7</h3>
                    <p className="text-muted">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
