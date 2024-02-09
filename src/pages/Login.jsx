import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.classList.toggle("animate-pulse");
    loginBtn.innerText = "Login...";
    try {
      // Make POST request to your backend endpoint for login
      const response = await axios.post("/api/login", formData);
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("id", response.data._id);
      localStorage.setItem("credits", response.data.credits);

      // Handle success
      console.log("logged in: ", response);
      setSuccess(response.data.message);
      setLoggedIn(true)
      setError("");
    } catch (err) {
      // Handle error
      setError(err.response.data.error);
      setSuccess("");
    }
  };

  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      {loggedIn && <Navigate to="/" />}
      <div className="bg-[#ffffff] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1016px] h-[812px] top-[147px] left-[212px] bg-violet-500 shadow-[0px_4px_36px_#00000040]">
          <div className="absolute w-[606px] h-[812px] top-0 left-[410px] bg-white">
            <form onSubmit={handleSubmit}>
              <div className="absolute w-[413px] h-[74px] top-[270px] left-[61px]">
                <div className="absolute w-[411px] h-[52px] top-[22px] left-0 bg-slate-200 rounded-[5px]" />
                <label
                  htmlFor="email"
                  className="absolute top-0 left-0 font-normal text-slate-800 text-[16px] tracking-[0] leading-[normal]"
                >
                  Email
                </label>
                <input
                  id="email"
                  className="absolute w-[411px] h-[95px] top-0 left-0 bg-transparent outline-none pl-8 text-slate-800 text-[16px] tracking-[0] leading-[normal]"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="absolute w-[413px] h-[74px] top-[376px] left-[61px]">
                <div className="absolute w-[411px] h-[52px] top-[22px] left-0 bg-slate-200 rounded-[5px]" />
                <label
                  htmlFor="password"
                  className="absolute top-0 left-0 font-normal text-slate-800 text-[16px] tracking-[0] leading-[normal]"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="absolute w-[411px] h-[95px] top-0 left-0 bg-transparent outline-none pl-5 text-slate-800 text-[16px] tracking-[0] leading-[normal]"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="absolute w-[419px] h-[63px] top-[490px] left-[63px] bg-[url(/rectangle-498.svg)] bg-[100%_100%]">
                <div className="absolute top-[12px] left-[50%] transform -translate-x-[50%]">
                  <button
                    id="loginBtn"
                    className="w-[417px] h-[34px] bg-[#8b5cf6] rounded-[5px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-[#ffffff] text-[18px] tracking-[0] leading-[normal]"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>

            <p className="absolute top-[575px] left-[109px] rotate-[0.71deg] font-normal text-transparent text-[18px] tracking-[0] leading-[normal]">
              <span className="text-[#475569]">Don’t have an account ?</span>
              <span className="text-[#475569] underline">&nbsp;</span>
              <a href="/signup" className="text-[#8b5cf6] underline">
                Sign Up
              </a>
              <span className="font-semibold text-[#8b5cf6] underline">
                {" "}
                here
              </span>
            </p>

            <div className="top-[169px] left-[61px] font-normal text-[#000000] text-[36px] absolute tracking-[0] leading-[normal]">
              Login
            </div>
          </div>
          <p className="absolute w-[163px] top-[475px] left-[113px] font-normal text-[#ffffff] text-[16px] tracking-[0] leading-[normal]">
            Dive into the extraordinary! Translate your lectures with us - where
            every word is a piece of the enchanted puzzle called knowledge.
          </p>
          <div className="w-[62px] top-[440px] left-[41px] font-bold text-[#ffffff] text-[120px] absolute tracking-[0] leading-[normal]">
            “
          </div>
          <img
            className="absolute w-[337px] h-[337px] top-[78px] left-[26px] object-cover"
            alt="Element"
            src="login.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
