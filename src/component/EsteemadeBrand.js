import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import "./EsteemadeBrand.css";
import brand1 from "./Img/b-1.jpg"
import brand2 from "./Img/b-2.jpg"
import brand3 from "./Img/b-3.jpg"
import brand4 from "./Img/b-4.jpg"
import brand5 from "./Img/b-5.jpg"
import brand6 from "./Img/b-6.jpg"
import brand7 from "./Img/b-7.jpg"
import brand8 from "./Img/b-8.jpg"
import brand9 from "./Img/b-9.jpg"
import brand10 from "./Img/b-10.jpg"
import brand11 from "./Img/b-11.png"
import brand12 from "./Img/b-12.jpg"
import brand13 from "./Img/b-13.jpg"
import brand14 from "./Img/b-14.jpg"
import brand15 from "./Img/b-15.jpg"

const images = [
  brand1, brand2, brand3, brand4, brand5, brand6, brand7, 
  brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15 
];

const VISIBLE_ITEMS = 5; // Number of items to show at once
const AUTO_PLAY_INTERVAL = 3000; // 3 seconds

const EsteemadeBrand = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayTimer = useRef(null);

  const total = images.length;

  const next = () => {
    setIndex((prev) => (prev + 1) % (total - VISIBLE_ITEMS + 1));
    resetAutoPlay();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + (total - VISIBLE_ITEMS + 1)) % (total - VISIBLE_ITEMS + 1));
    resetAutoPlay();
  };

  const goToSlide = (i) => {
    setIndex(i);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
    if (isAutoPlaying) {
      autoPlayTimer.current = setInterval(next, AUTO_PLAY_INTERVAL);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimer.current = setInterval(next, AUTO_PLAY_INTERVAL);
    }
    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transition = "transform 0.5s ease";
      slider.style.transform = `translateX(-${index * (100 / VISIBLE_ITEMS)}%)`;
    }
  }, [index]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    resetAutoPlay();
  };

  return (
    <div className="About-esteemade-brand">
      <div className="About-esteemade-brand-child">
        <div className="About-esteemade-header">
          <h3>Our Esteemed Brands</h3>
          <div className="About-icon-wrapper"></div>
        </div>
        <div className="About-esteemade-content">
          <div className="About-esteemade-slider">
            <div className="About-brand-slider">
              <div className="About-slider-controls">
                <button onClick={prev}>⟨</button>
                <button onClick={next}>⟩</button>
              </div>

              <div className="About-slider-window">
                <div className="About-slider-track" ref={sliderRef}>
                  {images.map((src, i) => (
                    <div className="About-slide" key={i}>
                      <img src={src} alt={`brand-${i}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="About-slider-actions">
                <button 
                  className="About-auto-play-toggle" 
                  onClick={toggleAutoPlay}
                >
                  {isAutoPlaying ? '❚❚' : '▶'}
                </button>
              </div>

              <div className="About-dots">
                {Array.from({ length: total - VISIBLE_ITEMS + 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`About-dot ${index === i ? "About-active" : ""}`}
                    onClick={() => goToSlide(i)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="About-suppliers">
          <div className="About-text-content">
            <div className="About-first-box">
              <h4>
                Your trusted suppliers of Industrial Valves, Flanges & Pipe
                Fittings.
              </h4>
            </div>
            <div className="About-second-box">
              <div className="About-custom-button">
                <button>
                  <IoMdArrowDropright className="About-arrow-icon" /> Suppliers
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