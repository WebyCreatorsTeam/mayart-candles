import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views";
import About from "./views/About";
import Candles from "./views/Candles";
import BySize from "./views/Candles/[size]";
import Designed from "./views/Candles/Designed";
import InVessel from "./views/Candles/InVessel";
import Contact from "./views/Contact";
import ErrorComponent from "./Components/Error";
import CandllesAll from "./views/Candles/CandlesAll/CandllesAll";
import Login, { formLoginAction } from "./views/Dashboard/Login/Login";
import "./views/Dashboard/style/global.scss";
import MainDashboard, { candlesLoader } from "./views/Dashboard/MainDashboard";
import LayoutDashboard from "./views/Dashboard/LayoutDashboard";
import Regist, { formRegistAction } from "./views/Dashboard/Regist/Regist";
import Users, { adminsLoader } from "./views/Dashboard/Users/Users";
import DashcoardCandle from "./views/Dashboard/Candle/DashcoardCandle";
import CategoriesDashboard, { categoriesLoader } from "./views/Dashboard/Categories/CategoriesDashboard";
import OneCategoryDashboard from "./views/Dashboard/Categories/OneCategoryDashboard";
import AboutDashboard from "./views/Dashboard/About/AboutDashboard";

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
  { path: "login", element: <Login />, action: formLoginAction, errorElement: <ErrorComponent /> },
  {
    path: "dashboard",
    element: <LayoutDashboard />,
    errorElement: <ErrorComponent />,
    children: [
      { index: true, element: <MainDashboard />, loader: candlesLoader, },
      { path: "candle/:candleID", element: <DashcoardCandle /> },
      { path: "categories", element: <CategoriesDashboard />, loader: categoriesLoader },
      { path: "categories/:categotyName", element: <OneCategoryDashboard />, loader: categoriesLoader },
      { path: "about", element: <AboutDashboard /> },
      { path: "admins", element: <Users />, loader: adminsLoader },
      { path: "regist", element: <Regist />, action: formRegistAction },
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);