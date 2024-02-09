import React, { useState } from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const TranslateSection = () => {
  const [videoLink, setVideoLink] = useState("");
  const [buttonText, setButtonText] = useState("View & translate");
  const [showVideo, setShowVideo] = useState(false);
  const [embedURL, setEmbedURL] = useState("");
  const [videoDuration, setVideoDuration] = useState(0);
  const [showAzureVideo, setshowAzureVideo] = useState(false);
  const [azureVideo, setAzureVideo] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  const resetStates = () => {
    setshowAzureVideo(false);
    setVideoLink("");
    setButtonText("View & translate");
    setShowVideo(false);
    setEmbedURLuseState("");
  };

  const handleInputChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleButtonClick = () => {
    if (buttonText === "View & translate") {
      setButtonText("Translate");
      setShowVideo(true);
      setshowAzureVideo(false);
      // Extract video ID from the link and construct embed URL
      const videoId = extractVideoId(videoLink);
      setEmbedURL(`https://www.youtube.com/embed/${videoId}`);
    } else if (
      buttonText === "Translate" ||
      buttonText === "Click to Translate"
    ) {
      setShowVideo(false);
      setshowAzureVideo(true);
      getTranslateVideo(videoLink);
      console.log("Translate video:", videoLink);
    }
  };

  const getTranslateVideo = async (videoLink) => {
    try {
      const authToken = "Bearer " + localStorage.getItem("token");
      const config = {
        headers: {
          authorization: authToken,
          email: localStorage.getItem("email"),
          id: localStorage.getItem("id"),
        },
      };
      const payLoad = {
        youtubeVideoLink: videoLink,
      };
      setIsProcessing(true);

      const response = await axios
        .post("/api/translateVideo", payLoad, config)
        .then(
          (response) => {
            setIsProcessing(false);
            console.log(response);
            setAzureVideo(response.data);
            localStorage.setItem("credits", response.data.credits);
          },
          (err) => {
            if (err.response.status == 401) {
              console.log("not authorized");
              setLoggedIn(false);
            }
          }
        );
    } catch (err) {}
  };
  const extractVideoId = (link) => {
    if (link.includes("/shorts/")) {
      // Handle YouTube shorts
      return link.split("/shorts/").pop();
    } else {
      // Handle regular YouTube video
      const regex = /[?&]([^=#]+)=([^&#]*)/g;
      let match;
      while ((match = regex.exec(link)) !== null) {
        if (match[1] === "v") {
          return match[2];
        }
      }
    }
    return "";
  };

  return (
    <div>
      {!loggedIn && <Navigate to="/login" />}

      <h1 className="font-bold text-xl text-center my-4 animate-pulse">
        Paste Your Youtube Lecture Link Here
      </h1>
      <p className="text-center text-sm mb-4">(Video longer than 4min will consume alot of time)</p>

      <div className="flex justify-center w-2/3 mx-auto gap-x-8">
        <input
          type="text"
          className="w-full text-violet-900  rounded-md px-4 py-2 shadow-lg focus:outline-none focus:border-red-500"
          placeholder="Paste YouTube video link"
          value={videoLink}
          onChange={handleInputChange}
        />
        {!showVideo && !showAzureVideo && (
          <Button
            color={"white"}
            onClick={handleButtonClick}
            text={buttonText}
          />
        )}
      </div>
      {showVideo && (
        <div className="my-16 flex flex-col items-center justify-center ">
          <div className="bg-white p-2 shadow-lg rounded-lg">
            <iframe
              width="860"
              height="415"
              src={embedURL}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              type="video/mp4"
            ></iframe>
          </div>
          <Button
            text={"Click to Translate"}
            color={"white"}
            className={"my-10 animate-pulse"}
            onClick={handleButtonClick}
          />
          <Button
            text={"Reset"}
            className={"mx-auto bg-red-600 block "}
            onClick={resetStates}
          />
        </div>
      )}
      {/* <div class="rounded-md h-12 w-12 border-4 border-t-4 border-white animate-spin absolute mx-auto"> */}

      {showAzureVideo && (
        <div>
          {isProcessing && (
            <>
              <div className=" mx-auto border-2 border-white p-5 bg-white text-violet-900 rounded-md w-fit mt-10 text-center">
                <div className="my-4">
                  <FontAwesomeIcon
                    icon="fa-solid fa-gear"
                    className="animate-spin text-6xl"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-gear"
                    className="animate-spin text-4xl"
                  />
                </div>
                <p className="animate-pulse text-xl mt-8 font-bold text-slate-800">
                  Processing...
                </p>
                <p className=" mt-2 text-sm text-slate-800">
                  ( It will take approx ~ 10mins )
                </p>
              </div>

              <Button
                text={"Reset"}
                className={"mx-auto bg-red-600 block mt-10"}
                onClick={resetStates}
              />
            </>
          )}
          {!isProcessing && (
            <div>
            <div div className="w-fit mt-4 bg-white p-2 rounded-lg mx-auto">
              <iframe
                width="660"
                height="380"
                src={azureVideo.azureLink}
                title={azureVideo.title}
                frameBorder="0"
                allowFullScreen
                type="video/mp4"
              ></iframe>
              </div>

              <Button
                text={"Translate another"}
                color={"white"}
                className={"mx-auto block mt-10"}
                onClick={resetStates}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TranslateSection;
