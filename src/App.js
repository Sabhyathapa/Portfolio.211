import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
// import verifiedBadge from './icons/verified-badge.png';
import Process from './components/Process/Process';
import Contact from './Contact';

function App() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isBrandAnimated, setIsBrandAnimated] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const togglePricing = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnnual(!isAnnual);
      setTimeout(() => {
        setIsAnimating(false);
      }, 200);
    }, 500);
  };

  const toggleFaq = (faqNumber) => {
    setActiveFaq(activeFaq === faqNumber ? null : faqNumber);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Trigger animation when user is near the bottom (within 100px)
      if (scrollPosition >= documentHeight - 100 && !isBrandAnimated) {
        setIsBrandAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBrandAnimated]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Minimal observer to reveal text-reveal/section-reveal/image-reveal globally
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

  // Removed scroll-reveal

  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage 
          isAnnual={isAnnual}
          isAnimating={isAnimating}
          activeFaq={activeFaq}
          isBrandAnimated={isBrandAnimated}
          currentTime={currentTime}
          togglePricing={togglePricing}
          toggleFaq={toggleFaq}
        />} />
      </Routes>
    </Router>
  );
}

// Separate component for the home page
function HomePage({ 
  isAnnual, 
  isAnimating, 
  activeFaq, 
  isBrandAnimated, 
  currentTime, 
  togglePricing, 
  toggleFaq 
}) {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="App">
      {/* SVG Symbol Definition */}
      <svg style={{ display: 'none' }}>
        <symbol id="svg11769809226" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </symbol>
        {/* Designer Icon Symbol Definition (Approximation) */}
        <symbol id="svgDesignerIcon" viewBox="0 0 24 24">
          {/* Approximated path for the star-like shape and checkmark */}
          <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 16.92l-6.27 3.36 1.18-6.88-5-4.87 6.91-1.01L12 0zm-1.5 13l-3-3 1.41-1.41 1.59 1.59 3.59-3.59L15 9.5l-5 5z"/>
        </symbol>
      </svg>

      <header className="App-header">
        {/* Clock */}
        <div className="clock-container">
          <div className="clock">
            <span className="clock-label">LOCAL/</span>
            <span className="clock-time">
              {currentTime.toLocaleTimeString('en-IN', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Asia/Kolkata'
              })}
            </span>
          </div>
          <button className="contact-now-btn" onClick={handleContactClick}>CONTACT NOW</button>
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

        {/* Large Title */}
        <div className="main-title">SABHY<span className="kern-a">A</span></div>

        {/* Bottom Info Section */}
        <div className="info-section">
          <div className="info-item">
            {/* Icon Placeholder */}
            <div className="icon">
              <svg style={{width: '100%', height: '100%'}}>
                <use href="#svg11769809226"></use>
              </svg>
            </div>
            <div className="text">
              BASED IN INDIA<br/>
              
            </div>
          </div>
          <div className="info-item">
            {/* Icon Placeholder */}
            <div className="icon">
              <svg className="designer-badge-svg" viewBox="0 0 90 90" aria-hidden="true">
                <polygon points="45,6.18 57.06,0 64.41,11.38 77.94,12.06 78.62,25.59 90,32.94 83.82,45 90,57.06 78.62,64.41 77.94,77.94 64.41,78.62 57.06,90 45,83.82 32.94,90 25.59,78.62 12.06,77.94 11.38,64.41 0,57.06 6.18,45 0,32.94 11.38,25.59 12.06,12.06 25.59,11.38 32.94,0" fill="#0096F1" />
                <polygon points="40.16,58.47 26.24,45.08 29.7,41.48 40.15,51.52 61.22,31.08 64.7,34.67" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="text">
              DIGITAL DESIGNER<br/>
              + DEVELOPER
            </div>
          </div>
        </div>

        {/* Portfolio Image */}
        <img 
          src="https://framerusercontent.com/images/QDcJB2OLe3UAxM2RM7hyw8eeCo.jpg?scale-down-to=2048" 
          alt="" 
          className="portfolio-image image-reveal-strong"
        />

        {/* Approach Section */}
        <div className="approach-section">
          <div className="approach-top-row">
            <span className="approach-index">01</span>
            <span className="approach-top">//APPROACH</span>
          </div>
          <div className="approach-main">I'M SABHYA THAPA BASED IN <br></br>DEHRADUN, INDIA.</div>
          <div className="approach-sub">I employed responsive design skills to maintain<br></br> consistency across all devices.</div>
          
        </div>
      </header>

      <div>
        <Process />
      </div>
      <div className="grey-voice-section">
        <div className="grey-voice-label grey-voice-label-left">05</div>
        <div className="grey-voice-label grey-voice-label-center">//VOICE OF SABHYA</div>
        <div className="grey-voice-label grey-voice-label-right">SINCE 2006</div>
        <div className="grey-voice-content">
          <h1 className="grey-voice-title text-reveal">
            A INDIA-BASED INDEPENDENT CREATIVE,<br/>
            SPECIALIZING IN HELPING BUSINESSES AND<br/>
            INDIVIDUALS TURN THEIR IDEAS INTO IMPACTFUL<br/>
            DEVELOPMENT AND DESIGN SOLUTIONS.
          </h1>
          <div className="grey-voice-signature">
            <img src="https://see.fontimg.com/api/rf5/92w7/MjJjN2Q5MmM4OTlkNGMxZGE2MmNlODA1MjVmZGFiMzIudHRm/U2FiaHlh/just-signature.png?r=fs&h=65&w=1000&fg=FFFFFF&bg=FFFFFF&tb=1&s=65" alt="Sabhya signature" style={{ maxWidth: '340px', width: '80%', height: 'auto', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))' }} />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section section-reveal">
        <div className="pricing-label pricing-label-left">06</div>
        <div className="pricing-label pricing-label-center">//PRICING</div>
        <div className="pricing-label pricing-label-right">BEST PLANS</div>
        <div className="pricing-content">
          <h1 className="pricing-title text-reveal delay-1">
            BIG OR SMALL?<br/>
            I HAVE A PLAN.
          </h1>
          <div className="pricing-toggle-container text-reveal delay-2">
            <span className="toggle-label">MONTHLY</span>
            <div className={`toggle-switch ${isAnnual ? 'active' : ''}`} onClick={togglePricing}>
              <div className="toggle-knob"></div>
            </div>
            <span className="toggle-label">ANNUAL</span>
          </div>
          
          {/* Pricing Cards */}
          <div className="pricing-cards section-reveal delay-3">
            <div className="pricing-card section-reveal delay-1">
              <div className="card-header">
                <div className="card-header-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className={`price ${isAnimating ? 'animating' : ''}`}>
                    ${isAnnual ? '799' : '499'}<span className="period">/{isAnnual ? 'YEAR' : 'MONTH'}</span>
                  </div>
                  <div className="plan-name">STARTER PLAN</div>
                  <div className="card-divider"></div>
                  <div className="plan-description">Our basic pricing plan is designed to offer<br></br> extra-ordinary value and features.</div>
                </div>
              </div>
              <div className="card-icon" onClick={handleContactClick}>+</div>
              
              {/* Small Container */}
              <div className="small-container">
                <div className="small-container-content">
                  {/* What's Included Section */}
                  <div className="card-features-container">
                    <h4 className="features-heading">What's included</h4>
                    <div className="card-features">
                      
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>UNLIMITED REQUESTS</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>UNLIMITED REVISIONS</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>PROJECT MANAGEMENT</span>
                      </div>
                      <div className="feature-item excluded">
                        <svg className="cross" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6l12 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>ACCESS TO ALL SERVICES</span>
                      </div>
                      <div className="feature-item excluded">
                        <svg className="cross" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6l12 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>PAUSE OR CANCEL ANYTIME</span>
                      </div>
                      <div className="feature-item excluded">
                        <svg className="cross" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6l12 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>EMAIL SUPPORT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Pricing Card */}
            <div className="pricing-card section-reveal delay-2">
              <div className="card-header">
                <div className="card-header-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className={`price ${isAnimating ? 'animating' : ''}`}>
                    ${isAnnual ? '999' : '799'}<span className="period">/{isAnnual ? 'YEAR' : 'MONTH'}</span>
                  </div>
                  <div className="plan-name">GROWTH PLAN</div>
                  <div className="card-divider"></div>
                  <div className="plan-description">Advanced features for growing businesses<br></br> with premium support and tools.</div>
                </div>
              </div>
              <div className="card-icon" onClick={handleContactClick}>+</div>
              
              {/* Small Container */}
              <div className="small-container">
                <div className="small-container-content">
                  {/* What's Included Section */}
                  <div className="card-features-container">
                    <h4 className="features-heading">What's included</h4>
                    <div className="card-features">
                      
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>UNLIMITED REQUESTS</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>UNLIMITED REVISIONS</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>PROJECT MANAGEMENT</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>ACCESS TO ALL SERVICES</span>
                      </div>
                      <div className="feature-item excluded">
                        <svg className="cross" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6l12 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>PAUSE OR CANCEL ANYTIME</span>
                      </div>
                      <div className="feature-item excluded">
                        <svg className="cross" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6l12 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>EMAIL SUPPORT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Pricing Card */}
            <div className="pricing-card section-reveal delay-3">
              <div className="card-header">
                <div className="card-header-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className={`price ${isAnimating ? 'animating' : ''}`}>
                    ${isAnnual ? '1499' : '1299'}<span className="period">/{isAnnual ? 'YEAR' : 'MONTH'}</span>
                  </div>
                  <div className="plan-name">PREMIUM PLAN</div>
                  <div className="card-divider"></div>
                  <div className="plan-description">Complete solution for large enterprises<br></br> with dedicated support and priority access.</div>
                </div>
              </div>
              <div className="card-icon" onClick={handleContactClick}>+</div>
              
              {/* Small Container */}
              <div className="small-container">
                <div className="small-container-content">
                  {/* What's Included Section */}
                  <div className="card-features-container">
                    <h4 className="features-heading">What's included</h4>
                    <div className="card-features">
                      
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>UNLIMITED REQUESTS</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>UNLIMITED REVISIONS</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>PROJECT MANAGEMENT</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>ACCESS TO ALL SERVICES</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>PAUSE OR CANCEL ANYTIME</span>
                      </div>
                      <div className="feature-item included">
                        <svg className="checkmark" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>EMAIL SUPPORT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pricing Image */}
          <div className="pricing-image-container section-reveal delay-4">
            <img 
              src="https://framerusercontent.com/images/edesi3zrngnOaaFS0ZO0deHO8W0.jpg?scale-down-to=2048" 
              alt="Pricing illustration" 
              className="pricing-image"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section section-reveal">
        <div className="faq-label faq-label-left">07</div>
        <div className="faq-label faq-label-center">//FAQ</div>
        <div className="faq-label faq-label-right">CONCERNS</div>
        <div className="faq-content">
          <h1 className="faq-title text-reveal delay-1">
            FREQUENTLY <br/>ASKED
            QUESTIONS
          </h1>
          
          <div className="faq-list section-reveal delay-2">
            <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaq(1)}>
              <div className="faq-number">01</div>
              <div className="faq-question">WHAT DO I NEED TO GET STARTED?</div>
              <div className="faq-icon">+</div>
              </div>
              <div className="faq-answer">
                You just need a clear vision of your project and basic requirements. I'll handle all the technical aspects including design, development, and deployment with unlimited revisions.
              </div>
            </div>
            
            <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaq(2)}>
              <div className="faq-number">02</div>
              <div className="faq-question">WHAT KIND OF CUSTOMIZATION IS AVAILABLE?</div>
              <div className="faq-icon">+</div>
              </div>
              <div className="faq-answer">
                Complete customization is available! From design elements, color schemes, and typography to functionality, features, and user experience with unlimited revisions.
              </div>
            </div>
            
            <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaq(3)}>
              <div className="faq-number">03</div>
              <div className="faq-question">LET ME KNOW MORE ABOUT MONEYBACK GUARANTEE?</div>
              <div className="faq-icon">+</div>
              </div>
              <div className="faq-answer">
                I offer a 100% money-back guarantee if you're not completely satisfied with the final result. Your satisfaction is my priority - if it's not perfect, you don't pay.
              </div>
            </div>
            
            <div className={`faq-item ${activeFaq === 4 ? 'active' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaq(4)}>
              <div className="faq-number">04</div>
              <div className="faq-question">DO I NEED TO KNOW HOW TO CODE?</div>
              <div className="faq-icon">+</div>
              </div>
              <div className="faq-answer">
                No coding knowledge required! I handle all the technical development, programming, and implementation. You just need to provide your ideas and requirements.
              </div>
            </div>
            
            <div className={`faq-item ${activeFaq === 5 ? 'active' : ''}`}>
              <div className="faq-header" onClick={() => toggleFaq(5)}>
              <div className="faq-number">05</div>
                <div className="faq-question">HOW LONG DOES A PROJECT TAKE?</div>
              <div className="faq-icon">+</div>
              </div>
              <div className="faq-answer">
                Project timelines vary based on complexity, typically ranging from 1-4 weeks. Simple websites take 1-2 weeks, while complex applications may take 3-4 weeks.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Let's Work Together Section */}
      <div className="work-together-section">
        <div className="work-together-content">
          <h1 className="work-together-title">
            LET'S WORK<br/>
            TOGETHER
          </h1>
          
          <button className="contact-button" onClick={handleContactClick}>
            CONTACT NOW
          </button>
          
          <div className="portrait-container section-reveal delay-2">
            <img 
              src="https://framerusercontent.com/images/u6Idk7qL4dVIYM1Dq4mj29hIpaM.jpg?scale-down-to=1024" 
              alt="Portrait" 
              className="portrait-image"
            />
          </div>
          
          <div className="bottom-info">
            <div className="location-info">
              BASED IN 
              INDIA
            </div>
            <div className="role-info">
              DIGITAL DESIGNER<br/>
              + DEVELOPER
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-section section-reveal">
        <div className="about-content">
          <div className="about-text text-reveal delay-1">
            BASED IN INDIA, I AM AN INNOVATIVE DESIGNER AND DEVELOPER. MY<br/>
            PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND<br/>
            INTUITIVE DESIGN IS EVIDENT IN MY WORK.
          </div>
          
          <div className={`brand-name ${isBrandAnimated ? 'brand-animated' : ''}`}>
            SABHYA
          </div>
          
          <div className="back-to-top text-reveal delay-3">
            <button
              type="button"
              className="back-to-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              BACK TO TOP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

