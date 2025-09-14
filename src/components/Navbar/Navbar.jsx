import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const aboutDropdownItems = [
    { label: 'Who We Are', path: '/about/who-we-are' },
    { label: 'Our Vision', path: '/about/vision' },
    { label: 'Our Mission', path: '/about/mission' },
    { label: 'Our Values', path: '/about/values' },
    { label: 'Our Story', path: '/about/story' },
    { label: 'Our Commitment', path: '/about/commitment' },
    { label: 'Why Choose ServCL', path: '/about/why-choose' }
  ];

  const servicesDropdownItems = [
    { label: 'Website Development', path: '/services/website-development' },
    { label: 'US Mortgage Processing', path: '/services/us-mortgage-processing' },
    { label: 'Title Search', path: '/services/title-search' },
    { label: 'Software Services', path: '/services/software-services' }
  ];

  return (
    <nav 
      ref={navRef}
      className={`servcl-navbar ${isScrolled ? 'servcl-navbar--scrolled' : ''}`}
    >
      <div className="servcl-navbar__container">
        {/* Logo */}
        <Link to="/" className="servcl-navbar__logo-link">
          <div className="servcl-navbar__logo">
            <span className="servcl-navbar__logo-serv">Serv</span>
            <span className="servcl-navbar__logo-cl">CL</span>
            <div className="servcl-navbar__tagline">
              Your Premier Business Outsourcing Partner
            </div>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`servcl-navbar__mobile-toggle ${isMobileMenuOpen ? 'servcl-navbar__mobile-toggle--active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="servcl-navbar__hamburger-line"></span>
          <span className="servcl-navbar__hamburger-line"></span>
          <span className="servcl-navbar__hamburger-line"></span>
        </button>

        {/* Navigation Menu */}
        <div className={`servcl-navbar__menu ${isMobileMenuOpen ? 'servcl-navbar__menu--active' : ''}`}>
          <ul className="servcl-navbar__nav-list">
            {/* Home */}
            <li className="servcl-navbar__nav-item">
              <Link 
                to="/" 
                className={`servcl-navbar__nav-link ${location.pathname === '/' ? 'servcl-navbar__nav-link--active' : ''}`}
              >
                Home
              </Link>
            </li>

            {/* About Us Dropdown */}
            <li className="servcl-navbar__nav-item servcl-navbar__dropdown">
              <button
                className={`servcl-navbar__nav-link servcl-navbar__dropdown-toggle ${
                  location.pathname.startsWith('/about') ? 'servcl-navbar__nav-link--active' : ''
                }`}
                onClick={() => toggleDropdown('about')}
                aria-expanded={activeDropdown === 'about'}
              >
                About Us
                <svg 
                  className={`servcl-navbar__dropdown-arrow ${activeDropdown === 'about' ? 'servcl-navbar__dropdown-arrow--rotated' : ''}`}
                  width="12" 
                  height="8" 
                  viewBox="0 0 12 8"
                >
                  <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <ul className={`servcl-navbar__dropdown-menu ${activeDropdown === 'about' ? 'servcl-navbar__dropdown-menu--active' : ''}`}>
                {aboutDropdownItems.map((item, index) => (
                  <li key={index} className="servcl-navbar__dropdown-item">
                    <Link 
                      to={item.path} 
                      className={`servcl-navbar__dropdown-link ${location.pathname === item.path ? 'servcl-navbar__dropdown-link--active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Our Services Dropdown */}
            <li className="servcl-navbar__nav-item servcl-navbar__dropdown">
              <button
                className={`servcl-navbar__nav-link servcl-navbar__dropdown-toggle ${
                  location.pathname.startsWith('/services') ? 'servcl-navbar__nav-link--active' : ''
                }`}
                onClick={() => toggleDropdown('services')}
                aria-expanded={activeDropdown === 'services'}
              >
                Our Services
                <svg 
                  className={`servcl-navbar__dropdown-arrow ${activeDropdown === 'services' ? 'servcl-navbar__dropdown-arrow--rotated' : ''}`}
                  width="12" 
                  height="8" 
                  viewBox="0 0 12 8"
                >
                  <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <ul className={`servcl-navbar__dropdown-menu ${activeDropdown === 'services' ? 'servcl-navbar__dropdown-menu--active' : ''}`}>
                {servicesDropdownItems.map((item, index) => (
                  <li key={index} className="servcl-navbar__dropdown-item">
                    <Link 
                      to={item.path} 
                      className={`servcl-navbar__dropdown-link ${location.pathname === item.path ? 'servcl-navbar__dropdown-link--active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contact Us */}
            <li className="servcl-navbar__nav-item">
              <Link 
                to="/contact" 
                className={`servcl-navbar__nav-link ${location.pathname === '/contact' ? 'servcl-navbar__nav-link--active' : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
