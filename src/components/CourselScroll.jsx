import React, { useState, useRef } from "react";
import CourseCourselCards from "./CourseCourselCards";

const CourselScroll = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const carouselRef = useRef(null);
  const totalCards = 3; // Number of total cards in the carousel

  const handleCardClick = (index) => {
    setSelectedCard(index);
    scrollToCard(index);
  };

  const scrollToCard = (index) => {
    const cardWidth = carouselRef.current.offsetWidth;
    const scrollPosition = index * cardWidth;
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    setSelectedCard((selectedCard + 1) % totalCards);
    scrollToCard((selectedCard + 1) % totalCards);
  };

  const handlePrev = () => {
    setSelectedCard((selectedCard - 1 + totalCards) % totalCards);
    scrollToCard((selectedCard - 1 + totalCards) % totalCards);
  };

  return (
    <div className="relative">
      <div className="w-1/6 h-80 bg-red-400 m-10">

        <button
          onClick={handlePrev}
          className=" bg-green-600 text-slate-600 p-2 rounded-full mx-auto border  "
          >
          &lt; text test
        </button>
            </div>
      <div className="border border-red-500 p-10 overflow-hidden w-full">
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          &gt;
        </button>
        <div
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${selectedCard * 33.33}%)` }} // Adjust the percentage value to control the scroll amount
        >
          <CourseCourselCards
            className={`mx-4 ${selectedCard === 0 ? "highlighted" : "blur-s"}`}
            onClick={() => handleCardClick(0)}
          />
          <CourseCourselCards
            className={`mx-4 ${selectedCard === 1 ? "highlighted" : "blur-s"}`}
            onClick={() => handleCardClick(1)}
          />
          <CourseCourselCards
            className={`mx-4 ${selectedCard === 2 ? "highlighted" : "blur-s"}`}
            onClick={() => handleCardClick(2)}
          />
        </div>
      </div>
    </div>
  );
};

export default CourselScroll;
