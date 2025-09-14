import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const [hoursDropdownOpen, setHoursDropdownOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Get current day for highlighting
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    return days[today];
  };

  // Check if currently open
  const isCurrentlyOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();
    
    // Monday to Friday (1-5) and between 9 AM to 5 PM
    return (day >= 1 && day <= 5) && (hour >= 9 && hour < 17);
  };

  // Business hours data
  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM', isOpen: true },
    { day: 'Thursday', hours: '9:00 AM - 5:00 PM', isOpen: true },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM', isOpen: true },
    { day: 'Saturday', hours: 'Closed', isOpen: false },
    { day: 'Sunday', hours: 'Closed', isOpen: false }
  ];

  // Navigation links with proper paths
  const navigationLinks = [
    { 
      name: 'Home', 
      path: '/', 
      type: 'page',
      action: () => window.location.href = '/' 
    },
    { 
      name: 'Who We Are', 
      path: '#who-we-are', 
      type: 'section',
      action: () => scrollToSection('about-us') 
    },
    { 
      name: 'Website Development', 
      path: '#website-development', 
      type: 'section',
      action: () => scrollToSection('website-development') 
    },
    { 
      name: 'US Mortgage Processing', 
      path: '#us-mortgage-processing', 
      type: 'section',
      action: () => scrollToSection('us-mortgage-processing') 
    },
    { 
      name: 'Title Search', 
      path: '#title-search', 
      type: 'section',
      action: () => scrollToSection('title-search') 
    },
    { 
      name: 'Software Services', 
      path: '#software-services', 
      type: 'section',
      action: () => scrollToSection('software-services') 
    },
    { 
      name: 'Contact', 
      path: '#contact', 
      type: 'section',
      action: () => scrollToSection('contact') 
    }
  ];

  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest' 
      });
      
      // Update URL hash
      window.history.pushState(null, null, `#${sectionId}`);
      
      // Add visual feedback
      console.log(`Navigating to: ${sectionId}`);
      
      // Optional: Add analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'navigation_click', {
          'section_id': sectionId,
          'from_page': 'contact'
        });
      }
    } else {
      console.warn(`Section with ID "${sectionId}" not found. Attempting page navigation...`);
      
      // Fallback: try to navigate to page
      if (sectionId === 'about-us') {
        window.location.href = '/about/who-we-are';
      } else if (sectionId === 'website-development') {
        window.location.href = '/services/website-development';
      } else if (sectionId === 'us-mortgage-processing') {
        window.location.href = '/services/us-mortgage-processing';
      } else if (sectionId === 'title-search') {
        window.location.href = '/services/title-search';
      } else if (sectionId === 'software-services') {
        window.location.href = '/services/software-services';
      } else {
        // Generic fallback
        window.location.href = `/#${sectionId}`;
      }
    }
  };

  // Enhanced navigation handler
  const handleNavClick = (link, event) => {
    event.preventDefault();
    
    console.log(`Clicked navigation: ${link.name} -> ${link.path}`);
    
    try {
      if (link.type === 'page') {
        // Navigate to different page
        window.location.href = link.path;
      } else if (link.type === 'section') {
        // Scroll to section on current page
        const sectionId = link.path.substring(1); // Remove #
        scrollToSection(sectionId);
      }
      
      // Execute custom action if provided
      if (link.action && typeof link.action === 'function') {
        link.action();
      }
      
    } catch (error) {
      console.error('Navigation error:', error);
      
      // Fallback navigation
      if (link.path.startsWith('#')) {
        window.location.hash = link.path;
      } else {
        window.location.href = link.path;
      }
    }
  };

  // Pre-filled email template
  const emailSubject = encodeURIComponent("Business Inquiry - ServCL Partnership");
  const emailBody = encodeURIComponent(`Hello ServCL Team,

I am interested in learning more about your outsourcing services and how they can help transform my business operations.

Could we schedule a consultation to discuss:
- Custom software solutions
- Business process optimization  
- Partnership opportunities

Please let me know your availability.

Best regards,
[Your Name]
[Your Company]`);

  const contactOptions = [
    {
      id: 'email',
      value: 'info@servcl.com',
      icon: '📧',
      link: `mailto:info@servcl.com?subject=${emailSubject}&body=${emailBody}`,
      color: '#6366f1',
      action: 'Send Email'
    },
    {
      id: 'phone',
      value: '+1-800-123-4567',
      icon: '📱',
      link: 'tel:+18001234567',
      color: '#10b981',
      action: 'Call Now'
    },
    {
      id: 'website',
      value: 'www.servcl.com',
      icon: '🌍',
      link: 'https://www.servcl.com',
      color: '#f59e0b',
      action: 'Visit Website'
    }
  ];

  const handleContactClick = (contact) => {
    console.log(`Clicked: ${contact.action} - ${contact.value}`);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'contact_click', {
        'contact_type': contact.id,
        'contact_value': contact.value
      });
    }
  };

  const currentDay = getCurrentDay();
  const isOpen = isCurrentlyOpen();

  return (
    <section 
      className={`contacthub-main-section ${isVisible ? 'contacthub-section-loaded' : ''}`}
      ref={ref}
      id="contact"
    >
      {/* Background Elements */}
      <div className="contacthub-backdrop">
        <div className="contacthub-gradient-bg"></div>
        <div className="contacthub-decoration-shapes">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className={`contacthub-shape contacthub-shape-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="contacthub-content-wrapper">
        
        {/* Header Section */}
        <div className="contacthub-header-area">
          <h1 className="contacthub-main-title">Ready to transform your business with ServCL's outsourcing expertise? Get in touch today!</h1>
        </div>

        {/* Contact Cards */}
        <div className="contacthub-tiles-container">
          {contactOptions.map((option, index) => (
            <a
              key={option.id}
              href={option.link}
              target={option.id === 'website' ? '_blank' : '_self'}
              rel={option.id === 'website' ? 'noopener noreferrer' : undefined}
              className={`contacthub-compact-tile ${activeContact === option.id ? 'contacthub-tile-selected' : ''}`}
              style={{
                '--tile-color': option.color,
                '--tile-delay': `${index * 100}ms`
              }}
              onMouseEnter={() => setActiveContact(option.id)}
              onMouseLeave={() => setActiveContact(null)}
              onClick={() => handleContactClick(option)}
              title={`${option.action}: ${option.value}`}
              aria-label={`${option.action}: ${option.value}`}
            >
              <div className="contacthub-tile-content">
                <div className="contacthub-compact-icon">
                  <span className="contacthub-contact-icon">{option.icon}</span>
                </div>
                <div className="contacthub-contact-info">
                  <div className="contacthub-contact-value">
                    {option.value}
                  </div>
                  <div className="contacthub-contact-action">
                    {option.action}
                  </div>
                </div>
              </div>

              <div className="contacthub-click-indicator">
                <span className="contacthub-click-text">Click to {option.action.toLowerCase()}</span>
                <span className="contacthub-click-arrow">→</span>
              </div>

              <div className="contacthub-tile-glow"></div>
              <div className="contacthub-tile-border"></div>
            </a>
          ))}
        </div>

        {/* Business Hours Section */}
        <div className="contacthub-hours-section">
          <div className="contacthub-hours-card">
            <div 
              className="contacthub-hours-header"
              onClick={() => setHoursDropdownOpen(!hoursDropdownOpen)}
            >
              <div className="contacthub-hours-icon">🕐</div>
              <div className="contacthub-hours-info">
                <h3 className="contacthub-hours-title">Business Hours</h3>
                <div className="contacthub-current-status">
                  <span className={`contacthub-status-badge ${isOpen ? 'contacthub-status-open' : 'contacthub-status-closed'}`}>
                    {isOpen ? 'Currently Open' : 'Currently Closed'}
                  </span>
                  <span className="contacthub-today-hours">
                    Today ({currentDay}): {businessHours.find(h => h.day === currentDay)?.hours}
                  </span>
                </div>
              </div>
              <button 
                className={`contacthub-hours-toggle ${hoursDropdownOpen ? 'contacthub-toggle-open' : ''}`}
                aria-label="Toggle business hours"
              >
                <span className="contacthub-toggle-arrow">▼</span>
              </button>
            </div>

            <div className={`contacthub-hours-dropdown ${hoursDropdownOpen ? 'contacthub-dropdown-open' : ''}`}>
              <div className="contacthub-hours-list">
                {businessHours.map((schedule, index) => (
                  <div 
                    key={schedule.day}
                    className={`contacthub-hours-item ${schedule.day === currentDay ? 'contacthub-current-day' : ''}`}
                  >
                    <span className="contacthub-day-name">{schedule.day}</span>
                    <span className={`contacthub-day-hours ${schedule.isOpen ? 'contacthub-open' : 'contacthub-closed'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="contacthub-footer-message">
          <p className="contacthub-message-text">
            Partner with ServCL to streamline your operations and achieve unparalleled success. Contact us now to discuss your needs!
          </p>
        </div>

      </div>

      {/* Enhanced Footer Section */}
      <footer className="contacthub-footer">
        <div className="contacthub-footer-content">
          
          {/* Navigation Links */}
          <div className="contacthub-footer-nav">
            <h4 className="contacthub-nav-title">Quick Links</h4>
            <div className="contacthub-nav-links">
              {navigationLinks.map((link, index) => (
                <button
                  key={link.name}
                  className="contacthub-nav-link"
                  onClick={(event) => handleNavClick(link, event)}
                  style={{ '--link-delay': `${index * 50}ms` }}
                  title={`Navigate to ${link.name}`}
                  aria-label={`Navigate to ${link.name}`}
                >
                  <span className="contacthub-nav-text">{link.name}</span>
                  <span className="contacthub-nav-arrow">→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="contacthub-footer-copyright">
            <p className="contacthub-copyright-text">
              Copyright © 2025 ServCL.com - All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </section>
  );
};

export default Contact;
