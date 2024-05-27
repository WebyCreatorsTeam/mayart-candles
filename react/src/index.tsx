import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/index";
import About from "./views/About";
import Candles from "./views/Candles";
import BySize from "./views/Candles/[size]";
import Designed from "./views/Candles/Designed";
import InVessel from "./views/Candles/InVessel";
import Contact from "./views/Contact";
import ErrorComponent from "./Components/Error";
import CandllesAll from "./views/Candles/CandlesAll/CandllesAll";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/candles",
        element: <CandllesAll />,
        children: [
          { path: "/candles/:size", element: <BySize /> },
          { path: "/candles/designed", element: <Designed /> },
          { path: "/candles/in-vessel", element: <InVessel /> },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
