import React from "react";
import "./output.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

import { candles } from "./types/candles";

import Contact from "./views/Contact";

function App() {
  const [candlesArray, setCandlesArray] = React.useState(candles);
  return (
    <div className=" scrollbar-none relative flex h-screen flex-col justify-between overflow-y-scroll">
      <NavBar />
      <div className="flex h-fit w-full flex-col">
        <Outlet context={[candlesArray, setCandlesArray]} />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
