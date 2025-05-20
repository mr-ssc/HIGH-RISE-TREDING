import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import logo from './Img/logo.png';
import { FaTimes } from "react-icons/fa"; // Import close icon

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && 
          !menuRef.current.contains(event.target) && 
          !buttonRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
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
              transition={{ duration: 0.2 }}
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
              transition={{ duration: 0.2 }}
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
                    initial={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
                    animate={{ 
                      background: [
                        'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                        'linear-gradient(90deg, #8b5cf6, #3b82f6)',
                        'linear-gradient(90deg, #3b82f6, #8b5cf6)'
                      ] 
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      layout: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-wrapper" ref={buttonRef}>
          <div 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
          >
            <motion.div 
              className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
              animate={mobileMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 }
                }}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7 }
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              ref={menuRef}
              className="mobile-menu-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Close Button */}
              <motion.button
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FaTimes size={24} />
              </motion.button>

              <ul>
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ 
                      delay: 0.1 * navLinks.indexOf(link),
                      duration: 0.3
                    }}
                  >
                    <a 
                      href={`#${link.id}`} 
                      className={activeLink === link.id ? "active" : ""}
                      onClick={() => handleLinkClick(link.id)}
                    >
                      {link.name}
                      {activeLink === link.id && (
                        <motion.span 
                          className="mobile-underline"
                          initial={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
                          animate={{ 
                            background: [
                              'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                              'linear-gradient(90deg, #8b5cf6, #3b82f6)',
                              'linear-gradient(90deg, #3b82f6, #8b5cf6)'
                            ] 
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;