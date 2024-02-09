import React from "react";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SIgnUp";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing"
import ForInstructors from "./pages/ForInstructors"
import Navbar from "./components/NavBar";
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Footer from "./components/Footer";

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/forInstructors" element={<ForInstructors/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
library.add(fab, fas, far)
