import React, { useRef, useEffect, useState } from 'react';
import './Commitment.css';

const Commitment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCommitment, setActiveCommitment] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    if (ref.current) {
      ref.current.addEventListener('mousemove', handleMouseMove);
      return () => ref.current?.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Commitment data following Single Responsibility Principle
  const commitmentPillars = [
    {
      id: 'results',
      title: 'Delivering Results',
      icon: '📊',
      description: 'Providing measurable outcomes that enhance efficiency and profitability.',
      color: '#7FC7D9',
      gradient: 'linear-gradient(135deg, #7FC7D9 0%, #E8F4F8 100%)',
      position: { top: '10%', left: '15%' }
    },
    {
      id: 'people',
      title: 'Empowering Our People',
      icon: '👥',
      description: 'Investing in our employees\' growth to ensure they deliver exceptional service.',
      color: '#365486',
      gradient: 'linear-gradient(135deg, #365486 0%, #7FC7D9 100%)',
      position: { top: '20%', right: '15%' }
    },
    {
      id: 'innovation',
      title: 'Driving Innovation',
      icon: '🚀',
      description: 'Leveraging the latest tools and technologies to stay ahead of industry trends.',
      color: '#7D0A0A',
      gradient: 'linear-gradient(135deg, #7D0A0A 0%, #365486 100%)',
      position: { bottom: '25%', left: '20%' }
    },
    {
      id: 'trust',
      title: 'Building Trust',
      icon: '🤝',
      description: 'Fostering long-term relationships based on reliability, transparency, and mutual success.',
      color: '#0F1419',
      gradient: 'linear-gradient(135deg, #0F1419 0%, #7D0A0A 100%)',
      position: { bottom: '15%', right: '20%' }
    }
  ];

  return (
    <section 
      className={`servcl-commitment-universe ${isVisible ? 'servcl-universe-awakened' : ''}`}
      ref={ref}
      id="commitment"
    >
      {/* Magnetic Field Visualization */}
      <div className="servcl-magnetic-aura">
        <div 
          className="servcl-aura-cursor"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`
          }}
        ></div>
      </div>

      <div className="servcl-commitment-container">
        
        {/* Epic Title Section */}
        <div className="servcl-commitment-header">
          <h1 className="servcl-commitment-title">
            <span className="servcl-title-segment servcl-segment-our">OUR</span>
            <span className="servcl-title-segment servcl-segment-commitment">COMMITMENT</span>
          </h1>
          
          {/* Philosophy Statement */}
          <div className="servcl-philosophy-statement">
            <p className="servcl-statement-text">
              We believe that outsourcing is more than just a service—it's a strategic partnership that drives growth.
            </p>
            <div className="servcl-statement-divider"></div>
            <p className="servcl-statement-intro">At ServCL, we are dedicated to:</p>
          </div>
        </div>

        {/* Interactive Commitment Network */}
        <div className="servcl-commitment-network">
          
          {/* Central Hub */}
          <div className="servcl-network-hub">
            <div className="servcl-hub-core">
              <div className="servcl-core-rings">
                <div className="servcl-ring servcl-ring-pulse"></div>
                <div className="servcl-ring servcl-ring-rotate"></div>
                <div className="servcl-ring servcl-ring-oscillate"></div>
              </div>
              <div className="servcl-hub-symbol">💎</div>
            </div>
            <div className="servcl-hub-label">ServCL</div>
          </div>

          {/* Commitment Nodes */}
          {commitmentPillars.map((commitment, index) => (
            <div 
              key={commitment.id}
              className={`servcl-commitment-node ${activeCommitment === commitment.id ? 'servcl-node-active' : ''}`}
              style={{
                '--node-color': commitment.color,
                '--node-gradient': commitment.gradient,
                '--node-delay': `${index * 200}ms`,
                ...commitment.position
              }}
              onMouseEnter={() => setActiveCommitment(commitment.id)}
              onMouseLeave={() => setActiveCommitment(null)}
            >
              {/* Connection Line to Hub */}
              <div className="servcl-connection-beam">
                <div className="servcl-beam-energy"></div>
              </div>

              {/* Node Structure */}
              <div className="servcl-node-structure">
                
                {/* Node Icon */}
                <div className="servcl-node-icon">
                  <span className="servcl-icon-element">{commitment.icon}</span>
                  <div className="servcl-icon-aura"></div>
                </div>

                {/* Node Content */}
                <div className="servcl-node-content">
                  <h3 className="servcl-node-title">{commitment.title}</h3>
                  
                  {/* Expandable Description */}
                  <div className="servcl-node-description">
                    <p className="servcl-description-text">{commitment.description}</p>
                  </div>
                </div>

                {/* Node Orbital Ring */}
                <div className="servcl-node-orbit">
                  <div className="servcl-orbit-ring"></div>
                  <div className="servcl-orbit-particle"></div>
                </div>

              </div>
            </div>
          ))}

          {/* Network Connections */}
          <svg className="servcl-network-web" viewBox="0 0 1000 600">
            <defs>
              <radialGradient id="connectionGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7FC7D9" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#365486" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Dynamic network lines */}
            <g className="servcl-network-lines">
              <path 
                d="M 500,300 L 150,100 M 500,300 L 850,150 M 500,300 L 200,500 M 500,300 L 800,450" 
                stroke="url(#connectionGlow)" 
                strokeWidth="2" 
                fill="none"
                filter="url(#glow)"
                className="servcl-network-path"
              />
            </g>
          </svg>

        </div>

      </div>
    </section>
  );
};

export default Commitment;
