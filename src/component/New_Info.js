import React from 'react';
import './New_Info.css';
import vecter1 from "./Img/vecter-1.png";
import vecter2 from "./Img/vecter-2.png";

const New_Info = () => {
  return (
    <div className="Home-info-container">
      <h1 className="Home-main-heading">Product Information</h1>
      <p className="Home-sub-heading">
        HIGH RISE TRADING Is a pioneer in best quality threaded pipe fittings from China, Taiwan and Germany. 
        Our dedicated warehousing and logistics support can fulfill any sourcing requirements across UAE - Dubai, 
        Abu Dhabi, Ajman, Sharjah, Nearby Gulf and African countries.
      </p>

      <div className="Home-card-wrapper">
        <div className="Home-info-card">
          <img src={vecter1} alt="Product 1" className="Home-info-image" />
          <h3 className="Home-card-title">Flange Dimensions</h3>
          <a href="/product1" className="Home-card-link">Please check Flange dimensions as per your requirements</a>
        </div>

        <div className="Home-info-card">
          <img src={vecter2} alt="Product 2" className="Home-info-image" />
          <h3 className="Home-card-title">Pipe Schedules</h3>
          <a href="/product2" className="Home-card-link">Please click to check pipe schedules</a>
        </div>
      </div>
    </div>
  );
};

export default New_Info;
