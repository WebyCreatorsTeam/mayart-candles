import React from "react";
import "./output.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="flex h-0 min-h-screen flex-col justify-between">
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
