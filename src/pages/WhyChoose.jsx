import React, { useRef, useEffect, useState } from 'react';
import './WhyChoose.css';

// Import your images
import SpecializedExpertiseImg from '../assets/SpecializedExpertise.png';
import TailoredSolutionsImg from '../assets/TailoredSolutions.png';
import GlobalReachImg from '../assets/GlobalReachLocalTouch.png';
import EmployeeEmpowermentImg from '../assets/EmployeeEmpowerement.png';
import CostEfficiencyImg from '../assets/CostEfficiency.png';

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

  const features = [
    {
      id: 'expertise',
      title: 'Specialized Expertise',
      description: 'Deep knowledge in mortgage processing, real estate, and technology-driven solutions.',
      image: SpecializedExpertiseImg
    },
    {
      id: 'solutions',
      title: 'Tailored Solutions',
      description: 'Customized services designed to fit your business needs and requirements.',
      image: TailoredSolutionsImg
    },
    {
      id: 'reach',
      title: 'Global Reach, Local Touch',
      description: 'Worldwide delivery model with personalized support for seamless collaboration.',
      image: GlobalReachImg
    },
    {
      id: 'empowerment',
      title: 'Employee Empowerment',
      description: 'Motivated workforce driven by growth opportunities for consistent service quality.',
      image: EmployeeEmpowermentImg
    },
    {
      id: 'efficiency',
      title: 'Cost Efficiency',
      description: 'Competitive pricing that maximizes ROI without compromising on quality.',
      image: CostEfficiencyImg
    }
  ];

  return (
    <section 
      className={`why-choose-section ${isVisible ? 'section-visible' : ''}`}
      ref={ref}
      id="why-choose"
    >
      <div className="why-choose-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Why Choose ServCL?</h2>
          <p className="section-subtitle">
            Discover what makes us the preferred choice for businesses worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="feature-item"
              style={{ '--delay': `${index * 0.15}s` }}
            >
              {/* Hexagon Image Container */}
              <div className="hexagon-container">
                <div className="hexagon-image">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Feature Content */}
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
