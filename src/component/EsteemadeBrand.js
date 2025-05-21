import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import "./EsteemadeBrand.css";

const images = [
  "./Img/brand1.png",
  "./Img/brand2.png",
  "./Img/brand3.png",
  "./Img/brand4.png",
  "./Img/brand5.png",
  "./Img/brand6.png",
  "./Img/brand7.png",
];
const EsteemadeBrand = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const total = images.length;

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  return (
    <div className="esteemade-brand">
      <div className="esteemade-brand-child">
        <div className="esteemade-header">
          <h3>Our Esteemed Brands</h3>
          <div className="icon-wrapper"></div>
        </div>
        <div className="esteemade-content">
          <div className="esteemade-slider">
            <div className="brand-slider">
              <div className="slider-controls">
                <button onClick={prev}>⟨</button>
                <button onClick={next}>⟩</button>
              </div>

              <div className="slider-window">
                <div className="slider-track single" ref={sliderRef}>
                  {images.map((src, i) => (
                    <div className="slide single" key={i}>
                      <img src={src} alt={`brand-${i}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots per image */}
              <div className="dots">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`dot ${index === i ? "active" : ""}`}
                    onClick={() => setIndex(i)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="suppliers">
          <div className="text-content">
            <div className="first-box">
              <h4>
                Your trusted suppliers of Industrial Valves, Flanges & Pipe
                Fittings.
              </h4>
            </div>
            <div className="second-box">
              <div className="custom-button">
                <button>
                  <IoMdArrowDropright clas4name="arrow-icon" /> Suppliers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EsteemadeBrand