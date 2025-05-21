import React from 'react'
import "./CompanyInfo.css";
import PipesImg from "./Img/closeup-view-cylindrical-grinder-industrial-concept.jpg";
const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div className="Infoimage">
        <img src={PipesImg} alt="" width={"788px"} height={"500px"} />
      </div>

      <div className="company-info-content">
        <h1>Our Company Information</h1>
        <div className="company-info-text">
          <div className="texts">
            <p>
              Our clientele includes government, semi government and private
              organizations in and around United Arab Emirates. Our
              accomplishments and reputation are purely being built upon highly
              effective, prompt and efficient services along with superior
              quality products from leading manufactures, which remain as our
              big asset and key to sustenance in this competitive market. We
              believe in ethical business practices with competitive pricing &
              no compromise to the quality and services of our products.
            </p>
          </div>
          <div className="texts">
            <p>
              We request your good establishment to provide us with a chance to
              serve your requirements in best of our abilities. We are always
              striving hard towards building a strong & flourishing business
              relation with our clients & thus we assure you that all your calls
              and enquiries are very important to us, which will be attended
              with utmost care and priority.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-center">
        <div className="bg-img-line"></div>
      </div>
    </div>
  )
}

export default CompanyInfo