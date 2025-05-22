import React from 'react';
import hero from "./Img/hero.png";
import hero2 from "./Img/hero-2.png";
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            {/* Main Hero Image - Full Width */}
            <div className='hero-main-image-wrapper'>
                <img 
                  src={hero} 
                  alt="Industrial valves and fittings" 
                  className='hero-main-image' 
                  loading="lazy"
                />
            </div>

            {/* Content Section - 60% text / 40% image */}
            <div className='hero-content-section'>
                <div className='hero-text-content'>
                    <div className="hero-heading-container">
                        <h2 className='hero-main-heading'>HIGH RISE TRADING</h2>
                        <h4 className='hero-subheading'>Your trusted suppliers of Industrial Valves, Flanges, Pipe Fittings, Camlock Couplings, Structural Steel and more UAE</h4>
                    </div>

                    <div className='hero-paragraphs'>
                        <p className='hero-text'>
                            Your trusted suppliers of Industrial Valves, Flanges, Pipe Fittings, Camlock Couplings, Structural Steel and more UAE. 15 years of experience & a proficient team of dedicated professionals, we are committed to quality products & excellent services.
                        </p>
                        <p className='hero-text'>
                            Our clientele includes government, semi government and private organizations in and around United Arab Emirates. Our accomplishments and reputation are purely being built upon highly effective, prompt and efficient services.
                        </p>
                        <p className='hero-text'>
                            We believe in ethical business practices with competitive pricing & no compromise to the quality and services of our products.
                        </p>
                    </div>
                </div>

                <div className='hero-side-image-wrapper'>
                    <img 
                      src={hero2} 
                      alt="Industrial products showcase" 
                      className='hero-side-image' 
                      loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;