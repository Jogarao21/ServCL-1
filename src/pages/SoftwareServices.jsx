import React, { useRef, useEffect, useState } from 'react';
import './SoftwareServices.css';

const SoftwareServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: 'Bespoke Software Development',
      description: 'Build custom applications to address specific business challenges, from CRM systems to workflow automation tools.',
      icon: '💻',
      color: '#00d4ff'
    },
    {
      id: 2,
      title: 'Cloud-Based Solutions',
      description: 'Deploy secure, scalable cloud applications using platforms like AWS, Azure, or Google Cloud for flexibility and accessibility.',
      icon: '☁️',
      color: '#ff3366'
    },
    {
      id: 3,
      title: 'API Development and Integration',
      description: 'Create and integrate APIs to connect your systems with third-party services for seamless operations.',
      icon: '🔗',
      color: '#00ff88'
    },
    {
      id: 4,
      title: 'Software Testing and Quality Assurance',
      description: 'Ensure reliability and performance with rigorous testing methodologies.',
      icon: '🧪',
      color: '#ffaa00'
    },
    {
      id: 5,
      title: 'IT Support and Maintenance',
      description: 'Provide ongoing support, updates, and troubleshooting to keep your software running smoothly.',
      icon: '⚙️',
      color: '#aa55ff'
    }
  ];

  return (
    <section 
      className={`servcl-dark-space ${isVisible ? 'servcl-space-active' : ''}`}
      ref={ref}
      id="software-services"
    >
      {/* Dark Gradient Background */}
      <div className="servcl-dark-backdrop">
        <div className="servcl-gradient-overlay"></div>
        <div className="servcl-neon-particles">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className={`servcl-particle servcl-particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="servcl-compact-container">
        
        {/* Minimal Header */}
        <div className="servcl-minimal-header">
          <h1 className="servcl-dark-title">Software Services</h1>
          <p className="servcl-dark-subtitle">
            Unlock your business potential with ServCL's custom software solutions. 
            We deliver innovative, scalable software tailored to your unique requirements, 
            enhancing efficiency and competitiveness.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="servcl-compact-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`servcl-compact-card ${activeCard === service.id ? 'servcl-card-active' : ''}`}
              style={{
                '--card-color': service.color,
                '--card-delay': `${index * 100}ms`
              }}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Inner */}
              <div className="servcl-card-inner">
                
                {/* Compact Icon */}
                <div className="servcl-compact-icon">
                  <span className="servcl-icon-symbol">{service.icon}</span>
                </div>
                
                {/* Compact Content */}
                <div className="servcl-compact-content">
                  <h3 className="servcl-compact-title">{service.title}</h3>
                  <p className="servcl-compact-description">{service.description}</p>
                </div>

              </div>

              {/* Neon Border */}
              <div className="servcl-neon-border"></div>
              
              {/* Glow Effect */}
              <div className="servcl-neon-glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftwareServices;
