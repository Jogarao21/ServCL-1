import React, { useRef, useEffect, useState } from 'react';
import './Mission.css';

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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

  return (
    <section 
      className={`servcl-mission-nexus ${isVisible ? 'servcl-nexus-active' : ''}`}
      ref={ref}
      id="mission"
    >
      {/* Dynamic Morphing Background */}
      <div className="servcl-mission-morphbg">
        <div 
          className="servcl-morph-sphere servcl-sphere-primary"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px)`
          }}
        ></div>
        <div 
          className="servcl-morph-sphere servcl-sphere-secondary"
          style={{
            transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * -0.2}px)`
          }}
        ></div>
        <div 
          className="servcl-morph-sphere servcl-sphere-tertiary"
          style={{
            transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * -0.4}px)`
          }}
        ></div>
      </div>

      <div className="servcl-mission-container">
        
        {/* Holographic Title */}
        <div className="servcl-mission-header">
          <h1 className="servcl-mission-holo-title">
            <span className="servcl-holo-word servcl-word-our">OUR</span>
            <span className="servcl-holo-word servcl-word-mission">MISSION</span>
          </h1>
          
          {/* Interactive Pulse Ring */}
          <div className="servcl-mission-pulse-ring">
            <div className="servcl-ring-outer"></div>
            <div className="servcl-ring-middle"></div>
            <div className="servcl-ring-inner"></div>
            <div className="servcl-ring-core"></div>
          </div>
        </div>

        {/* Mission Content with Holographic Panel */}
        <div className="servcl-mission-holo-panel">
          <div className="servcl-panel-grid">
            
            {/* Primary Mission Statement */}
            <div className="servcl-mission-segment servcl-segment-primary">
              <div className="servcl-segment-header">
                <div className="servcl-header-icon">🎯</div>
                <h3 className="servcl-segment-title">CORE PURPOSE</h3>
              </div>
              <p className="servcl-segment-content">
                Our mission is to provide world-class outsourcing solutions that drive efficiency, reduce costs, and enhance business performance.
              </p>
            </div>

            {/* Partnership Focus */}
            <div className="servcl-mission-segment servcl-segment-secondary">
              <div className="servcl-segment-header">
                <div className="servcl-header-icon">🤝</div>
                <h3 className="servcl-segment-title">PARTNERSHIP</h3>
              </div>
              <p className="servcl-segment-content">
                We strive to build long-lasting partnerships by delivering tailored services in Website Development, US Mortgage Processing, Title Search, and Software Services.
              </p>
            </div>

            {/* Excellence Standards */}
            <div className="servcl-mission-segment servcl-segment-tertiary">
              <div className="servcl-segment-header">
                <div className="servcl-header-icon">⚡</div>
                <h3 className="servcl-segment-title">EXCELLENCE</h3>
              </div>
              <p className="servcl-segment-content">
                With a focus on transparency, professionalism, and measurable results, we empower our clients to achieve their goals while fostering a collaborative environment for our employees.
              </p>
            </div>

          </div>
          
          {/* Holographic Grid Overlay */}
          <div className="servcl-holo-grid-overlay"></div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
