import React from "react";
import "./CompanyOverview.css";
import waterImage from "./Img/logo-2.png";

const CompanyOverview = () => {
  return (
    <div className="company-overview-container">
      <div className="company-overview">
        <div className="icon" data-aos="fade-right" data-aos-duration="1000">
          <img 
            src={waterImage} 
            alt="Company Logo" 
            className="company-logo"
          />
        </div>
        <div className="content">
          <div className="heading" data-aos="fade-up" data-aos-duration="1000">
            <h2>
              Your trusted suppliers of Industrial Valves, Flanges & Pipe Fittings
            </h2>
          </div>
          <div 
            className="description" 
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p>
              <strong>HIGH RISE TRADING</strong> 
            </p>
          </div>
          <div 
            className="description" 
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <p>
              With 15 years of experience & a proficient team of dedicated
              professionals, we are committed to quality products & excellent
              services. We are importers, stockist & distributors of all types of
              Flanges, B/W Fittings, High Pressure Threaded Fittings, Industrial &
              Marine Valves suitable for various applications. In addition to
              these products, we are also dealing into Building Materials &
              Structural Steel on a good scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;