import React, { useState } from "react";
import Button from "../components/Button";
import TranslateVideoCards from "../components/translateVideoCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourceCourselCards from "../components/CourseCourselCards";
import CourseCoursel from "../components/CourseCoursel";
import axios from "axios";
import TranslateSection from "../components/TranslateSection";
const HomePage = () => {


  return (
    <div>
      {/* Hero section */}
      <section className="flex justify-between items-center">
        <div className="container w-1/2">
          <h1 className="text-6xl font-bold mb-6">
            Bridging Language Gaps in Education
          </h1>
          <p className="text-xl">
            Translate YouTube lectures from English to Punjabi seamlessly.
          </p>
          <a href="#translate-section">
            <Button className={"mt-20"} color={""} text={"Translate Now"} />
          </a>
        </div>
        <dir>
          <img src={"hero-vectors.png"} alt="hero-img" />
        </dir>
      </section>

      {/* Video translation section */}
      <section
        className="py-10 bg-violet-600 text-white"
        id="translate-section"
      >
        <h1 className="text-center font-bold text-2xl">
          Simple Steps to Translate Your Lecture
        </h1>
        <TranslateVideoCards />
        <TranslateSection/>
    
      </section>

      <section className="my-32 flex flex-col items-center">
        <h1 className="font-bold text-3xl text-center text-slate-600">
          {" "}
          Pre-Translated Courses
        </h1>
        <p className="text-center w-1/2 mt-2">
          {" "}
          Top trending courses world wide from renowned instructors now in
          Punjabi and other regional languages
        </p>
        <CourseCoursel />
        <a href="/courses">
          <Button
            text={"View Courses"}
            color={"white"}
            className={"border border-slate-600"}
          />
        </a>
      </section>

      <section>
        <div className="bg-violet-600 text-white rounded-lg w-5/6 p-10 mx-auto flex justify-between relative">
          <div>
            <h1 className="font-bold text-4xl">Are you an Instructor ?</h1>
            <ul className="my-10 text-lg">
              <li className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon="fa-solid fa-check-double" />{" "}
                <p>Increase your Reach and sell your course</p>{" "}
              </li>
              <li className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon="fa-solid fa-check-double" />{" "}
                <p>Get your course translated with one click</p>{" "}
              </li>
              <li className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon="fa-solid fa-check-double" />{" "}
                <p>Why one language audience if you can target multiple</p>{" "}
              </li>
            </ul>
            <a href="/for-instructors">
              <Button text={"Sell Now"} color={"white"} />
            </a>
          </div>
          <div className=" absolute bottom-0 right-2 w-1/2">
            <img src={"red-sweater-girl.png"} className="" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
