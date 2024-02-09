import React, { useState, useRef } from "react";
import CourseCourselCards from "./CourseCourselCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseCoursel = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const carouselRef = useRef(null);
  const totalCards = 3; // Number of total cards in the carousel

  const handleCardClick = (index) => {
    setSelectedCard(index);
    scrollToCard(index);
  };

  //   const scrollToCard = (index) => {
  //     const cardWidth = carouselRef.current.offsetWidth;
  //     const scrollPosition = index * cardWidth;
  //     carouselRef.current.scrollTo({
  //       left: scrollPosition,
  //       behavior: "smooth",
  //     });
  //   };

  //   const handleNext = () => {
  //     setSelectedCard((selectedCard + 1) % totalCards);
  //     scrollToCard((selectedCard + 1) % totalCards);
  //   };

  //   const handlePrev = () => {
  //     setSelectedCard((selectedCard - 1 + totalCards) % totalCards);
  //     scrollToCard((selectedCard - 1 + totalCards) % totalCards);
  //   };

  const Coursel = () => {
    return (
      <div ref={carouselRef} className="flex my-20">
        <CourseCourselCards
          className={`mx-4 bg-blue-200 ${
            selectedCard === 0 ? "highlighted" : "hidden"
          }`}
          onClick={() => handleCardClick(0)}
        />
        <CourseCourselCards
          className={`mx-4 bg-green-200 ${
            selectedCard === 1 ? "highlighted" : "hidden"
          }`}
          onClick={() => handleCardClick(1)}
        />
        <CourseCourselCards
          className={`mx-4 bg-red-200 ${
            selectedCard === 2 ? "highlighted" : "hidden"
          }`}
          onClick={() => handleCardClick(2)}
        />
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="bg-violet-300 h-52 w-screen -translate-x-1/2 -translate-y-1/2 left-1/2  absolute -z-10 top-1/2"></div>

      <Coursel />

      <div className="flex justify-center gap-x-6 my-10">
        <FontAwesomeIcon
          icon={` ${
            selectedCard === 0 ? "fa-solid" : "fa-regular"
          } fa-circle-dot`}
          onClick={() => {
            handleCardClick(0);
          }}
        />
        <FontAwesomeIcon
          icon={` ${
            selectedCard === 1 ? "fa-solid" : "fa-regular"
          } fa-circle-dot`}
          onClick={() => {
            handleCardClick(1);
          }}
        />
        <FontAwesomeIcon
          icon={` ${
            selectedCard === 2 ? "fa-solid" : "fa-regular"
          } fa-circle-dot`}
          onClick={() => {
            handleCardClick(2);
          }}
        />
      </div>
    </div>
  );
};

export default CourseCoursel;
