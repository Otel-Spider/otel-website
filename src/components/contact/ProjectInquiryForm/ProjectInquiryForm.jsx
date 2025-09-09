import React, { useState, useEffect, useRef } from 'react';
import './projectInquiryForm.css';

const ProjectInquiryForm = ({
  title = "TELL US ABOUT YOUR PROJECT",
  intro = "We're here to help you bring your ideas to life. Let's discuss your project and create something amazing together.",
  budgetOptions = ['< $5k', '$5k – $10k', '$10k – $25k', '$25k+'],
  onSubmit,
  className = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Unobserve after first reveal to run once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all elements with .reveal class
    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    if (revealElements) {
      revealElements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      if (revealElements) {
        revealElements.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - just log to console
        console.log('Form submitted:', formData);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        budget: '',
        description: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className={`project-inquiry-form py-6 py-lg-8 ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="form-content text-center">
              <h2 className="form-title reveal delay-1">
                {title}
              </h2>
              <p className="form-intro reveal delay-2">
                {intro}
              </p>

              <form onSubmit={handleSubmit} className="inquiry-form reveal delay-3">
                {/* Row 1: Name and Phone */}
                <div className="row mb-4">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Your full name"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <small id="name-error" className="text-danger">
                          {errors.name}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email and Budget */}
                <div className="row mb-4">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="your.email@example.com"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <small id="email-error" className="text-danger">
                          {errors.email}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label htmlFor="budget" className="form-label">
                        Select your budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="form-control"
                      >
                        <option value="">Choose budget range</option>
                        {budgetOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Row 3: Description */}
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="description" className="form-label">
                        Describe your project
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="6"
                        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-dark btn-lg submit-btn"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'SEND MESSAGE'
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3" role="alert">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInquiryForm;
