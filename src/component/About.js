import React from "react";
import "./About.css";
import { div } from "framer-motion/client";
import CompanyOverview from "./CompanyOverview";
import CompanyInfo from "./CompanyInfo";
import AboutTestimonials from "./AboutTestimonials";
import CustomerSetisfaction from "./CustomerSetisfaction";
import EsteemadeBrand from "./EsteemadeBrand";
import InquirePage from "./InquirePage";
import Navbar from './Navbar';
import Footer from "./Footer"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="main-container">
          <div className="column-one">
            <h1 className="title">About Us</h1>
          </div>
        </div>
      </div>
      <CompanyOverview />
      <CompanyInfo />
      <AboutTestimonials />
      <CustomerSetisfaction />
      <EsteemadeBrand />
      <InquirePage />


      <Footer />
    </>
  );
};

export default About;