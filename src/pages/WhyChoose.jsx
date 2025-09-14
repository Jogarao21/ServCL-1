import React, { useRef, useEffect, useState } from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      id: 'expertise',
      title: 'Specialized Expertise',
      description: 'Deep knowledge in mortgage processing, real estate, and technology-driven solutions.',
      icon: '🎯',
      colorScheme: {
        primary: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        background: 'linear-gradient(135deg, #dbeafe 0%, #f8fafc 100%)',
        statusBar: 'linear-gradient(90deg, #e0e7ff 0%, #3b82f6 50%, #e0e7ff 100%)',
        glowColor: 'rgba(59, 130, 246, 0.25)'
      }
    },
    {
      id: 'solutions',
      title: 'Tailored Solutions',
      description: 'Customized services designed to fit your business, from scalable website development to secure mortgage processing.',
      icon: '⚙️',
      colorScheme: {
        primary: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        background: 'linear-gradient(135deg, #ede9fe 0%, #f8fafc 100%)',
        statusBar: 'linear-gradient(90deg, #e9d5ff 0%, #8b5cf6 50%, #e9d5ff 100%)',
        glowColor: 'rgba(139, 92, 246, 0.25)'
      }
    },
    {
      id: 'reach',
      title: 'Global Reach, Local Touch',
      description: 'A worldwide delivery model with personalized support to ensure seamless collaboration.',
      icon: '🌍',
      colorScheme: {
        primary: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        background: 'linear-gradient(135deg, #d1fae5 0%, #f8fafc 100%)',
        statusBar: 'linear-gradient(90deg, #dcfce7 0%, #10b981 50%, #dcfce7 100%)',
        glowColor: 'rgba(16, 185, 129, 0.25)'
      }
    },
    {
      id: 'empowerment',
      title: 'Employee Empowerment',
      description: 'A motivated workforce driven by opportunities for growth, resulting in consistent, high-quality service.',
      icon: '🚀',
      colorScheme: {
        primary: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        background: 'linear-gradient(135deg, #fef3c7 0%, #f8fafc 100%)',
        statusBar: 'linear-gradient(90deg, #fde68a 0%, #f59e0b 50%, #fde68a 100%)',
        glowColor: 'rgba(245, 158, 11, 0.25)'
      }
    },
    {
      id: 'efficiency',
      title: 'Cost Efficiency',
      description: 'Competitive pricing that maximizes your return on investment without compromising quality.',
      icon: '💰',
      colorScheme: {
        primary: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        background: 'linear-gradient(135deg, #fee2e2 0%, #f8fafc 100%)',
        statusBar: 'linear-gradient(90deg, #fecaca 0%, #ef4444 50%, #fecaca 100%)',
        glowColor: 'rgba(239, 68, 68, 0.25)'
      }
    }
  ];

  return (
    <section 
      className={`servcl-scroll-space ${isVisible ? 'servcl-space-active' : ''}`}
      ref={ref}
      id="why-choose"
    >
      {/* Dark Space Background */}
      <div className="servcl-dark-bg"></div>
      
      <div className="servcl-scroll-container">
        
        {/* Title */}
        <div className="servcl-scroll-header">
          <h1 className="servcl-scroll-title">Why Choose ServCL?</h1>
        </div>

        {/* Scrolling Cards Row */}
        <div className="servcl-scrolling-wrapper">
          <div className="servcl-scrolling-track">
            
            {/* First Set of Cards */}
            {reasons.map((reason, index) => (
              <div 
                key={`set1-${reason.id}`} 
                className="servcl-mini-card"
                style={{
                  '--primary-gradient': reason.colorScheme.primary,
                  '--bg-gradient': reason.colorScheme.background,
                  '--status-gradient': reason.colorScheme.statusBar,
                  '--glow-color': reason.colorScheme.glowColor
                }}
              >
                <div className="servcl-mini-interface">
                  <div className="servcl-mini-header">
                    <div className="servcl-mini-icon">
                      <span className="servcl-mini-emoji">{reason.icon}</span>
                    </div>
                  </div>
                  <div className="servcl-mini-content">
                    <h3 className="servcl-mini-title">{reason.title}</h3>
                    <p className="servcl-mini-desc">{reason.description}</p>
                  </div>
                  <div className="servcl-mini-footer">
                    <div className="servcl-mini-status"></div>
                  </div>
                </div>
              </div>
            ))}

            {/* Second Set of Cards (for seamless loop) */}
            {reasons.map((reason, index) => (
              <div 
                key={`set2-${reason.id}`} 
                className="servcl-mini-card"
                style={{
                  '--primary-gradient': reason.colorScheme.primary,
                  '--bg-gradient': reason.colorScheme.background,
                  '--status-gradient': reason.colorScheme.statusBar,
                  '--glow-color': reason.colorScheme.glowColor
                }}
              >
                <div className="servcl-mini-interface">
                  <div className="servcl-mini-header">
                    <div className="servcl-mini-icon">
                      <span className="servcl-mini-emoji">{reason.icon}</span>
                    </div>
                  </div>
                  <div className="servcl-mini-content">
                    <h3 className="servcl-mini-title">{reason.title}</h3>
                    <p className="servcl-mini-desc">{reason.description}</p>
                  </div>
                  <div className="servcl-mini-footer">
                    <div className="servcl-mini-status"></div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
