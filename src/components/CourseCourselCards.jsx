import React from "react";

const CourseCourselCards = ({className,onClick}) => {
  return (
    <div className= {`flex justify-between rounded-md gap-x-10 shadow-md w-[600px] ${className} `} onClick={onClick}>
      <div className="relative">
        <img src={"/pythonIcon.png"} alt="" className="rounded-sm w-full" />
        <div className="px-4 py-2 font-bold text-slate-600 bg-white rounded-lg absolute bottom-4 right-4">
          <p>
            $ 380{" "}
            <span className="font-light text-slate-400 line-through">
              $ 500
            </span>
          </p>
        </div>
      </div>
      <div className="text-slate-600 flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-xl mt-10">
            Product Management Basic - Course (Punjabi)
          </h1>
          <p className="w-2/3 my-4">
            Product Management Masterclass, you will learn with Sarah Johnson -
            Head of Product Customer Platform Gojek Indonesia.
          </p>
        </div>
        <p className="m-4 border border-slate-500 w-fit p-2 rounded-md">
          <span className="font-bold">40+ </span>Students enrolled
        </p>
      </div>
    </div>
  );
};

export default CourseCourselCards;
