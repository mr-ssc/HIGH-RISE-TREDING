import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Img/logo.png';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Set active link based on current path
    setActiveLink(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown') && isProductsOpen) {
        setIsProductsOpen(false);
      }
    };

    if (isProductsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductsOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>
        
        <div 
          className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={activeLink === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            
            <li 
              className="dropdown" 
              onMouseEnter={() => !window.matchMedia('(max-width: 768px)').matches && setIsProductsOpen(true)} 
              onMouseLeave={() => !window.matchMedia('(max-width: 768px)').matches && setIsProductsOpen(false)}
            >
              <span 
                onClick={() => {
                  if (window.innerWidth <= 768) {
                    setIsProductsOpen(!isProductsOpen);
                  }
                }}
                className={activeLink.startsWith('/mechanical-products') || 
                           activeLink.startsWith('/macoga-expansion-joints') ||
                           activeLink.startsWith('/electrical-products') ||
                           activeLink.startsWith('/oil-gas-products') ||
                           activeLink.startsWith('/tubefit') ||
                           activeLink.startsWith('/valve-products') ||
                           activeLink.startsWith('/plumbing-materials') ||
                           activeLink.startsWith('/safety-items') ||
                           activeLink.startsWith('/sanitary-ware') ||
                           activeLink.startsWith('/plywood-items') ? 'active' : ''}
              >
                Products <span className="dropdown-arrow">▼</span>
              </span>
              <div className={`dropdown-content ${isProductsOpen ? 'open' : ''}`}>
                <Link to="/mechanical-products" onClick={closeMobileMenu}>Mechanical Products</Link>
                <Link to="/macoga-expansion-joints" onClick={closeMobileMenu}>Macoga - Expansion Joints</Link>
                <Link to="/electrical-products" onClick={closeMobileMenu}>Electrical Products</Link>
                <Link to="/oil-gas-products" onClick={closeMobileMenu}>Oil and Gas Products</Link>
                <Link to="/tubefit" onClick={closeMobileMenu}>Tubefit</Link>
                <Link to="/valve-products" onClick={closeMobileMenu}>Valve Products</Link>
                <Link to="/plumbing-materials" onClick={closeMobileMenu}>Plumbing Materials</Link>
                <Link to="/safety-items" onClick={closeMobileMenu}>Safety Items</Link>
                <Link to="/sanitary-ware" onClick={closeMobileMenu}>Sanitary Ware</Link>
                <Link to="/plywood-items" onClick={closeMobileMenu}>Plywood Items</Link>
              </div>
            </li>
            
            <li>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={activeLink === '/about' ? 'active' : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className={activeLink === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;