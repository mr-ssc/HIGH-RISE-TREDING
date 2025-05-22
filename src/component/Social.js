import React from 'react';
import './Social.css';
import { FaInstagram, FaWhatsapp, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Social = () => {
  return (
    <div className="social-container">
      <div className="social-half">
        {/* Update this path to point to your PDF file in the public folder */}
        <a href="/catalouge.pdf" download className="pdf-download">
          <FiDownload className="pdf-icon" />
          <span>Download  Catalouge</span>
        </a>
      </div>
      <div className="social-half">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <FaFacebook />
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="social-icon google-maps">
            <FaMapMarkerAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;