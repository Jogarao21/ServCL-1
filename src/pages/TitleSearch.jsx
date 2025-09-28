import React, { useRef, useEffect, useState } from 'react';
import './TitleSearch.css';

const TitleSearch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const [morphIndex, setMorphIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Morphing background animation
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setMorphIndex(prev => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const titleNodes = [
    {
      id: 'examination',
      title: 'Comprehensive Title Examination',
      description: 'Review public records, including deeds, liens, and encumbrances, to confirm clear title.',
      icon: '🔍',
      position: { x: 20, y: 15 },
      connections: ['reports', 'curative'],
      hologram: 'linear-gradient(45deg, #00f5ff, #e7edf6ff, #8a2be2, #ff1493)'
    },
    {
      id: 'reports',
      title: 'Detailed Title Reports',
      description: 'Deliver clear, actionable reports to support informed decision-making for all parties.',
      icon: '📊',
      position: { x: 75, y: 25 },
      connections: ['examination', 'escrow'],
      hologram: 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)'
    },
    {
      id: 'curative',
      title: 'Title Curative Services',
      description: 'Resolve issues like liens or discrepancies to facilitate smooth transactions.',
      icon: '⚖️',
      position: { x: 10, y: 70 },
      connections: ['examination', 'nationwide'],
      hologram: 'linear-gradient(45deg, #a8e6cf, #dcedc1, #ffd3a5, #fd9853)'
    },
    {
      id: 'escrow',
      title: 'Escrow and Settlement Support',
      description: 'Coordinate with escrow agents to ensure accurate and timely closings.',
      icon: '🏛️',
      position: { x: 80, y: 75 },
      connections: ['reports', 'nationwide'],
      hologram: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)'
    },
    {
      id: 'nationwide',
      title: 'Nationwide Coverage',
      description: 'Access extensive databases to provide title services across the US.',
      icon: '🇺🇸',
      position: { x: 45, y: 50 },
      connections: ['curative', 'escrow'],
      hologram: 'linear-gradient(45deg, #4facfe, #00f2fe, #43e97b, #38f9d7)'
    }
  ];

  return (
    <section 
      className={`servcl-holographic-realm ${isVisible ? 'servcl-realm-activated' : ''}`}
      ref={ref}
      id="title-search"
      style={{ '--morph-index': morphIndex }}
    >
      {/* Liquid Morphing Background */}
      <div className="servcl-liquid-cosmos">
        <div className="servcl-morph-layer servcl-layer-primary"></div>
        <div className="servcl-morph-layer servcl-layer-secondary"></div>
        <div className="servcl-morph-layer servcl-layer-accent"></div>
        <div className="servcl-geometric-particles">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className={`servcl-particle servcl-particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="servcl-holographic-container">
        
        {/* Holographic Title */}
        <div className="servcl-holographic-header">
          <h1 className="servcl-hologram-title">
            <span className="servcl-title-shard">Title</span>
            <span className="servcl-title-shard">Search</span>
          </h1>
          <div className="servcl-hologram-description">
            <p className="servcl-description-fragment">
              ServCL offers meticulous title search services to ensure clear property ownership and minimize 
              risks in real estate transactions. Our detailed approach provides peace of mind for buyers, 
              sellers, and lenders.
            </p>
          </div>
        </div>

        {/* Property Network Visualization */}
        <div className="servcl-property-network">
          
          {/* Connection Lines */}
          <svg className="servcl-network-web" viewBox="0 0 100 100">
            <defs>
              <filter id="neonGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#8a2be2" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#ff1493" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            
            {titleNodes.map(node => 
              node.connections.map(targetId => {
                const target = titleNodes.find(n => n.id === targetId);
                return (
                  <line
                    key={`${node.id}-${targetId}`}
                    x1={node.position.x}
                    y1={node.position.y}
                    x2={target.position.x}
                    y2={target.position.y}
                    stroke="url(#connectionGradient)"
                    strokeWidth="0.5"
                    filter="url(#neonGlow)"
                    className={`servcl-connection-line ${
                      activeNode === node.id || activeNode === targetId 
                        ? 'servcl-line-active' 
                        : ''
                    }`}
                  />
                );
              })
            )}
          </svg>

          {/* Floating Glass Nodes */}
          {titleNodes.map((node, index) => (
            <div
              key={node.id}
              className={`servcl-glass-node ${activeNode === node.id ? 'servcl-node-expanded' : ''}`}
              style={{
                '--node-x': `${node.position.x}%`,
                '--node-y': `${node.position.y}%`,
                '--node-delay': `${index * 200}ms`,
                '--hologram-gradient': node.hologram
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Glass Prism */}
              <div className="servcl-glass-prism">
                
                {/* Holographic Surface */}
                <div className="servcl-holographic-surface">
                  <div className="servcl-surface-icon">
                    <span className="servcl-node-icon">{node.icon}</span>
                  </div>
                  <h3 className="servcl-surface-title">{node.title}</h3>
                </div>

                {/* Hidden Content Panel */}
                <div className="servcl-content-panel">
                  <div className="servcl-panel-inner">
                    <p className="servcl-panel-description">{node.description}</p>
                    
                    {/* Geometric Decorations */}
                    <div className="servcl-panel-decorations">
                      <div className="servcl-deco-triangle"></div>
                      <div className="servcl-deco-circle"></div>
                      <div className="servcl-deco-hexagon"></div>
                    </div>
                  </div>
                </div>

                {/* Holographic Reflections */}
                <div className="servcl-holographic-reflections">
                  <div className="servcl-reflection servcl-reflection-1"></div>
                  <div className="servcl-reflection servcl-reflection-2"></div>
                  <div className="servcl-reflection servcl-reflection-3"></div>
                </div>

                {/* Energy Ring */}
                <div className="servcl-energy-ring"></div>

              </div>

              {/* Node Pulse */}
              <div className="servcl-node-pulse"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TitleSearch;
