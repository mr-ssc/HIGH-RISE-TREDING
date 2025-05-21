import React from 'react';
import './Industries.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import i1 from "./Img/i-1.png"
import i2 from "./Img/i-2.png"
import i3 from "./Img/i-3.png"
import i4 from "./Img/i-4.png"

const industriesData = [
  {
    id: 1,
    title: 'Oil and Petroleum Industry',
    subtitle: 'At High Rise Trading we have complete solution for Oil Industry',
    description: 'We have specialised Valves for Oil Fire safety and control, Valves for Water supply, drainage and control, complete range of Valves and Fittings for petroleum products, chemicals management and more. Our Piping and Tubing products and solutions are ideal for Petroleum industry, where all the flow, maintenance, drainage and processing can be handled by our product range.',
    image: i1,
    link: '/Products',
    reverse: false,
    subdescription: '➡️ View More',
  },
  {
    id: 2,
    title: 'Drainage, Plumbing, Sewage Solutions',
    subtitle: 'At High Rise Trading  we have complete solution for Drainage and Plumbing.',
    description: 'We stock complete GI Pipes, MS Pipes, Stainless Steel Pipes, cPVC and uPVC piping range, which are ideal for drainage and plumbing (Both hot and cold water) Big construction projects prefer us for our vast domain knowledge and consulting capabilities for Plumbing and Sewage projects.',
    image: i2,
    link: '/Products',
    reverse: true,
    subdescription: '➡️ View More',

  },
  {
    id: 3,
    title: 'Electricity and Power Distribution',
    subtitle: 'At High Rise Trading we have complete solution for Power Distribution Grids.',
    description: 'We stock complete range of Grooved Pipes and Fittings, Piping Systems for managing and distribution of power including Steel and Plastic composite pipes, Coated steel plastic pipes, Cabe protection sleeves and more, we are preffered suppliers across UAE, Dubai , Sharjah, Ajman',
    image: i3,
    link: '/Products',
    reverse: false,
    subdescription: '➡️ View More',

  },
  {
    id: 4,
    title: 'Construction Industry',
    subtitle: 'At High Rise Trading we have complete solution for Turnkey Construction Projects.',
    description: 'We stock complete range of Construction Steel materials, our top selling products are SS Channels, MS Channels, MS Beams, SS Tubes, Angles, Flat Bars, Hollow Tubes, SS Round Bars and more, Get in Touch with us today to know more about how we can partner with you and make your project success.',
    image: i4,
    link: '/Products',
    reverse: true,
    subdescription: '➡️ View More',

  },
];

const Industries = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <>

      <Navbar />
      <div className="industries">
        <h2 className="industries-heading">Our Industries</h2>
        {industriesData.map((industry) => (
          <div
            key={industry.id}
            className={`industry-container ${industry.reverse ? 'reverse' : ''}`}
            onClick={() => handleNavigate(industry.link)}
            style={{ cursor: 'pointer' }}
          >
            <div className="industry-image">
              <img src={industry.image} alt={industry.title} />
            </div>
            <div className="industry-content">
              <h3>{industry.title}</h3>
              <h4>{industry.subtitle}</h4>
              <p>{industry.description}</p>
              <p className="brand-link-text">{industry.subdescription}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />

    </>
  );
};

export default Industries;
