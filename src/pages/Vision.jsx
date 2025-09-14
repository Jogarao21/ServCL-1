import React, { useRef, useEffect, useState } from 'react';
import './Vision.css';

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <section 
      className={`servcl-gradient-universe ${isVisible ? 'servcl-universe-awakened' : ''}`}
      ref={ref}
      id="vision"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
        '--scroll-offset': `${scrollY * 0.5}px`
      }}
    >
      {/* Animated Gradient Mesh Background */}
      <div className="servcl-gradient-mesh">
        <div className="servcl-mesh-layer servcl-layer-1"></div>
        <div className="servcl-mesh-layer servcl-layer-2"></div>
        <div className="servcl-mesh-layer servcl-layer-3"></div>
        <div className="servcl-mesh-layer servcl-layer-4"></div>
      </div>

      {/* Interactive Gradient Orbs */}
      <div className="servcl-floating-orbs">
        {Array.from({ length: 8 }, (_, i) => (
          <div 
            key={i} 
            className={`servcl-gradient-orb servcl-orb-${i + 1}`}
            style={{ '--orb-delay': `${i * 0.5}s` }}
          ></div>
        ))}
      </div>

      {/* Mouse-Following Gradient */}
      <div className="servcl-mouse-gradient"></div>

      <div className="servcl-gradient-container">
        
        {/* Spectacular Gradient Title */}
        <div className="servcl-gradient-header">
          <h1 className="servcl-gradient-title">
            <span className="servcl-gradient-text">OUR VISION</span>
            <div className="servcl-title-reflection"></div>
            <div className="servcl-title-glow"></div>
          </h1>
          
          {/* Animated Subtitle */}
          <div className="servcl-gradient-subtitle">
            <div className="servcl-subtitle-line"></div>
            <span className="servcl-subtitle-text">Shaping the Future</span>
            <div className="servcl-subtitle-line"></div>
          </div>
        </div>

        {/* Multi-Gradient Vision Card */}
        <div className="servcl-holographic-card">
          
          {/* Card Background Layers */}
          <div className="servcl-card-bg-layers">
            <div className="servcl-bg-layer servcl-bg-primary"></div>
            <div className="servcl-bg-layer servcl-bg-secondary"></div>
            <div className="servcl-bg-layer servcl-bg-accent"></div>
          </div>

          {/* Holographic Border */}
          <div className="servcl-holographic-border"></div>

          {/* Card Content */}
          <div className="servcl-card-content">
            
            {/* Vision Icon */}
            <div className="servcl-vision-icon">
              <div className="servcl-icon-gradient">
                <svg viewBox="0 0 24 24" className="servcl-vision-svg">
                  <path d="M12 2C12.8 2 13.5 2.7 13.5 3.5S12.8 5 12 5 10.5 4.3 10.5 3.5 11.2 2 12 2M21 9V7L18.5 7C18.1 6.7 17.6 6.4 17.1 6.2L17.9 3.8L16.1 2.9L15.3 5.3C14.9 5.2 14.5 5.1 14 5.1V2.5H12V5.1C11.5 5.1 11.1 5.2 10.7 5.3L9.9 2.9L8.1 3.8L8.9 6.2C8.4 6.4 7.9 6.7 7.5 7H5V9H7.5C7.1 9.4 6.8 9.9 6.6 10.4L4.2 9.6L3.3 11.4L5.7 12.2C5.6 12.6 5.5 13 5.5 13.5H3V15.5H5.5C5.5 16 5.6 16.4 5.7 16.8L3.3 17.6L4.2 19.4L6.6 18.6C6.8 19.1 7.1 19.6 7.5 20H5V22H7.5C7.9 22.3 8.4 22.6 8.9 22.8L8.1 25.2L9.9 26.1L10.7 23.7C11.1 23.8 11.5 23.9 12 23.9V26.5H14V23.9C14.5 23.9 14.9 23.8 15.3 23.7L16.1 26.1L17.9 25.2L17.1 22.8C17.6 22.6 18.1 22.3 18.5 22H21V20H18.5C18.9 19.6 19.2 19.1 19.4 18.6L21.8 19.4L22.7 17.6L20.3 16.8C20.4 16.4 20.5 16 20.5 15.5H23V13.5H20.5C20.5 13 20.4 12.6 20.3 12.2L22.7 11.4L21.8 9.6L19.4 10.4C19.2 9.9 18.9 9.4 18.5 9H21M12 8A5.5 5.5 0 0 1 17.5 13.5A5.5 5.5 0 0 1 12 19A5.5 5.5 0 0 1 6.5 13.5A5.5 5.5 0 0 1 12 8M12 10A3.5 3.5 0 0 0 8.5 13.5A3.5 3.5 0 0 0 12 17A3.5 3.5 0 0 0 15.5 13.5A3.5 3.5 0 0 0 12 10"/>
                </svg>
              </div>
              <div className="servcl-icon-rings">
                <div className="servcl-ring servcl-ring-1"></div>
                <div className="servcl-ring servcl-ring-2"></div>
                <div className="servcl-ring servcl-ring-3"></div>
              </div>
            </div>

            {/* Vision Text */}
            <div className="servcl-vision-content">
              <p className="servcl-vision-text">
                To be the global leader in business process outsourcing, delivering innovative and sustainable solutions that empower businesses to thrive in a dynamic digital landscape. We aim to redefine industry standards by combining human expertise with advanced technology, creating value for our clients and their communities.
              </p>
            </div>

            {/* Floating Gradient Particles */}
            <div className="servcl-content-particles">
              {Array.from({ length: 12 }, (_, i) => (
                <div 
                  key={i} 
                  className={`servcl-content-particle servcl-particle-${i + 1}`}
                ></div>
              ))}
            </div>

          </div>

          {/* Card Highlight Effects */}
          <div className="servcl-card-highlights">
            <div className="servcl-highlight servcl-highlight-1"></div>
            <div className="servcl-highlight servcl-highlight-2"></div>
            <div className="servcl-highlight servcl-highlight-3"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Vision;
