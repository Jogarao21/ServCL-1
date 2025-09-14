import React, { useRef, useEffect, useState } from 'react';
import './WebsiteDevelopment.css';

const WebsiteDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [typingText, setTypingText] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!isVisible) return;
    
    const texts = ['Website Development', 'Digital Excellence', 'Modern Solutions', 'Cutting-Edge Tech'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setTypingText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    };

    const interval = setInterval(typeText, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, [isVisible]);

  const developmentFeatures = [
    {
      id: 'webdesign',
      title: 'Custom Web Design and UX/UI',
      description: 'Create engaging, intuitive designs tailored to your target audience, optimized for conversions and user satisfaction.',
      techStack: ['React', 'Figma', 'CSS3', 'TypeScript'],
      codeSnippet: `const CustomDesign = () => {
  return <UserInterface optimized={true} />;
};`,
      color: '#3b82f6',
      icon: '🎨'
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      description: 'Build robust websites with front-end and back-end expertise, integrating APIs, databases, and third-party tools for enhanced functionality.',
      techStack: ['Node.js', 'MongoDB', 'Express', 'React'],
      codeSnippet: `app.post('/api/data', async (req, res) => {
  const result = await database.save(req.body);
  res.json({ success: true });
});`,
      color: '#10b981',
      icon: '⚙️'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      description: 'Develop secure, scalable online stores with payment gateways, inventory management, and seamless checkout experiences.',
      techStack: ['Stripe', 'PayPal', 'WooCommerce', 'Shopify'],
      codeSnippet: `const checkout = async (cart) => {
  const payment = await stripe.createPayment(cart);
  return processOrder(payment);
};`,
      color: '#f59e0b',
      icon: '🛒'
    },
    {
      id: 'seo',
      title: 'SEO and Performance Optimization',
      description: 'Ensure your website ranks high on search engines and delivers fast, reliable performance across devices.',
      techStack: ['Lighthouse', 'GTM', 'Analytics', 'Core Vitals'],
      codeSnippet: `const optimizePerformance = () => {
  lazyLoad(images);
  minifyAssets();
  enableCaching();
};`,
      color: '#8b5cf6',
      icon: '📈'
    },
    {
      id: 'maintenance',
      title: 'Ongoing Maintenance and Support',
      description: 'Provide regular updates, security patches, and performance monitoring to keep your site at its best.',
      techStack: ['Docker', 'AWS', 'Monitoring', 'CI/CD'],
      codeSnippet: `const maintainSite = () => {
  updateDependencies();
  runSecurityCheck();
  monitorPerformance();
};`,
      color: '#ef4444',
      icon: '🔧'
    }
  ];

  return (
    <section 
      className={`servcl-webdev-cosmos ${isVisible ? 'servcl-cosmos-initialized' : ''}`}
      ref={ref}
      id="website-development"
    >
      {/* Animated Code Background */}
      <div className="servcl-code-matrix">
        <div className="servcl-matrix-layer servcl-layer-html">
          <div className="servcl-floating-code">&lt;div&gt;</div>
          <div className="servcl-floating-code">{ }</div>
          <div className="servcl-floating-code">&lt;/html&gt;</div>
          <div className="servcl-floating-code">const</div>
          <div className="servcl-floating-code">=&gt;</div>
        </div>
        <div className="servcl-matrix-layer servcl-layer-css">
          <div className="servcl-floating-code">.class</div>
          <div className="servcl-floating-code">#id</div>
          <div className="servcl-floating-code">@media</div>
          <div className="servcl-floating-code">:hover</div>
        </div>
      </div>

      {/* Terminal Grid Background */}
      <div className="servcl-terminal-grid"></div>

      <div className="servcl-webdev-container">
        
        {/* Terminal Header */}
        <div className="servcl-terminal-header">
          <div className="servcl-terminal-controls">
            <span className="servcl-control servcl-close"></span>
            <span className="servcl-control servcl-minimize"></span>
            <span className="servcl-control servcl-maximize"></span>
          </div>
          <div className="servcl-terminal-title">ServCL Development Suite</div>
        </div>

        {/* Animated Title Section */}
        <div className="servcl-webdev-header">
          <h1 className="servcl-webdev-title">
            <span className="servcl-title-prompt">$</span>
            <span className="servcl-title-command">init</span>
            <span className="servcl-typing-text">{typingText}</span>
            <span className="servcl-cursor">|</span>
          </h1>
          
          <div className="servcl-webdev-description">
            <div className="servcl-description-terminal">
              <span className="servcl-terminal-prompt">&gt;</span>
              <p className="servcl-description-text">
                Elevate your digital presence with ServCL's cutting-edge website development services. 
                We craft responsive, user-centric, and visually stunning websites that align with your 
                brand and business objectives. Our team leverages the latest technologies to deliver 
                seamless online experiences, ensuring scalability and performance.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Feature Cards */}
        <div className="servcl-features-workspace">
          {developmentFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              className={`servcl-feature-module ${activeFeature === feature.id ? 'servcl-module-active' : ''}`}
              style={{
                '--feature-color': feature.color,
                '--feature-delay': `${index * 200}ms`
              }}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Module Header */}
              <div className="servcl-module-header">
                <div className="servcl-module-tab">
                  <span className="servcl-tab-icon">{feature.icon}</span>
                  <span className="servcl-tab-title">{feature.title}</span>
                  <span className="servcl-tab-close">×</span>
                </div>
              </div>

              {/* Module Content */}
              <div className="servcl-module-content">
                
                {/* Feature Info */}
                <div className="servcl-content-info">
                  <h3 className="servcl-feature-title">
                    <span className="servcl-title-number">{String(index + 1).padStart(2, '0')}.</span>
                    <span className="servcl-title-text">{feature.title}</span>
                  </h3>
                  
                  <p className="servcl-feature-description">{feature.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="servcl-tech-stack">
                    <div className="servcl-stack-label">// Tech Stack:</div>
                    <div className="servcl-tech-tags">
                      {feature.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="servcl-tech-tag"
                          style={{ '--tag-delay': `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Code Preview */}
                <div className="servcl-code-preview">
                  <div className="servcl-code-header">
                    <span className="servcl-code-lang">JavaScript</span>
                    <span className="servcl-code-copy">📋</span>
                  </div>
                  <pre className="servcl-code-block">
                    <code className="servcl-syntax-highlight">{feature.codeSnippet}</code>
                  </pre>
                </div>

              </div>

              {/* Module Status */}
              <div className="servcl-module-status">
                <div className="servcl-status-indicator">
                  <span className="servcl-status-dot"></span>
                  <span className="servcl-status-text">Ready to Deploy</span>
                </div>
                <div className="servcl-module-progress">
                  <div className="servcl-progress-bar"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Command Line Footer */}
        <div className="servcl-terminal-footer">
          <div className="servcl-footer-command">
            <span className="servcl-footer-prompt">user@servcl:~$</span>
            <span className="servcl-footer-text">Ready to build amazing websites? Let's get started!</span>
            <span className="servcl-footer-cursor">_</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebsiteDevelopment;
