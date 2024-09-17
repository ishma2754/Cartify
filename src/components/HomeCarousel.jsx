import React, { useState } from "react";
import { slides } from "../constants/links.js";
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
    <div className="relative  w-full h-80 md:h-96 flex items-center justify-center overflow-hidden bg-transparent">
      {/* Image */}
      <div className="absolute inset-0 dark:bg-gray-100 rounded-2xl">
      <img
        src={currentSlide.url}
        className="w-full h-full object-contain rounded-2xl" 
        loading="lazy"
      />
    </div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/40 text-white dark:bg-gray-600 dark:text-gray-800 hover:bg-black/60 dark:hover:bg-gray-800 transition-colors cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/40 text-white dark:bg-gray-600 dark:text-gray-800 hover:bg-black/60 dark:hover:bg-gray-800 transition-colors cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default HomeCarousel;
