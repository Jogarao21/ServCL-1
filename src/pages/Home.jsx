import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import WhoWeAre from './WhoWeAre';
import Vision from './Vision';
import Mission from './Mission';
import Values from './Values';
import Commitment from './Commitment';
import WhyChoose from './WhyChoose';
import WebsiteDevelopment from './WebsiteDevelopment';
import USMortgageProcessing from './USMortgageProcessing';
import TitleSearch from './TitleSearch';
import SoftwareServices from './SoftwareServices';
import Contact from './Contact';

// Import the fiber optic arrow image
import fiberOpticArrow from '../assets/fiber-optic-arrow1.png';

import websiteDevelopmentIcon from '../assets/WebsiteDevelopment1.png';
import mortgageProcessingIcon from '../assets/USMortgageProcessing1.png';
import titleSearchIcon from '../assets/TitleSearch1.png';
import softwareServicesIcon from '../assets/SoftwareServices1.png';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);

  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = [heroRef, servicesRef, whyChooseRef];
    elements.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      elements.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const coreServices = [
    {
      id: 'website-dev',
      title: 'Website Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      icon: websiteDevelopmentIcon,
      gradient: 'linear-gradient(135deg, #E8F4F8 0%, #7FC7D9 100%)',
      delay: '0ms'
    },
    {
      id: 'mortgage-processing',
      title: 'US Mortgage Processing',
      description: 'Comprehensive mortgage processing solutions for financial institutions',
      icon: mortgageProcessingIcon,
      gradient: 'linear-gradient(135deg, #7FC7D9 0%, #365486 100%)',
      delay: '200ms'
    },
    {
      id: 'title-search',
      title: 'Title Search',
      description: 'Accurate title searches and property verification services',
      icon: titleSearchIcon,
      gradient: 'linear-gradient(135deg, #365486 0%, #0F1419 100%)',
      delay: '400ms'
    },
    {
      id: 'software-services',
      title: 'Software Services',
      description: 'Custom software development and maintenance solutions',
      icon: softwareServicesIcon,
      gradient: 'linear-gradient(135deg, #0F1419 0%, #7D0A0A 100%)',
      delay: '600ms'
    }
  ];

  

  return (
    <div className="servcl-home-sanctuary">
      {/* Floating Background Elements */}
      <div className="servcl-cosmic-background">
        <div 
          className="servcl-floating-orb servcl-orb-primary"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="servcl-floating-orb servcl-orb-secondary"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
        <div 
          className="servcl-floating-orb servcl-orb-tertiary"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
      </div>

      {/* Hero Nexus Section */}
      <section 
        ref={heroRef}
        id="hero"
        className={`servcl-hero-nexus ${isVisible.hero ? 'servcl-nexus-activated' : ''}`}
      >
        <div className="servcl-nexus-container">
          <div className="servcl-nexus-content">
            <div className="servcl-title-constellation">
              <h1 className="servcl-cosmic-title">
                <span className="servcl-title-fragment servcl-fragment-welcome">Welcome to</span>
                <span className="servcl-title-fragment servcl-fragment-brand">ServCL</span>
              </h1>
              <div className="servcl-subtitle-aurora">
                <p className="servcl-aurora-text">
                  ServCL is your trusted partner for innovative and efficient outsourcing solutions. 
                  We specialize in delivering high-quality services tailored to your business needs, 
                  enabling you to focus on growth while we handle critical operations.
                </p>
              </div>
            </div>
            
            <div className="servcl-mission-prism">
              <p className="servcl-prism-statement">
                Our core offerings include <span className="servcl-highlight-spark">Website Development</span>, 
                <span className="servcl-highlight-spark">US Mortgage Processing</span>, 
                <span className="servcl-highlight-spark">Title Search</span>, and 
                <span className="servcl-highlight-spark">Software Services</span>, designed to drive success 
                with precision and expertise.
              </p>
            </div>
          </div>

          <div className="servcl-nexus-visual">
            <div className="servcl-geometric-mandala">
              
              {/* Outer Ring with Train-like Text */}
              <div className="servcl-mandala-ring servcl-ring-outer">
                <div className="servcl-train-track servcl-track-outer">
                  <span className="servcl-train-text">YOUR PREMIER</span>
                </div>
              </div>
              
              {/* Middle Ring with Train-like Text */}
              <div className="servcl-mandala-ring servcl-ring-middle">
                <div className="servcl-train-track servcl-track-middle">
                  <span className="servcl-train-text">BUSINESS OUTSOURCING</span>
                </div>
              </div>
              
              {/* Inner Ring with Train-like Text */}
              <div className="servcl-mandala-ring servcl-ring-inner">
                <div className="servcl-train-track servcl-track-inner">
                  <span className="servcl-train-text">PARTNER</span>
                </div>
              </div>
              
              {/* Core with Full-Size Fiber Optic Arrow Image */}
              <div className="servcl-mandala-core">
                <img 
                  src={fiberOpticArrow} 
                  alt="ServCL Fiber Optic Arrow" 
                  className="servcl-core-image-full"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

{/* Business Services Flyer Section */}
<section 
  ref={servicesRef}
  id="services"
  className={`servcl-services-constellation ${isVisible.services ? 'servcl-constellation-aligned' : ''}`}
>
  <div className="servcl-constellation-container">
    {/* Left Side - Services List */}
    <div className="servcl-services-galaxy">
      <div className="servcl-constellation-header">
        <div className="servcl-dotted-accent"></div>
        <h2 className="servcl-constellation-title">
          <span className="servcl-title-glow">Business</span> 
          <span className="servcl-title-emphasis">Services</span>
        </h2>
      </div>

      {/* Service Items with Descriptions Below */}
      <div className="servcl-services-list">
        {coreServices.map((service, index) => (
          <div 
            key={service.id}
            className={`servcl-service-item servcl-service-${service.id}`}
          >
            <div 
              className="servcl-service-planet"
              onMouseEnter={() => {
                const descArea = document.getElementById(`desc-${service.id}`);
                if (descArea) {
                  descArea.classList.add('servcl-description-visible');
                }
              }}
              onMouseLeave={() => {
                const descArea = document.getElementById(`desc-${service.id}`);
                if (descArea) {
                  descArea.classList.remove('servcl-description-visible');
                }
              }}
            >
              <div className="servcl-planet-atmosphere">
                <div className="servcl-planet-core">
                  <div className="servcl-service-icon">
                      <img 
    src={service.icon} 
    alt={`${service.title} Icon`}
    className="servcl-icon-image"
  />
                  </div>
                  <div className="servcl-service-content">
                    <span className="servcl-service-name">{service.title}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description Below Each Service */}
            <div 
              className="servcl-service-description-below"
              id={`desc-${service.id}`}
            >
              <p className="servcl-description-text-below">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Website Link */}
      <div className="servcl-website-link-section">
        <div className="servcl-website-link-container">
          <span className="servcl-globe-icon">🌐</span>
          <div className="servcl-website-info">
            <span className="servcl-website-label">Our Website</span>
            <a 
              href="https://www.servcl.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="servcl-website-url"
            >
              www.servcl.com
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Right Side - Image + ServCl Team Text */}
    <div className="servcl-business-image-section">
      <div className="servcl-hexagon-image-container">
        <div className="servcl-hexagon-image-frame">
          <div className="servcl-business-meeting-image"></div>
        </div>
      </div>
      
      {/* ServCl Team Text After Image */}
      <div className="servcl-team-text-section">
        <h3 className="servcl-team-title">ServCl Team</h3>
        <p className="servcl-team-description">
          Professional business services delivered by our experienced team of experts.
        </p>
      </div>
    </div>
  </div>
</section>





        <div id="who-we-are" className='home-section-wrapper'>
          <WhoWeAre />
        </div>
        <div id="vision" className="home-section-wrapper">
          <Vision />
        </div>
        <div id="mission" className='home-section-wrapper'>
          <Mission />
        </div>
        <div id="values" className="home-section-wrapper">
          <Values />
        </div>
        <div id="commitment" className='home-section-wrapper'>
          <Commitment />
        </div>
        <div id="why-choose" className='home-section-wrapper'>
          <WhyChoose />
        </div>
      {/* Website Development Section */}
      <div id="website-development" className="home-section-wrapper">
        <WebsiteDevelopment />
      </div>

      {/* US Mortgage Processing Section */}
      <div id="us-mortgage-processing" className="home-section-wrapper">
        <USMortgageProcessing />
      </div>

      {/* Title Search Section */}
      <div id="title-search" className="home-section-wrapper">
        <TitleSearch />
      </div>

      {/* Software Services Section */}
      <div id="software-services" className="home-section-wrapper">
        <SoftwareServices />
      </div>

      {/* Contact Section */}
      <div id="contact" className="home-section-wrapper">
        <Contact />
      </div>
     
    </div>
  );
};

export default Home;
