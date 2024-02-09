import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TranslateVideoCards = () => {
  return (
    <div className="flex justify-center gap-x-10  text-center my-20">
      <div className="border-2 border-white rounded-lg px-4 py-12 w-1/4 hover:bg-white hover:text-violet-600 hover:scale-[99%] transition duration-300">
        <FontAwesomeIcon
          icon="fa-regular fa-paste"
          className="font-bold text-4xl"
        />
        <h1 className="font-bold text-xl mt-10">Paste Lecture Link</h1>
        <p className="w-2/3 mx-auto mt-2">
          Just copy your Lecture link form Youtube and Paste it here
        </p>
      </div>

      <div className="border-2 border-white rounded-lg px-4 py-12 w-1/4  hover:bg-white hover:text-violet-600 hover:scale-[99%] transition duration-300">
        <FontAwesomeIcon
          icon="fa-solid fa-gears"
          className="font-bold text-4xl"
        />
        
        <h1 className="font-bold text-xl mt-10">Processing</h1>
        <p className="w-2/3 mx-auto mt-2">
          We value your time. Our highly optimized server is working on it
        </p>
      </div>
      <div className="border-2 border-white rounded-lg px-4 py-12 w-1/4  hover:bg-white hover:text-violet-600 hover:scale-[99%] transition duration-300">
        <FontAwesomeIcon icon="fa-solid fa-tv" className="font-bold text-4xl" />
        <h1 className="font-bold text-xl mt-10">Get Your Translated Lecture</h1>
        <p className="w-2/3 mx-auto mt-2">
          Thank you for waiting, you can now play your translate lecture
        </p>
      </div>
    </div>
  );
};

export default TranslateVideoCards;
