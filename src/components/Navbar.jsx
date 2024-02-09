import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userName, setUserName] = useState("");
  const [credits, setCredits] = useState("");

  return (
    <nav className="bg-white shadow-lg">
      <div className="px-12">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <img src={"logo.svg"} className="w-[50px] select-none" />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <p className="bg-violet-600 text-white font-bold px-3 py-1 rounded-full text-sm">
              {localStorage.getItem("credits")}
            </p>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/for-instructors">For Instructors</NavLink>
            {!localStorage.getItem("email") && (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
              </>
            )}
            <NavLink to="/courses">Courses</NavLink>
            {localStorage.getItem("email") && (
              <button className="bg-slate-800 text-white px-3 hover:bg-slate-600 rounded-full"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// NavLink component for individual navigation links
const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-slate-700 hover:text-slate-400 hover:-translate-y-1 transition duration-300"
      activeClassName="font-bold"
    >
      {children}
    </Link>
  );
};

export default Navbar;
