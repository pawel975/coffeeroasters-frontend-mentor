import React from 'react';
import { AboutWrapper } from './About-styling';
import ImageHeroWhitecup from '../../assets/about/mobile/image-hero-whitecup.jpg'

function About() {
  return (
    <AboutWrapper>
      <div className="introduction">
        <img className="background" src={ImageHeroWhitecup} alt="" />
        <div className="description">
          <h1>About Us</h1>
          <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
