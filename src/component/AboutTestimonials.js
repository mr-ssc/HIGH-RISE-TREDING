import React from "react";
import "./AboutTestimonials.css";
import vision from "./Img/vision_2421371.png";
import value from "./Img/value-proposition_18275401.png";
import mission from "./Img/target_3234841.png";

const AboutTestimonials = () => {
  return (
    <div className="about-testimonials">
      <div className="box">
        <div className="image-wrapper">
          <img src={mission} alt="" />
        </div>
        <div className="description">
          <h4>Mission</h4>
          <h6>
            Our mission is to provide durable hardware products to our clients.
            We aim to be the ideal choice Marine Hardware store for our
            customers and become the most reliable partner for our suppliers to
            ensure we achieve our goal of operating globally.
          </h6>
        </div>
      </div>
      <div className="box">
        <div className="image-wrapper">
          <img src={vision} alt="" />
        </div>
        <div className="description">
          <h4>Vision</h4>
          <h6>To be the leading supplier of Marine Hardware globally.</h6>
        </div>
      </div>
      <div className="box">
        <div className="image-wrapper">
          <img src={value} alt="" />
        </div>
        <div className="description">
          <h4>Values</h4>
          <h6>
            Our priority lies in giving customers value for their money. We do
            not compromise on quality as we believe the Marine Industry is
            crucial and we only desire to be known only like the best.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonials;