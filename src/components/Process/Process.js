import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Process.css';

const Process = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const toggleService = (serviceTitle) => {
    if (expandedService === serviceTitle) {
      // Closing animation
      setIsClosing(true);
      setTimeout(() => {
        setExpandedService(null);
        setIsClosing(false);
      }, 1200); // Match animation duration
    } else {
      // Opening animation
      setExpandedService(serviceTitle);
      setIsClosing(false);
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  // Reveal process cards and services texts on scroll
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('.process-card, .section-reveal, .text-reveal'));
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
    <div className="process-section">
      <div className="process-timeline">
        <div className="timeline-item">
          <div className="timeline-number">01</div>
        </div>
        <div className="timeline-line"></div>
        <div className="timeline-item">
          <div className="timeline-number">02</div>
        </div>
        <div className="timeline-line"></div>
        <div className="timeline-item">
          <div className="timeline-number">03</div>
        </div>
      </div>
      <div className="process-cards">
        <div className="process-card">
          <div className="card-header">
            <div className="card-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="card-images">
            <img src="https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png?scale-down-to=1024" alt="Process step 1" />
            <img src="https://framerusercontent.com/images/30SgNEcdoaIQjP9SX778MdNs1o.png?scale-down-to=512" alt="Process step 1" />
            <img src="https://framerusercontent.com/images/GsvUhduUuKpqabW4bstAZkXg2I.png?scale-down-to=512" alt="Process step 1" />
          </div>
          <div className="card-content">
            <h3>DISCOVER AND ANALYSIS</h3>
            <p>Discover opportunities and refine<br></br> strategies for decisions.</p>
          </div>
        </div>
        
        <div className="process-card">
          <div className="card-header">
            <div className="card-dots">
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="card-images">
            <img src="https://framerusercontent.com/images/mdHohhCEac2dy5qj6Hz8xLx3o.png?scale-down-to=512" alt="Process step 2" />
            <img src="https://framerusercontent.com/images/3l7cpJjfC1VLeRWLg54tkWCEA.png?scale-down-to=512" alt="Process step 2" />
            <img src="https://framerusercontent.com/images/dfa6kXeZNdp07AUexK86lC0Av1Q.png?scale-down-to=1024" alt="Process step 2" />
          </div>
          <div className="card-content">
            <h3>DESIGN AND IMPLEMENT</h3>
            <p>Design and implement solutions to <br></br>transform ideas.</p>
          </div>
        </div>
        
        <div className="process-card">
          <div className="card-header">
            <div className="card-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot active"></span>
            </div>
          </div>
          <div className="card-images">
            <img src="https://framerusercontent.com/images/aBDs4HUqRid8nL96E0hRXrwJBRg.png?scale-down-to=512" alt="Process step 3" />
            <img src="https://framerusercontent.com/images/uNKtEHPNTpmZAxn4jjdzE9O6BU.png?scale-down-to=512" alt="Process step 3" />
            <img src="https://framerusercontent.com/images/My7SNbGqP7RXWC7NQ2gn0m4yxl8.png?scale-down-to=1024" alt="Process step 3" />
          </div>
          <div className="card-content">
            <h3>DELIVER AND MONITOR</h3>
            <p>Ensure efficient execution and<br></br> performance tracking.</p>
          </div>
        </div>
      </div>
      {/* Portfolio Section Below Process Cards */}
      <div className="portfolio-section">
        <div className="portfolio-header-row">
          <span className="portfolio-index">02</span>
          <span className="portfolio-title">{'//'}PORTFOLIO</span>
          <span className="portfolio-years">2023 - 2025</span>
        </div>
        <div className="portfolio-main-row">
          <div className="portfolio-main-title">LATEST<br/>PORTFOLIO</div>
          <div className="portfolio-description">
            My creative spirit comes alive in<br></br> the digital realm. With nimble<br></br>
            fingers flying across the device.
          </div>
        </div>
        
        {/* Portfolio Items */}
        <div className="portfolio-items">
          <div className="portfolio-item">
            <div className="portfolio-image-container" onClick={() => window.open('https://clothingbrand1.netlify.app/', '_blank')}>
              <img 
                src={require('../../images/clothing-brand-screenshot.jpeg')}
                alt="Clothing Brand Website Screenshot" 
                className="portfolio-screenshot"
              />
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image-container real-estate" onClick={() => window.open('https://real-estate48.netlify.app/', '_blank')}>
              <img 
                src={require('../../images/real-estate-screenshot.jpeg')}
                alt="Real Estate Website Screenshot" 
                className="portfolio-screenshot"
              />
            </div>
          </div>
        </div>

        {/* Blog item centered below */}
        <div className="portfolio-items single-centered">
          <div className="portfolio-item">
            <div className="portfolio-image-container blog" onClick={() => window.open('https://blog211.netlify.app/', '_blank')}>
              <img 
                src={require('../../images/blog-screenshot.jpeg')}
                alt="Blog Website Screenshot" 
                className="portfolio-screenshot"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About Section Below Portfolio */}
      <section className="about-section section-reveal">
        <div className="about-header-row text-reveal delay-1">
          <span className="about-index">03</span>
          <span className="about-title">{'//'}WHO AM I</span>
          <span className="about-years">SINCE 2006</span>
        </div>
        <h1 className="about-main-title text-reveal delay-2">MORE ABOUT<br/><span className="about-name">SABHYA©</span></h1>
        <div className="about-photo section-reveal delay-3">
          <img
            src="/photo.png"
            alt="Sabhya portrait"
            className="about-photo-img"
          />
        </div>
        <h2 className="about-subtitle text-reveal delay-4">
          I'M AN INNOVATIVE DESIGNER AND DIGITAL ARTIST IN DEHRADUN.<br/>
          MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE<br></br> DESIGN SHINES THROUGH IN MY WORK.
        </h2>
        <p className="about-description text-reveal delay-5">
          I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be<br></br> unconventional, my dedication to the craft is unparalleled. I thrive on finding "unexpected solutions" and believe that<br></br> with the right perspective, design can elevate the human experience.
        </p>
        <button className="about-resume-btn section-reveal delay-5" onClick={() => navigate('/contact')}>GET IN TOUCH</button>
      </section>
      {/* Services Section Below About */}
      <section className="services-section section-reveal">
        <div className="services-top-row">
          <span className="services-index">04</span>
          <span className="services-title">{'//'}SERVICES</span>
          <span className="services-fast">FAST DELIVERY</span>
        </div>
        <div className="services-header-row">
          <div className="services-main-title text-reveal delay-1">PRO<br/>SERVICES</div>
          <div className="services-description text-reveal delay-2">
            Discover our range of services<br/>
            designed to elevate your brand<br/>
            to next level.
          </div>
        </div>
        
        <div className="services-list-container">
          <div className="services-list">
            {[
              {
                dots: 5,
                active: 1,
                title: 'Full Website Sprint',
                subtitle: 'EFFORTLESS EXECUTION, RAPID RESULTS',
              },
              {
                dots: 5,
                active: 2,
                title: 'Automated assistance',
                subtitle: 'SUGGESTS SMOOTH, INTEGRATED OPERATIONS',
              },
              {
                dots: 5,
                active: 3,
                title: 'Scriptwriting & Copywriting',
                subtitle: 'WRITING FOR SOCIAL MEDIA, AND THE MARKET',
              },
              {
                dots: 5,
                active: 4,
                title: 'React Development',
                subtitle: 'FULL WEBSITE DEVELOPMENT',
              },
              {
                dots: 5,
                active: 5,
                title: 'Web Design',
                subtitle: 'FIGMA FILE, FRAMER FILE',
              },
            ].map((service, idx) => (
              <div key={service.title}>
                <div className={`service-row${expandedService === service.title && !isClosing ? ' open' : ''}`} onClick={() => toggleService(service.title)}>
                  <div className="service-dots">
                    {Array.from({ length: service.dots }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          'service-dot' + (i + 1 === service.active ? ' active' : '')
                        }
                      ></span>
                    ))}
                  </div>
                  <div className="service-info">
                    <div className="service-title">{service.title}</div>
                    <div className="service-subtitle">{service.subtitle}</div>
                  </div>
                  <div className="service-chevron">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M7 10l5 5 5-5" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
                {expandedService === service.title && service.title === 'Full Website Sprint' && (
                  <div className={`service-dropdown ${isClosing ? 'closing' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-left">
                        <div className="cap-image-container">
                          <img 
                            src="https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg?scale-down-to=512" 
                            alt="Baseball Cap" 
                            className="cap-image"
                          />
                        </div>
                      </div>
                      <div className="dropdown-right">
                        <div className="feature-list">
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">
                              <span className="strikethrough">$2,999</span> PRICING STARTS AT $2,099
                            </span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">KICKOFF & PLANNING</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">DESIGN & PROTOTYPING</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">DEVELOPMENT & TESTING</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">LAUNCH & OPTIMIZATION</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {expandedService === service.title && service.title === 'Automated assistance' && (
                  <div className={`service-dropdown ${isClosing ? 'closing' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-left">
                        <div className="cap-image-container">
                          <img 
                            src="https://framerusercontent.com/images/shPlLwe662SqZNtKzOhZzw5yDGQ.png?scale-down-to=512" 
                            alt="Automation" 
                            className="cap-image"
                          />
                        </div>
                      </div>
                      <div className="dropdown-right">
                        <div className="feature-list">
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">
                              <span className="strikethrough">$1,299</span> PRICING STARTS AT $899
                            </span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">WORKFLOW ANALYSIS</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">AUTOMATION SETUP</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">INTEGRATION & TESTING</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">MONITORING & OPTIMIZATION</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {expandedService === service.title && service.title === 'Scriptwriting & Copywriting' && (
                  <div className={`service-dropdown ${isClosing ? 'closing' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-left">
                        <div className="cap-image-container">
                          <img 
                            src="https://framerusercontent.com/images/r8RAKCBlmpWm4GqoH0b17XIp94.jpg?scale-down-to=512" 
                            alt="Writing" 
                            className="cap-image"
                          />
                        </div>
                      </div>
                      <div className="dropdown-right">
                        <div className="feature-list">
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">
                              <span className="strikethrough">$1,399</span> PRICING STARTS AT $890
                            </span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">CONTENT STRATEGY</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">SCRIPT WRITING</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">COPYWRITING</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">EDITING & REVISION</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {expandedService === service.title && service.title === 'React Development' && (
                  <div className={`service-dropdown ${isClosing ? 'closing' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-left">
                        <div className="cap-image-container">
                          <img 
                            src="https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg?scale-down-to=512" 
                            alt="React Development" 
                            className="cap-image"
                          />
                        </div>
                      </div>
                      <div className="dropdown-right">
                        <div className="feature-list">
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">
                              <span className="strikethrough">$2,299</span> PRICING STARTS AT $1,492
                            </span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">REQUIREMENTS ANALYSIS</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">COMPONENT ARCHITECTURE</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">DEVELOPMENT & TESTING</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">DEPLOYMENT & MAINTENANCE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {expandedService === service.title && service.title === 'Web Design' && (
                  <div className={`service-dropdown ${isClosing ? 'closing' : ''}`}>
                    <div className="dropdown-content">
                      <div className="dropdown-left">
                        <div className="cap-image-container">
                          <img 
                            src="https://framerusercontent.com/images/dUsuLAKQsGG0c6R95PcAzs2Q0bc.png?scale-down-to=512" 
                            alt="Web Design" 
                            className="cap-image"
                          />
                        </div>
                      </div>
                      <div className="dropdown-right">
                        <div className="feature-list">
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">
                              <span className="strikethrough">$699</span> PRICING STARTS AT $478
                            </span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">UI/UX DESIGN</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">FIGMA PROTOTYPES</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">FRAMER IMPLEMENTATION</span>
                          </div>
                          <div className="feature-item">
                            <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="feature-text">DESIGN SYSTEM & ASSETS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="services-image-container section-reveal">
          <img 
            src="https://framerusercontent.com/images/gPqr7rZSe49I2LnZy4JermGDfw.jpg?scale-down-to=2048" 
            alt="Services" 
            className="services-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Process; 