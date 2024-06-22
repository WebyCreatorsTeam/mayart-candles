import React from "react";
import "./output.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="scrollbar-none relative flex h-fit min-h-svh flex-col justify-between overflow-x-clip">
      <div className="h-full ">
        <NavBar />
        <div className="flex h-fit w-full flex-col">
          <Outlet />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
