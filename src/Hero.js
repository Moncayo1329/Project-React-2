import React from "react";
import image1 from '../src/Img/image1.png';
import image2 from '../src/Img/image2.png';
import image3 from '../src/Img/image3.png';
import image4 from '../src/Img/image4.png';
import image5 from '../src/Img/image5.png';
import image6 from '../src/Img/image6.png';
import image7 from '../src/Img/image7.png';
import image8 from '../src/Img/image8.png';

function Hero() {
  return (
    <section className="hero">
      <img src={image1} alt="Description of Img" />
      <img src={image2} alt="Description of Img" />
      <img src={image3} alt="Description of Img" />
      <img src={image4} alt="Description of Img" />
      <img src={image5} alt="Description of Img" />
      <img src={image6} alt="Description of Img" />
      <img src={image7} alt="Description of Img" />
      <img src={image8} alt="Description of Img" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
  );
}

export default Hero;

