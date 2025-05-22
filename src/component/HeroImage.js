import React from 'react';
import hero from "./Img/hero.png";
import hero2 from "./Img/hero-2.png";
import './HeroImage.css'; // Create this CSS file

const HeroImage = () => {
    return (
        <div className='hero-container'>
            <div className='hero-main-image'>
                <img src={hero} alt="Industrial valves and fittings" className='hero-img' />
            </div>

            <div className='hero-content'>
                <div className='hero-content-left'>
                    <h2 className='hero-heading'>HIGH RISE TRADING</h2>
                    <h2 className='hero-subheading'>Your trusted suppliers of Industrial Valves, Flanges, Pipe Fittings, Camlock Couplings, Structural Steel and more UAE</h2>

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

                <div className='hero-content-right'>
                    <img src={hero2} alt="Industrial products showcase" className='hero-side-image' />
                </div>
            </div>
        </div>
    )
}

export default HeroImage;