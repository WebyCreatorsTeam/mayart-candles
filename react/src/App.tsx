import React from "react";
import "./output.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Contact from "./views";


function App() {
  return (
    <div className="flex relative scrollbar-none h-screen flex-col justify-between overflow-y-scroll">
      <NavBar  />
      <div className="h-fit flex w-full">
      <Contact />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
