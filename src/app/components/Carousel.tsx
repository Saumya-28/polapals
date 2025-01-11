
'use client';

import React, { FC, useState } from "react";
import { PexelsResponse, PexelsPhoto } from "../api/models/apiResponse";
import { MoviePhoto } from "../api/models2/movieResponse";
import { HitArray } from "../api/model3/pixarResponse";
type CarouselItem = {
  image: string;
  alt?: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

type PuppyItem={
  name: string;
  image: string;
  description: string;
};

type PuppyProps={
   propele:   HitArray[];
};


const Carousel: FC<PuppyProps> = ({ propele }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % propele.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? propele.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-[40%] h-[50%] max-w-4xl mx-auto">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {propele.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <img
                src={item.largeImageURL}
                alt={item.type|| `Slide ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {propele.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};










export default Carousel;
