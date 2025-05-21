import React from "react";
import "./CompanyOverview.css";
import waterImage from "./Img/b-1.jpg";
const CompanyOverview = () => {
  return (
    <div className="CompanyOverview">
      <div className="icon">
        <img src={waterImage} alt="this" width="140px" height={"140px"} />
      </div>
      <div className="content">
        <div className="heading">
          <h2>
            Your trusted suppliers of Industrial Valves, Flanges & Pipe Fittings
          </h2>
        </div>
        <div className="description">
          <p>
            <strong>MARBOOK HARDWARE TRADING LLC (Est.2016)</strong> is a
            division of Fakhri Group which was established in the year 2006.
          </p>
        </div>
        <div className="description">
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
  );
};

export default CompanyOverview;