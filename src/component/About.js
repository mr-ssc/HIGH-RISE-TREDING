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
      <section className="comapny-overview">
        <CompanyOverview />
      </section>
      <section className="company-info">
        <CompanyInfo />
      </section>
      <section className="about-testimonials">
        <AboutTestimonials />
      </section>
      <section className="CustomerSetisfaction">
        <CustomerSetisfaction />
      </section>
      <section className="esteemade-brand-container">
        <EsteemadeBrand />
      </section>
      <section className="inquire-container">
        <InquirePage />
      </section>

      <Footer />
    </>
  );
};

export default About;