import React from "react";
import "./output.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="flex relative scrollbar-none h-screen flex-col justify-between overflow-y-scroll">
      <NavBar  />
      <div className="h-fit flex w-full">
        <img
          src="/images/hero-image.jpeg"
          alt="hero"
          className="absolute z-[-1]"
        />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
