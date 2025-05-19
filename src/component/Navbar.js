import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from './Img/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "brand", name: "Our Brand" },
    { id: "products", name: "Our Products" },
    { id: "indestrice", name: "Indestrice" },
    { id: "download", name: "Download" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <motion.img 
              src={logo} 
              alt="Logo" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <motion.li 
              key={link.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${link.id}`} 
                className={activeLink === link.id ? "active" : ""}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.name}
                {activeLink === link.id && (
                  <motion.span 
                    className="underline"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <motion.div 
            className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
            animate={mobileMenuOpen ? "open" : "closed"}
            variants={{
              closed: { rotate: 0 },
              open: { rotate: 180 }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </div>

        {/* Search */}
        <div className="navbar-search">
          {searchOpen ? (
            <motion.div 
              className="search-box"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              exit={{ opacity: 0, width: 0 }}
            >
              <input type="text" placeholder="Search..." />
              <FaTimes onClick={toggleSearch} />
            </motion.div>
          ) : (
            <motion.a 
              href="#search" 
              onClick={toggleSearch}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaSearch />
            </motion.a>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <ul>
          {navLinks.map((link) => (
            <motion.li 
              key={link.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: mobileMenuOpen ? 0 : -20,
                opacity: mobileMenuOpen ? 1 : 0
              }}
              transition={{ delay: 0.1 * navLinks.indexOf(link) }}
            >
              <a 
                href={`#${link.id}`} 
                className={activeLink === link.id ? "active" : ""}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;