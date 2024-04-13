import React, { useState, useEffect } from 'react';

import image1 from '../assets/ScottyBsLEDpics/397174942_755909426551365_5093732429376647298_n.jpeg';
import image2 from '../assets/ScottyBsLEDpics/347252399_609176484305702_8775168318958265041_n.jpeg';
import image3 from '../assets/ScottyBsLEDpics/347245646_670650481743927_8636533554187780558_n.jpeg';
import image4 from '../assets/ScottyBsLEDpics/275062851_1391287971331075_4071023154152937358_n.jpeg';
import image5 from '../assets/ScottyBsLEDpics/274942194_1389449628181576_6460728541483282972_n.jpeg';
// import image6 from '../assets/ScottyBsLEDpics/263577144_1334111783715361_3815705391545149683_n.jpeg';
// import image7 from '../assets/ScottyBsLEDpics/263073187_1334129233713616_6661931121996565812_n.jpeg';
// import image8 from '../assets/ScottyBsLEDpics/257306399_1322592651533941_8966301292416175716_n.jpeg';
import image9 from '../assets/ScottyBsLEDpics/257124754_1322630461530160_147332498102588651_n.jpeg';

const images = [image1, image2, image3, image4, image5, image9];

const PhotoCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change the current image every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-linear ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item
          >
            <img src={image} className="w-full h-full object-cover object-center" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
      </button>
    </div>
  );
};

export default PhotoCarousel;

