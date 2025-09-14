import React, { useRef, useEffect, useState } from 'react';
import './Story.css';

const Story = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const storyMilestones = [
    {
      id: 'vision',
      title: 'The Vision',
      subtitle: 'Where It All Started',
      content: 'ServCL was born from a vision to transform the outsourcing industry by prioritizing people, performance, and partnership.',
      icon: '🌟',
      year: 'Beginning'
    },
    {
      id: 'growth',
      title: 'From Small to Global',
      subtitle: 'Building Our Foundation',
      content: 'Starting as a small team with big ambitions, we\'ve grown into a global provider of outsourcing solutions, serving clients across diverse industries.',
      icon: '🚀',
      year: 'Growth'
    },
    {
      id: 'milestones',
      title: 'Key Milestones',
      subtitle: 'Achievements That Define Us',
      content: 'Our journey has been marked by milestones such as expanding our service offerings, adopting advanced technologies, and building a team of dedicated professionals.',
      icon: '🏆',
      year: 'Excellence'
    },
    {
      id: 'today',
      title: 'ServCL Today',
      subtitle: 'Innovation & Reliability',
      content: 'Today, ServCL stands as a beacon of innovation and reliability, helping businesses streamline operations and achieve their full potential.',
      icon: '⚡',
      year: 'Present'
    }
  ];

  return (
    <section 
      className={`servcl-story-odyssey ${isVisible.story ? 'servcl-odyssey-revealed' : ''}`}
      ref={ref}
      id="story"
    >
      {/* Animated Progress Line */}
      <div 
        className="servcl-story-timeline"
        style={{ '--timeline-progress': `${scrollProgress * 100}%` }}
      ></div>

      <div className="servcl-odyssey-container">
        
        {/* Epic Title Section */}
        <div className="servcl-odyssey-header">
          <h1 className="servcl-odyssey-title">
            <span className="servcl-title-word servcl-word-our">OUR</span>
            <span className="servcl-title-word servcl-word-story">STORY</span>
          </h1>
          
          {/* Animated Subtitle */}
          <div className="servcl-odyssey-subtitle">
            <p className="servcl-subtitle-text">
              A Journey of Transformation, Innovation, and Excellence
            </p>
          </div>
        </div>

        {/* Story Timeline */}
        <div className="servcl-story-journey">
          {storyMilestones.map((milestone, index) => (
            <div 
              key={milestone.id}
              className={`servcl-milestone-chapter ${isVisible.story ? 'servcl-chapter-visible' : ''}`}
              style={{
                '--chapter-delay': `${index * 300}ms`,
                '--milestone-index': index + 1
              }}
            >
              {/* Chapter Number */}
              <div className="servcl-chapter-number">
                <span className="servcl-number-text">{index + 1}</span>
              </div>

              {/* Milestone Card */}
              <div className="servcl-milestone-card">
                
                {/* Card Header */}
                <div className="servcl-card-header">
                  <div className="servcl-milestone-icon">
                    <span className="servcl-icon-symbol">{milestone.icon}</span>
                    <div className="servcl-icon-ripple"></div>
                  </div>
                  
                  <div className="servcl-milestone-meta">
                    <div className="servcl-milestone-year">{milestone.year}</div>
                    <h3 className="servcl-milestone-title">{milestone.title}</h3>
                    <h4 className="servcl-milestone-subtitle">{milestone.subtitle}</h4>
                  </div>
                </div>

                {/* Card Content */}
                <div className="servcl-milestone-content">
                  <p className="servcl-content-text">{milestone.content}</p>
                </div>

                {/* Card Decoration */}
                <div className="servcl-card-glow"></div>
              </div>

              {/* Connection Line */}
              {index < storyMilestones.length - 1 && (
                <div className="servcl-connection-line">
                  <div className="servcl-line-progress"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Story Conclusion */}
        <div className={`servcl-story-conclusion ${isVisible.story ? 'servcl-conclusion-visible' : ''}`}>
          <div className="servcl-conclusion-content">
            <h2 className="servcl-conclusion-title">The Journey Continues</h2>
            <p className="servcl-conclusion-text">
              Our story is far from over. Every day, we write new chapters of innovation, 
              partnership, and success alongside our clients and team members worldwide.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;
