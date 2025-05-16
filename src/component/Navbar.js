import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../component/Img/logo.png";
import { FaDownload, FaHeadset } from "react-icons/fa6";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if current route is a product page
  const isProductPage = [
    "/mechanical-products",
    "/macoga-expansion-joints",
    "/electrical-products",
    "/oil-gas-products",
    "/tubefit",
    "/valve-products",
    "/plumbing-materials",
    "/safety-items",
    "/sanitary-ware",
    "/plywood-items"
  ].some(route => location.pathname.startsWith(route));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  }, [location.pathname]);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown") && isProductsOpen) {
        setIsProductsOpen(false);
      }
    };

    if (isProductsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProductsOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        <div
          className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                <FaHome /> Home
              </Link>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => !isMobileMenuOpen && setIsProductsOpen(true)}
              onMouseLeave={() => !isMobileMenuOpen && setIsProductsOpen(false)}
            >
              <span
                onClick={toggleProducts}
                className={`dropdown-toggle ${isProductPage ? "active" : ""}`}
                aria-haspopup="true"
                aria-expanded={isProductsOpen}
              >
                <AiOutlineProduct />
                Products <span className="dropdown-arrow">▼</span>
              </span>
              <div className={`dropdown-content ${isProductsOpen ? "open" : ""}`}>
                <Link to="/mechanical-products">Mechanical Products</Link>
                <Link to="/macoga-expansion-joints">Macoga - Expansion Joints</Link>
                <Link to="/electrical-products">Electrical Products</Link>
                <Link to="/oil-gas-products">Oil and Gas Products</Link>
                <Link to="/tubefit">Tubefit</Link>
                <Link to="/valve-products">Valve Products</Link>
                <Link to="/plumbing-materials">Plumbing Materials</Link>
                <Link to="/safety-items">Safety Items</Link>
                <Link to="/sanitary-ware">Sanitary Ware</Link>
                <Link to="/plywood-items">Plywood Items</Link>
              </div>
            </li>

            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                <FaInfoCircle /> About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                <FaHeadset /> Contact
              </Link>
            </li>
            <li>
              <Link
                to="/download"
                className={location.pathname === "/download" ? "active" : ""}
              >
                <FaDownload /> Download
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;