import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleInputChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setFormData({ ...formData, role: selectedOption.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Make POST request to your backend endpoint
      const response = await axios.post("/api/signup", formData);

      // Handle success
      setSuccess(response.data.message);
      setError("");
    } catch (err) {
      // Handle error
      setError(err.response.data.error);
      setSuccess("");
    }
  };

  return (
    <div className="bg-white w-2/3 mx-auto flex my-32 shadow-lg">
      <div className="bg-violet-600 p-10 text-white w-1/3 py-28 flex flex-col justify-between">
        <p>
          <div className="flex font-bold  items-end ">
            <p className="text-8xl">500</p>
            <p className="my-4 ml-2"> free credits</p>
          </div>

          <p className="text-2xl mt-2">Sign Up and Get</p>
        </p>
        <div className="flex gap-x-3">
          <p className="text-8xl font-bold font">"</p>
          <p className="">
            Dive into the extraordinary! Translate your lectures with us - where
            every word is a piece of the enchanted puzzle called knowledge.
          </p>
        </div>
      </div>
      <div className="  bg-white p-10 w-5/6">
        <h1 className="text-3xl my-10">Sign Up</h1>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-4 mt-5 ">
            <div className="flex flex-col sm:flex-row justify-between">
              <input
                type="text"
                className="bg-slate-200 px-4 py-2 rounded-md mr-2 my-2 w-full text-slate-600 focus:outline-none"
                name="firstName"
                onChange={handleChange}
                placeholder="First Name"
              />

              <input
                type="text"
                className="bg-slate-200 px-4 py-2 rounded-md ml-2 my-2 w-full text-slate-600 focus:outline-none"
                name="lastName"
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>

            <input
              type="text"
              className="bg-slate-200 px-4 py-2 rounded-md my-2 w-min-32 text-slate-600 focus:outline-none"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />

            <input
              type="password"
              className="bg-slate-200 px-4 py-2 rounded-md my-2 w-min-32 text-slate-600 focus:outline-none"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />

            <input
              type="password"
              className="bg-slate-200 px-4 py-2 rounded-md my-2 w-min-32 text-slate-600 focus:outline-none"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm Password"
            />

            <select
              onChange={handleInputChange}
              name="role"
              id="role"
              className="bg-slate-200 px-4 py-2 rounded-md my-2 w-min-32 text-slate-600 focus:outline-none"
            >
              <option selected value="student">Who better defines you ?</option>
              <option  value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>

            <Button
              text={"Sign Up"}
              color={"primary"}
              className={"shadow-lg"}
              onClick={handleSubmit}
            />
          </div>
        </form>
        <p className="my-8 text-center">
          <span className="text-slate-500">Already have an account ?</span>
          <span className="text-[#475569] underline">&nbsp;</span>
          <a href="/login" className="text-violet-500">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
