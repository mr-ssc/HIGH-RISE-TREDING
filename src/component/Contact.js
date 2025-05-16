import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      location: ''
    });
  };

  return (
    <>

    <Navbar/>
    <div className='contact'>
    <div className="light-mode">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-title">Contact Us</h2>

        <div className="form-group">
          <label className="form-label"><FaUserAlt /> Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label"><MdEmail /> Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label"><FaPhone /> Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label"><MdMessage /> Description:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input form-textarea"
            required
          />
          <button type="submit" className="submit-btn">Send Message</button>
        </div>
      </form>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.4791385076837!2d56.60282717513767!3d24.434156478209974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8b493fbfb121bd%3A0x66271be1b0821f22!2sHigh%20Rise%20Trading!5e0!3m2!1sen!2sin!4v1747381196699!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
    </div>

    <Footer/>

    </>
  );
}

export default Contact;