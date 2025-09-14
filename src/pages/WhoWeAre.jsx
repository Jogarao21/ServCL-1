import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './WhoWeAre.css';

const WhoWeAre = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [textIndex, setTextIndex] = useState(0);
  
  
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const impactRef = useRef(null);
  const visionRef = useRef(null);

  // Mouse tracking for massive parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Text rotation effect
  useEffect(() => {
    const texts = ['Leading', 'Innovative', 'Trusted', 'Premier'];
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = [heroRef, storyRef, impactRef, visionRef];
    elements.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      elements.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const rotatingTexts = ['Leading', 'Innovative', 'Trusted', 'Premier'];

  return (
    <div className="servcl-universe-epic">
      
      {/* MASSIVE Floating Elements */}
      <div className="servcl-cosmic-giants">
        <div 
          className="servcl-giant-sphere servcl-sphere-alpha"
          style={{
            transform: `translate3d(${mousePosition.x * 100}px, ${mousePosition.y * 50 + scrollY * 0.5}px, 0) rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`
          }}
        ></div>
        <div 
          className="servcl-giant-sphere servcl-sphere-beta"
          style={{
            transform: `translate3d(${mousePosition.x * -80}px, ${mousePosition.y * -60 + scrollY * -0.3}px, 0) rotateX(${mousePosition.y * -15}deg)`
          }}
        ></div>
        <div 
          className="servcl-giant-sphere servcl-sphere-gamma"
          style={{
            transform: `translate3d(${mousePosition.x * 120}px, ${mousePosition.y * 80 + scrollY * 0.2}px, 0) rotateZ(${scrollY * 0.1}deg)`
          }}
        ></div>
      </div>

      {/* EPIC Hero Section */}
      <section 
        ref={heroRef}
        id="hero"
        className={`servcl-hero-colossus ${isVisible.hero ? 'servcl-colossus-awakened' : ''}`}
      >
        <div className="servcl-colossus-container">
          
          {/* MASSIVE Title */}
          <div className="servcl-title-megastructure">
            <h1 className="servcl-title-colossal">
              <span className="servcl-title-giant servcl-giant-who">WHO</span>
              <span className="servcl-title-giant servcl-giant-we">WE</span>
              <span className="servcl-title-giant servcl-giant-are">ARE</span>
            </h1>
            
            <div className="servcl-subtitle-massive">
              <span className="servcl-rotating-text">
                {rotatingTexts[textIndex]}
              </span>
              <span className="servcl-static-text">BPO Excellence</span>
            </div>
          </div>

          {/* GIANT Scroll Indicator */}
          <div className="servcl-scroll-monument">
            <div className="servcl-monument-text">DISCOVER MORE</div>
            <div className="servcl-monument-arrow">
              <div className="servcl-arrow-line"></div>
              <div className="servcl-arrow-head"></div>
            </div>
          </div>

        </div>
        
        {/* MASSIVE Background Pattern */}
        <div className="servcl-hero-megapattern"></div>
      </section>

      {/* SPECTACULAR Story Section */}
      <section 
        ref={storyRef}
        id="story"
        className={`servcl-story-spectacular ${isVisible.story ? 'servcl-spectacular-revealed' : ''}`}
      >
        <div className="servcl-spectacular-container">
          
          <div className="servcl-story-splitscreen">
            
            {/* Left Side - Content */}
            <div className="servcl-split-content">
              <div className="servcl-content-block servcl-block-mega">
                <h2 className="servcl-heading-enormous">
                  <span className="servcl-heading-line">BUSINESS PROCESS</span>
                  <span className="servcl-heading-line servcl-highlight-massive">OUTSOURCING</span>
                  <span className="servcl-heading-line">LEADERS</span>
                </h2>
                
                <div className="servcl-text-massive">
                  <p>ServCL is a <span className="servcl-highlight-giant">leading business process outsourcing (BPO) company</span> dedicated to empowering businesses worldwide with innovative, efficient, and tailored solutions.</p>
                </div>
              </div>
              
              <div className="servcl-content-block servcl-block-mega">
                <h2 className="servcl-heading-enormous">
                  <span className="servcl-heading-line">EXPERT TEAM &</span>
                  <span className="servcl-heading-line servcl-highlight-massive">CUTTING-EDGE</span>
                  <span className="servcl-heading-line">TECHNOLOGY</span>
                </h2>
                
                <div className="servcl-text-massive">
                  <p>Our team of <span className="servcl-highlight-giant">skilled professionals</span> combines industry expertise with cutting-edge technology to provide customized outsourcing solutions.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="servcl-split-visual">
              <div className="servcl-visual-megastructure">
                <div className="servcl-mega-ring servcl-ring-outer"></div>
                <div className="servcl-mega-ring servcl-ring-middle"></div>
                <div className="servcl-mega-ring servcl-ring-inner"></div>
                <div className="servcl-mega-core">
                  <div className="servcl-core-text">500+</div>
                  <div className="servcl-core-label">PROJECTS</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* COLOSSAL Impact Section */}
      <section 
        ref={impactRef}
        id="impact"
        className={`servcl-impact-colossal ${isVisible.impact ? 'servcl-colossal-activated' : ''}`}
      >
        <div className="servcl-colossal-container">
          
          <div className="servcl-impact-header">
            <h2 className="servcl-impact-title-giant">
              <span className="servcl-title-massive-line">GLOBAL</span>
              <span className="servcl-title-massive-line servcl-impact-highlight">IMPACT</span>
            </h2>
          </div>

          <div className="servcl-impact-grid-massive">
            
            <div className="servcl-impact-card servcl-card-alpha">
              <div className="servcl-card-number-giant">100+</div>
              <div className="servcl-card-label-big">GLOBAL CLIENTS</div>
              <div className="servcl-card-glow"></div>
            </div>
            
            <div className="servcl-impact-card servcl-card-beta">
              <div className="servcl-card-number-giant">99.9%</div>
              <div className="servcl-card-label-big">UPTIME</div>
              <div className="servcl-card-glow"></div>
            </div>
            
            <div className="servcl-impact-card servcl-card-gamma">
              <div className="servcl-card-number-giant">24/7</div>
              <div className="servcl-card-label-big">SUPPORT</div>
              <div className="servcl-card-glow"></div>
            </div>
            
            <div className="servcl-impact-card servcl-card-delta">
              <div className="servcl-card-number-giant">∞</div>
              <div className="servcl-card-label-big">POSSIBILITIES</div>
              <div className="servcl-card-glow"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* MASSIVE Vision Section */}
      <section 
        ref={visionRef}
        id="vision"
        className={`servcl-vision-massive ${isVisible.vision ? 'servcl-massive-unlocked' : ''}`}
      >
        <div className="servcl-massive-container">
          
          <div className="servcl-vision-megablock">
            <h2 className="servcl-vision-title-colossal">
              <span className="servcl-vision-line">TRUSTED PARTNER</span>
              <span className="servcl-vision-line servcl-vision-highlight">ACROSS THE GLOBE</span>
            </h2>
            
            <div className="servcl-vision-content-giant">
              <p>Since our inception, ServCL has grown into a <span className="servcl-highlight-spectacular">trusted partner for businesses across the globe</span>, from startups to established enterprises. Our commitment to quality, reliability, and innovation sets us apart in the outsourcing industry.</p>
              
              <p>We take pride in our ability to act as a <span className="servcl-highlight-spectacular">seamless extension of your team</span>, ensuring your operations run smoothly while you focus on your core business objectives.</p>
            </div>
          </div>

        </div>
        
        {/* MASSIVE Background Elements */}
        <div className="servcl-vision-megabg"></div>
      </section>

      {/* EPIC CTA Section */}
      <section className="servcl-cta-epic">
        <div className="servcl-epic-container">
          
          <div className="servcl-cta-megastructure">
            <h2 className="servcl-cta-title-colossal">
              <span className="servcl-cta-line">READY TO</span>
              <span className="servcl-cta-line servcl-cta-highlight">TRANSFORM?</span>
            </h2>
            
            <div className="servcl-cta-buttons-massive">
              {/* Navigate to Services */}
              <button 
                className="servcl-btn-colossal servcl-btn-primary-giant"
                onClick={() => navigate("/services/software-services")}
              >
                <span className="servcl-btn-text-huge">SOFTWARE SERVICES</span>
                <div className="servcl-btn-energy-massive"></div>
              </button>

              {/* Navigate to Contact */}
              <button 
                className="servcl-btn-colossal servcl-btn-secondary-giant"
                onClick={() => navigate("/contact")}
              >
                <span className="servcl-btn-text-huge">CONTACT US</span>
                <div className="servcl-btn-energy-massive"></div>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;
