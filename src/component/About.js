import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import CompanyOverview from "./CompanyOverview";
import CompanyInfo from "./CompanyInfo";
import AboutTestimonials from "./AboutTestimonials";
import CustomerSetisfaction from "./CustomerSetisfaction";
import EsteemadeBrand from "./EsteemadeBrand";
import InquirePage from "./InquirePage";
import Navbar from './Navbar';
import Footer from "./Footer";
import abg from "./Img/about-bg.png";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Animation */}
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay"></div>
        <img 
          src={abg} 
          alt="About background" 
          className="hero-image"
        />
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1>About Us</h1>
          <p>Discover our story and what makes us unique</p>
        </motion.div>
      </motion.div>

      {/* Main Content with Staggered Animations */}
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <CompanyOverview />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <CompanyInfo />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <AboutTestimonials />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <CustomerSetisfaction />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <EsteemadeBrand />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <InquirePage />
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default About;