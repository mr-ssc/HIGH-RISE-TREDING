import React from 'react';
import './Contact.css'; // Create this CSS file for styling
import Navbar from './Navbar';
import Footer from './Footer'
import contactImg from './Img/contact.png'

const Contact = () => {
  return (
    <>

      <Navbar />
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <div className='contact-img'>
          <img src={contactImg} alt='contact'></img>
        </div>

        <div className="contact-content">
          {/* Map Section (50%) */}
          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29060.245994591627!2d56.60351082067199!3d24.432364655480033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8b49173102fc45%3A0xff937577b9a6c341!2sFalaj%20Al%20Qaba&#39;il%2C%20Sohar%2C%20Oman!5e0!3m2!1sen!2sin!4v1747723286193!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

          {/* Contact Info Section (50%) */}
          <div className="contact-info-section">
            <h2>Feel free to reach out</h2>
            <p>For any kind of query, contact us with the details below.</p>

            <div className="contact-details">
              <p><strong>Contact No:</strong> +968-98128375</p>
              <p><strong>Email ID:</strong> highrisetrade72@gmail.com</p>
              <p><strong>Location:</strong> 161 5-A/Falaj Al Qabail, Sohar, Sultan of Oman, Po Box No. 322</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
};

export default Contact;