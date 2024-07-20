import React from 'react';
import './Poster.css';
import Bannnerbot from "./tiffinwala banner.jpg"
const images = [
  { src: 'path/to/image1.jpg', alt: 'Image 1' },
  { src: 'path/to/image2.jpg', alt: 'Image 2' },
  { src: 'path/to/image3.jpg', alt: 'Image 3' },
  // Add more images as needed
];

const PosterWithBlinkingBorder = () => {
  return (
    <div className="poster-container">
    <div className="poster-item">
      <img src={Bannnerbot} alt="Tiffinwala Banner" className="blinking-border" />
    </div>
  </div>
  );
};

export default PosterWithBlinkingBorder;
