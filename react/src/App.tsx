import React from "react";
import "./output.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import { candles } from "./types/candles";

function App() {
  const [candlesArray, setCandlesArray] = React.useState(candles);
  return (
    <div className="scrollbar-none flex h-0 min-h-screen flex-col justify-between overflow-x-hidden">
      <NavBar />
      <Outlet context={[candlesArray, setCandlesArray]} />
      <Footer />
    </div>
  );
}

export default App;
