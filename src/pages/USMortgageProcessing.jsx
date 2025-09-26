import React, { useRef, useEffect, useState } from 'react';
import './USMortgageProcessing.css';

// Import your images (place these in your src/assets/ folder)
import LoanApplicationImage from '../assets/LoanManagementSystem.png';
import UnderwritingImage from '../assets/UnderwritingCompliance.png';
import LoanClosingImage from '../assets/LoanClosingCoOrdination.png';
import PostClosingImage from '../assets/PostClosingSupport.png';
import DataSecurityImage from '../assets/DataSecurity.png';

const USMortgageProcessing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const mortgageServices = [
    {
      id: 'application',
      title: 'Loan Application Management',
      description: 'Process applications swiftly, verifying documents, income, and credit details with precision.',
      image: LoanApplicationImage,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'underwriting',
      title: 'Underwriting and Compliance',
      description: 'Conduct thorough risk assessments and ensure adherence to regulatory standards like TRID and RESPA.',
      image: UnderwritingImage,
      gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)'
    },
    {
      id: 'closing',
      title: 'Loan Closing Coordination',
      description: 'Manage document preparation, signing, and funding processes for smooth, error-free closings.',
      image: LoanClosingImage,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      id: 'postclosing',
      title: 'Post-Closing Support',
      description: 'Handle final audits, document storage, and investor delivery to ensure compliance and accuracy.',
      image: PostClosingImage,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      id: 'security',
      title: 'Data Security',
      description: 'Implement robust protocols to protect sensitive borrower information throughout the process.',
      image: DataSecurityImage,
      gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
    }
  ];

  return (
    <section 
      className={`servcl-professional-section ${isVisible ? 'servcl-section-active' : ''}`}
      ref={ref}
      id="us-mortgage-processing"
    >
      {/* Professional Background */}
      <div className="servcl-section-backdrop">
        <div className="servcl-gradient-background"></div>
      </div>

      <div className="servcl-section-container">
        
        {/* Header */}
        <div className="servcl-section-header">
          <h1 className="servcl-section-title">US Mortgage Processing</h1>
          <p className="servcl-section-description">
            Streamline your mortgage operations with ServCL's comprehensive outsourcing solutions. 
            Our experienced team handles every stage of the mortgage process with accuracy and efficiency, 
            supporting lenders, brokers, and financial institutions in delivering exceptional service.
          </p>
        </div>

        {/* Professional Cards Row */}
        <div className="servcl-cards-row">
          {mortgageServices.map((service, index) => (
            <div 
              key={service.id}
              className={`servcl-professional-card ${hoveredCard === service.id ? 'servcl-card-hovered' : ''}`}
              style={{
                '--card-gradient': service.gradient,
                '--card-delay': `${index * 150}ms`
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image + Title (Always Visible) */}
              <div className="servcl-card-front">
                <div className="servcl-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="servcl-service-image"
                  />
                  <div className="servcl-image-overlay"></div>
                </div>
                <div className="servcl-title-section">
                  <h3 className="servcl-service-title">{service.title}</h3>
                </div>
              </div>

              {/* Content Panel (Hover Reveal - Right to Left) */}
              <div className="servcl-content-panel">
                <div className="servcl-panel-inner">
                  <h4 className="servcl-panel-title">{service.title}</h4>
                  <p className="servcl-panel-description">{service.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default USMortgageProcessing;