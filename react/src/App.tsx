import React from "react";
import "./output.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex h-0 min-h-screen flex-col justify-between overflow-x-hidden">
      <img
        src="/images/hero-image.jpeg"
        alt="hero"
        className="absolute z-[-1]"
      />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
