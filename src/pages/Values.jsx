import React, { useRef, useEffect, useState } from 'react';
import './Values.css';

const Values = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      id: 'excellence',
      title: 'Excellence',
      icon: '⭐',
      description: 'We are committed to delivering superior quality in every service, exceeding client expectations through precision and innovation.',
      color: '#7FC7D9'
    },
    {
      id: 'integrity',
      title: 'Integrity', 
      icon: '🛡️',
      description: 'We uphold the highest ethical standards, ensuring transparency and trust in all our partnerships.',
      color: '#365486'
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      icon: '🤝',
      description: 'We work closely with our clients and teams, fostering a culture of teamwork to achieve shared success.',
      color: '#7D0A0A'
    },
    {
      id: 'innovation',
      title: 'Innovation',
      icon: '💡',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead in a rapidly evolving industry.',
      color: '#0F1419'
    },
    {
      id: 'client-centricity',
      title: 'Client-Centricity',
      icon: '🎯',
      description: 'Our clients\' success is our priority, and we tailor our services to meet their unique needs and goals.',
      color: '#E8F4F8'
    }
  ];

  return (
    <section 
      className={`servcl-values-showcase ${isVisible ? 'servcl-showcase-active' : ''}`}
      ref={ref}
      id="values"
    >
      <div className="servcl-showcase-container">
        
        {/* Clean Title Section */}
        <div className="servcl-showcase-header">
          <h1 className="servcl-showcase-title">
            <span className="servcl-title-part servcl-part-our">OUR</span>
            <span className="servcl-title-part servcl-part-values">VALUES</span>
          </h1>
          
          <div className="servcl-showcase-intro">
            <p className="servcl-intro-text">
              At ServCL, our core values guide every decision and interaction, ensuring we deliver 
              exceptional results while maintaining integrity and trust.
            </p>
          </div>
        </div>

        {/* Properly Aligned Values Grid */}
        <div className="servcl-values-grid">
          {coreValues.map((value, index) => (
            <div 
              key={value.id}
              className={`servcl-value-card ${hoveredValue === value.id ? 'servcl-card-hovered' : ''}`}
              style={{
                '--value-color': value.color,
                '--card-delay': `${index * 150}ms`
              }}
              onMouseEnter={() => setHoveredValue(value.id)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              {/* Card Background */}
              <div className="servcl-card-background"></div>
              
              {/* Card Content */}
              <div className="servcl-card-content">
                
                {/* Card Header */}
                <div className="servcl-card-header">
                  <div className="servcl-card-icon">
                    <span className="servcl-icon-emoji">{value.icon}</span>
                  </div>
                  <h3 className="servcl-card-title">{value.title}</h3>
                </div>

                {/* Card Description - Visible on Hover */}
                <div className="servcl-card-description">
                  <p className="servcl-description-text">{value.description}</p>
                </div>

              </div>

              {/* Hover Overlay */}
              <div className="servcl-hover-overlay"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Values;
