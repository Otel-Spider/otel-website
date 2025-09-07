import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setIsInvalid(true);
      setMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setIsInvalid(true);
      setMessage('Please enter a valid email address.');
      return;
    }

    // Simulate API call
    setLoading(true);
    setIsInvalid(false);
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Success
      setMessage('Thanks for subscribing!');
      setEmail('');
      setIsInvalid(false);
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      setIsInvalid(true);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear validation state when user starts typing
    if (isInvalid && value.trim()) {
      setIsInvalid(false);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <section className="newsletter-section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="display-6 fw-semibold mb-3">
              Subscribe to our newsletter
            </h2>
            <p className="text-muted mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br className="d-none d-md-inline" />
              Lorem Ipsum has been the standard dummy text.
            </p>

            {/* Input group */}
            <form className="newsletter-form" noValidate onSubmit={handleSubmit}>
              <div className={`input-group input-group-lg newsletter-input shadow-sm ${isInvalid ? 'is-invalid' : ''}`}>
                <label htmlFor="newsletterEmail" className="visually-hidden">
                  Email Address
                </label>
                <input
                  id="newsletterEmail"
                  type="email"
                  className={`form-control border-0 rounded-start-pill ps-4 ${isInvalid ? 'is-invalid' : ''}`}
                  placeholder="* Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  onKeyDown={handleKeyDown}
                  aria-invalid={isInvalid}
                  aria-describedby="newsletterHelp"
                  required
                  disabled={loading}
                />
                <button
                  className="btn btn-link rounded-end-pill px-4 newsletter-submit"
                  type="submit"
                  disabled={loading}
                  aria-label="Subscribe to newsletter"
                  title="Subscribe to newsletter"
                >
                  {loading ? (
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                  )}
                </button>
              </div>

              {/* Validation / success message */}
              <div 
                id="newsletterHelp"
                className={`form-text mt-3 ${isInvalid ? 'text-danger' : message ? 'text-success' : 'text-muted'}`} 
                aria-live="polite"
              >
                {message || (
                  <>
                    * We don't share your personal info with anyone. Check out our{' '}
                    <a href="/privacy" className="link-underline">Privacy Policy</a> for more information.
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
