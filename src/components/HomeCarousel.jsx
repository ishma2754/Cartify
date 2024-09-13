import React, { useState } from "react";
import { slides } from "../utils/slides";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Image */}
      <img
        src={currentSlide.url}
        alt={`Slide`}
        className="w-full h-full object-contain rounded-2xl"
        loading="lazy"
      />
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="absolute bottom-4 flex justify-center w-full"></div>
    </div>
  );
};

export default HomeCarousel;

/*let slides = [
  {
    url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
  },
  {
    url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
  },
  {
    url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech-heaphone.jpg",
  },
  {
    url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
  },
  {
    url: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
  },
];

const HomeCarousel = () => {
  return (
    <div className="">
    
    </div>
  );
};

export default HomeCarousel;
*/

/*
 <div className="w-[60%] m-auto pt-11">
      <Carousel slides={slides} />
    </div>
*/
/*
<div className="relative max-w-screen-lg mx-auto px-4 py-8">
      <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
    </div>
*/
