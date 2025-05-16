import React, { useState } from 'react';
import './Navbar.css';
import logo from './Img/logo.png'; // Update with your logo path

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            
            <li className="dropdown" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
              <span onClick={toggleProducts}>Products ▼</span>
              {isProductsOpen && (
                <div className="dropdown-content">
                  <a href="/mechanical-products">Mechanical Products</a>
                  <a href="/macoga-expansion-joints">Macoga - Expansion Joints</a>
                  <a href="/electrical-products">Electrical Products</a>
                  <a href="/oil-gas-products">Oil and Gas Products</a>
                  <a href="/tubefit">Tubefit</a>
                  <a href="/valve-products">Valve Products</a>
                  <a href="/plumbing-materials">Plumbing Materials</a>
                  <a href="/safety-items">Safety Items</a>
                  <a href="/sanitary-ware">Sanitary Ware</a>
                  <a href="/plywood-items">Plywood Items</a>
                </div>
              )}
            </li>
            
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;