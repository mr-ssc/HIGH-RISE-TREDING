import React, { useState } from 'react';
import './Brand.css';
import Navbar from './Navbar';
import Footer from './Footer';
import brandimg from "./Img/brands.png";
import b1 from './Img/b-1.jpg';
import b2 from './Img/b-2.jpg';
import b3 from './Img/b-3.jpg';
import b4 from './Img/b-4.jpg';
import b5 from './Img/b-5.jpg';
import b6 from './Img/b-6.jpg';
import b7 from './Img/b-7.jpg';
import b8 from './Img/b-8.jpg';
import b9 from './Img/b-9.jpg';
import b10 from './Img/b-10.jpg';
import b11 from './Img/b-11.png';
import b12 from './Img/b-12.jpg';
import b13 from './Img/b-13.jpg';
import b14 from './Img/b-14.jpg';
import b15 from './Img/b-15.jpg';

const brandData = [
  {
    id: 1,
    image: b1,
    title: 'Welham Mass Group',
    subtitle: 'We are trusted sourcing partner of Welham group since last one decade.',
    description: 'We stock and supply at Welham Mass products from our warehousing facilities at Ajman, Abu Dhabi, Dubai and Sharjah',
    subdescription: '➡️ Visit Website',
    url: 'http://www.maassglobal.com/'

  },
  {
    id: 2,
    image:  b2,
    title: 'Bossini - Italy',
    subtitle: 'We are trusted sourcing partner of Bossini Valves since last one decade.',
    description: 'We stock and supply Boss - Brass Check Valves, Filter and Swing Check Valves, Brass Gate Valves, Brass Press, Brass Generic Fittings and more facilities at Ajman, Abu Dhabi, Dubai and Sharjah',
    subdescription: '➡️ Visit Website',
    url: "https://www.bossvalves.com/?lang=en"

  },
  {
    id: 3,
    image: b3,
    title: 'Bothwell',
    subtitle: 'We are trusted sourcing partner of Bothwell Steel Fittings - Taiwan',
    subdescription: '➡️ Visit Website',
    description: 'We import and stock range of Bothwell Steel Fittings Like - High Pressure Fittings- of Forged Carbon Alloy, Stainless Steel, Threaded SocketWeldand more from our facilities at Ajman, Abu Dhabi, Dubai and Shariah .',
    url: 'https://www.bothwell.com.tw/'
  },

  {
    id: 4,
    image: b4,
    title: 'Froch Enterprises',
    subtitle: 'We are trusted partners of Froch Enterprises - Taiwan in Dubai UAE',
    subdescription: '➡️ Visit Website',
    description: 'We stock and supply Froch - Quality Stainless Steel Pipes, Tubes, Sheets, and Coils.and more from our Warehouse facilities at Ajman, Abu Dhabi, Dubai and Shariah ',
    url: 'https://www.froch.com/ENG/index.php'
  },

  {
    id: 5,
    image: b5,
    title: 'YCINOX - Taiwan',
    subtitle: 'We are trusted partner of YCINOX - Taiwan since more then 15 years.',
    url: 'https://www.ycinox.com/',
    subdescription: '➡️ Visit Website',
    description: 'We stock and supply YCINOX - Welded Pipes, Welded Tubes, Angles, Sheets and Coils, U Channels, Flat Bars, Checkered Plates and more from our facilities at Ajman, Abu Dhabi, Dubai and Shariah'
  },
  {
    id: 6,
    image: b6,
    title: 'Jazeera Steel',
    subtitle: 'We work with Jazeera Steel since more then 9 years.',
    subdescription: '➡️ Visit Website',
    url: 'https://jazeerasteel.com/',
    description: 'We supply Jazeera Steels products in UAE like Hot Roll, Cold Roll sheets, Black Pipes, Galvanized Pipes, Hollow Sections, Merchant Bar Mill products and Rebars from our facilities at Ajman, Abu Dhabi, Dubai and Shariah',
  },
  {
    id: 7,
    image: b7,
    title: 'SA Brand',
    subtitle: 'We are working with SA Brand since more then 10 vears.',
    description: 'We stock and supply Welded Pipes, Welded Tubes, Angles, Sheets and Coils, U Channels, Flat Bars, Checkered Plates and more from our facilities at Ajman, Abu Dhabi, Dubai and Shariah',
  },
  {
    id: 8,
    image: b8,
    title: 'TA Chen',
    subtitle: 'We are trusted partner of TA Chen since more then 15 years.',
    subdescription: '➡️ Visit Website',
    description: 'We stock and supply TA Chen - Stainless Angle, Stainless Unequal Angle, Stainless Beam, Stainless Channel, Stainless Tee Bar Class Stainless True Flat Bar, Stainless Flanges, Stainless Nipples, Stainless Seamless Nipples, Stainless Forged Fittings and more from our facilities at Ajman, Abu Dhabi, Dubai and Shariah',
    url: 'https://www.tachen.com/'
  },
  {
    id: 9,
    image: b9,
    title: 'Surya - India',
    subtitle: 'We are trusted partner of Surya India since more then 15 years.',
    subdescription: '➡️ Visit Website',
    url: 'https://www.suryasteel.net/',
    description: 'We stock and supply Surya Steel - Ferrous Metals and Non-Ferrous Metals, Stainless Steel & C.S. & M.S. Pipes, Plates, Sheets, Rods, Bars,Strips, Angles, Channel,Beam, Wires, Coil,etc and more from our facilities at Ajman, Abu Dhabi, Dubai and Shariah',
  },
  {
    id: 10,
    image: b10,
    title: 'Pegler Valves - England CIK',
    subtitle: 'We import and stock world renowned Pegler Valves since more then IO years.',
    subdescription: '➡️ Visit Website',
    description: 'We have complete range of Pegler Valves - Ball Valves, Butterfly Vales, Gate Valves, Commercial Radiator Valves, Check Valves, Globe Valves, Strainers and Drain cocks, Pressure Reducing Valves, Plumbing Valves, Thermostatic mixing Valves and more from our facilities at Aiman, Abu Dhabi, Dubai and Shariah',
    url: 'https://aalberts-ips.co.uk/products/pegler-valve/',
  },
  {
    id: 11,
    image: b11,
    title: 'SPI - USA',
    subtitle: 'We are leading importer of SPI - USA since more then 7 years.',
    subdescription: '➡️ Visit Website',
    url: 'https://www.stainless-products.com/',
    description: 'We stock and supply SPI - Ferrules, Reducers, Adapters, Elbows, Tees and Cross, Laterals, End Caps, Clams & Gaskets, U bends and Y Elbows and more from our facilities at Ajman, Abu Dhabi, Dubai and Shariah',
  },
  {
    id: 12,
    image: b12,
    title: 'Viral India',
    subtitle: 'We are partner of Viraj - India since more then 10 years.',
    subdescription: '➡️ Visit Website',
    url: 'https://www.viraj.com/',
    description: 'We stock and supply Viraj - Stainless Steel Wire Rods, Stainless Steel Wires, Stainless Steel Fasteners, Stainless Steel Bright Bars, Stainless Steel Profiles and Stainless Steel Flanges in various grades and sizes.from our facilities at Ajman, Abu Dhabi, Dubai and Shariah',
  },
  {
    id: 13,
    image: b13,
    title: 'IDD Tong - Shandong',
    subtitle: 'We are trusted partner of 100 Tong - Shandong since more then 11 years.',
    subdescription: '➡️ Visit Website',
    url:'https://en.100-tong.com/',
    description: 'We stock and supply 100 Tong - Grooved Pipe Fittings, Valves, Casting Parts, Pipe Fittings and more from our facilities at Aiman, Abu Dhabi, Dubai and Shariah',
  },
  {
    id: 14,
    image: b14,
    title: 'Valve Tek - Taiwan',
    subtitle: 'We are trusted partner of Valve Tek - Taiwan since more then 8 years.',
    subdescription: '➡️ Visit Website',
    url:'https://www.thevalvetek.com/',
    description: 'We stock and supply Valve Teks - Ball Valves, Pipe Fittings, Valve Balls, Investment Castings, Gate / Globe / Check Valves, Sanitary Valves, Y- Strainers and Others, Dielectric Pipe Fittings and more from our facilities at Ajman, Abu Dhabi, Dubai and Shariah',
  },
  {
    id: 15,
    image: b15,
    title: 'Benkan -Ja an',
    subtitle: 'We are trusted partner of Benkan- Japan since more then 10 years.',
    subdescription: '➡️ Visit Website',
    url:'https://www.benkan.co.jp/en/',
    description: 'We stock and supply Benkan - Heavy and Light Gauge Stainless Steel Tubes, Stainless Steel Pipes, Insulation Flanges and more from our facilities at Ajman, Abu Dhabi, Dubai and Shariah',
  }
];

const Brand = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleBrands = showAll ? brandData : brandData.slice(0, 6);

  return (
    <>
      <Navbar />
      <div className="brand-container">
        <h1 className="brand-title">Our Brands</h1>
        <div className='brand-hero-img'>
          <img src={brandimg} alt="Our Brands" />
        </div>
        <div className="brand-grid">
          {visibleBrands.map((brand) => (
            <div className="brand-card" key={brand.id}>
              <a href={brand.url} target="_blank" rel="noopener noreferrer" className="brand-link">
                <div className="brand-img-container">
                  <img src={brand.image} alt={brand.title} className="brand-img" />
                </div>
                <div className="brand-content">
                  <h2 className="brand-name">{brand.title}</h2>
                  <h4 className="brand-subtitle">{brand.subtitle}</h4>
                  <p className="brand-description">{brand.description}</p>
                  {brand.url && <p className="brand-link-text">{brand.subdescription}</p>}
                </div>
              </a>
            </div>
          ))}
        </div>

        {!showAll && brandData.length > 6 && (
          <div className="see-all-container">
            <button className="see-all-btn" onClick={() => setShowAll(true)}>
              See All Brands
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Brand;