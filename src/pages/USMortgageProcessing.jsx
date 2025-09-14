import React, { useRef, useEffect, useState } from 'react';
import './USMortgageProcessing.css';

const USMortgageProcessing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mortgageServices = [
    {
      id: 'application',
      title: 'Loan Application Management',
      description: 'Process applications swiftly, verifying documents, income, and credit details with precision.',
      icon: '📋',
      position: { x: -15, y: -10, rotate: -5 },
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      screenGradient: 'linear-gradient(135deg, #dbeafe 0%, #f0f9ff 100%)'
    },
    {
      id: 'underwriting',
      title: 'Underwriting and Compliance',
      description: 'Conduct thorough risk assessments and ensure adherence to regulatory standards like TRID and RESPA.',
      icon: '🔍',
      position: { x: 10, y: -5, rotate: 3 },
      bgGradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
      screenGradient: 'linear-gradient(135deg, #f3e8ff 0%, #faf8ff 100%)'
    },
    {
      id: 'closing',
      title: 'Loan Closing Coordination',
      description: 'Manage document preparation, signing, and funding processes for smooth, error-free closings.',
      icon: '✅',
      position: { x: -8, y: 8, rotate: -2 },
      bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      screenGradient: 'linear-gradient(135deg, #d1fae5 0%, #f0fdf4 100%)'
    },
    {
      id: 'postclosing',
      title: 'Post-Closing Support',
      description: 'Handle final audits, document storage, and investor delivery to ensure compliance and accuracy.',
      icon: '📦',
      position: { x: 12, y: 6, rotate: 4 },
      bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      screenGradient: 'linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%)'
    },
    {
      id: 'security',
      title: 'Data Security',
      description: 'Implement robust protocols to protect sensitive borrower information throughout the process.',
      icon: '🔒',
      position: { x: -5, y: -8, rotate: -3 },
      bgGradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
      screenGradient: 'linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%)'
    }
  ];

  return (
    <section 
      className={`servcl-colored-space ${isVisible ? 'servcl-space-revealed' : ''}`}
      ref={ref}
      id="us-mortgage-processing"
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`
      }}
    >
      {/* Dark Space Background */}
      <div className="servcl-space-backdrop">
        <div className="servcl-stars-layer"></div>
        <div className="servcl-cosmic-gradient"></div>
      </div>

      <div className="servcl-colored-container">
        
        {/* Main Title */}
        <div className="servcl-space-header">
          <h1 className="servcl-space-title">US Mortgage Processing</h1>
          <p className="servcl-space-description">
            Streamline your mortgage operations with ServCL's comprehensive outsourcing solutions. 
            Our experienced team handles every stage of the mortgage process with accuracy and efficiency, 
            supporting lenders, brokers, and financial institutions in delivering exceptional service.
          </p>
        </div>

        {/* Colored Floating Cards */}
        <div className="servcl-colored-arena" style={{ perspective: '1500px' }}>
          {mortgageServices.map((service, index) => (
            <div 
              key={service.id}
              className="servcl-colored-device"
              style={{
                '--device-x': `${service.position.x}px`,
                '--device-y': `${service.position.y}px`,
                '--device-rotate': `${service.position.rotate}deg`,
                '--device-delay': `${index * 200}ms`,
                '--bg-gradient': service.bgGradient,
                '--screen-gradient': service.screenGradient
              }}
            >
              {/* Colored Device Frame */}
              <div className="servcl-colored-frame">
                
                {/* Colored Screen */}
                <div className="servcl-colored-screen">
                  
                  {/* Always Visible Content */}
                  <div className="servcl-preview-content">
                    <div className="servcl-preview-icon">
                      <span className="servcl-service-emoji">{service.icon}</span>
                    </div>
                    <h3 className="servcl-preview-title">{service.title}</h3>
                  </div>

                  {/* Hover-Reveal Content */}
                  <div className="servcl-reveal-content">
                    <div className="servcl-content-header">
                      <div className="servcl-window-controls">
                        <span className="servcl-control servcl-control-red"></span>
                        <span className="servcl-control servcl-control-yellow"></span>
                        <span className="servcl-control servcl-control-green"></span>
                      </div>
                      <div className="servcl-header-title">Mortgage Document</div>
                    </div>

                    <div className="servcl-detailed-content">
                      <p className="servcl-document-desc">{service.description}</p>
                      
                      <div className="servcl-status-section">
                        <div className="servcl-status-indicator">
                          <span className="servcl-status-dot"></span>
                          <span className="servcl-status-text">Processing</span>
                        </div>
                        <div className="servcl-progress-mini">
                          <div className="servcl-progress-fill"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Device Reflection */}
                <div className="servcl-device-reflection"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default USMortgageProcessing;
