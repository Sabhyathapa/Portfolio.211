import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBrandAnimated, setIsBrandAnimated] = useState(false);
  const navigate = useNavigate();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("C_gyOWLTXxeIbj5nP");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_4z4gbua',
        'template_wdrfgql',
        {
          to_email: 'thapasabhya5@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Trigger animation immediately when component mounts
    const timer = setTimeout(() => {
      setIsBrandAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Local reveal observer for Contact page elements
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('.text-reveal, .section-reveal, .image-reveal-strong'));
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page">
      {/* Clock and Navigation */}
      <div className="contact-header">
        <div className="contact-clock">
          <span className="clock-label">LOCAL/</span>
          <span className="clock-time">{currentTime.toLocaleTimeString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}</span>
        </div>
        
        {/* Dots */}
        <div className="dots-container">
          <div className="dots-left">
            <div className="hero-dot"></div>
            <div className="hero-dot"></div>
          </div>
          <div className="dots-right">
            <div className="hero-dot"></div>
            <div className="hero-dot"></div>
          </div>
        </div>
        
        <button className="contact-back-btn" onClick={handleBackClick}>
          BACK
        </button>
      </div>

      <div className="contact-container">
        {/* Left Section - Contact Form */}
        <div className="contact-form-section">
          <div className="contact-content">
            <h1 className="contact-main-title">RING A BELL!</h1>
            <p className="contact-description">
              Reach out and let's create something amazing together. Let's achieve greatness.
            </p>
            
            <h2 className="contact-form-title">FILL THIS FORM OUT</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="submit-success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="submit-error">
                ❌ Failed to send message. Please try again or contact me directly.
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Now'}
              </button>
            </form>
            
            {/* Gmail Contact */}
            <div className="gmail-contact">
              <p className="gmail-label">Or reach me directly at:</p>
              <a 
                href="mailto:thapasabhya5@gmail.com" 
                className="gmail-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=thapasabhya5@gmail.com', '_blank');
                }}
              >
                thapasabhya5@gmail.com
              </a>
              <p className="gmail-label">Phone / WhatsApp:</p>
              <a
                href="tel:+917300687407"
                className="gmail-link"
              >
                +91 7300687407
              </a>
              <p className="gmail-label">WhatsApp Chat:</p>
              <a
                href="https://wa.me/917300687407?text=Hi%20Sabhya%2C%20I'm%20interested%20in%20working%20with%20you."
                className="gmail-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Portrait Image */}
        <div className="contact-portrait-section section-reveal delay-2">
          <div className="portrait-image">
            <img 
              src="https://framerusercontent.com/images/gPqr7rZSe49I2LnZy4JermGDfw.jpg?scale-down-to=2048" 
              alt="Contact Portrait" 
            />
          </div>
          
        </div>
      </div>

      {/* Brand Name at Bottom */}
      <div className="contact-brand">
        <h1 className={`brand-text ${isBrandAnimated ? 'brand-animated' : ''}`}>SABHYA</h1>
      </div>
    </div>
  );
};

export default Contact;
