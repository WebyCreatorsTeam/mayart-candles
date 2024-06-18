import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views";
import About from "./views/About";
import BySize from "./views/Candles/sized/[size]/page";
import Contact from "./views/Contact";
import ErrorComponent from "./Components/Error";
import Login, { formLoginAction } from "./views/Dashboard/Login/Login";
import MainDashboard from "./views/Dashboard/MainDashboard";
import LayoutDashboard from "./views/Dashboard/LayoutDashboard";
import Regist, { formRegistAction } from "./views/Dashboard/Regist/Regist";
import Users, { adminsLoader } from "./views/Dashboard/Users/Users";
import DashcoardCandle, { getCandle } from "./views/Dashboard/Candle/DashcoardCandle";
import CategoriesDashboard, {
  categoriesLoader,
} from "./views/Dashboard/Categories/CategoriesDashboard";
import OneCategoryDashboard, { getCategoryLoader } from "./views/Dashboard/Categories/OneCategoryDashboard";
import AboutDashboard, { aboutDashLoader } from "./views/Dashboard/About/AboutDashboard";
import Candle from "./views/Candles/[id]/page";
import CandlesAll from "./views/Candles/CandlesAll/CandlesAll";
import {
  aboutLoader,
  candleCatagoriesLoader,
  candlesLoader,
  candlesLoaderBySize,
  candlesLoaderByType,
  singleCandlesLoader,
} from "./utils/serverActions";
import "./views/Dashboard/style/global.scss";
import Payment, { paymentDashLoader } from "./views/Dashboard/Payment/Payment";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    loader: candleCatagoriesLoader,
    children: [
      { path: "/", element: <Home />, loader: candlesLoader },
      { path: "/about", element: <About />, loader: aboutLoader },
      { path: "/contact", element: <Contact /> },
      {
        path: "/candles",
        children: [
          { index: true, element: <CandlesAll />, loader: candlesLoader },
          {
            path: "/candles/candle/:id",
            element: <Candle />,
            loader: singleCandlesLoader,
          },
          {
            path: "/candles/sized/:size",
            element: <CandlesAll />,
            loader: candlesLoaderBySize,
          },
          {
            path: "/candles/:type",
            element: <CandlesAll />,
            loader: candlesLoaderByType,
          },
        ],
      },
    ],
  },
  { path: "login", element: <Login />, action: formLoginAction, errorElement: <ErrorComponent />, },
  {
    path: "dashboard", element: <LayoutDashboard />, errorElement: <ErrorComponent />,
    children: [
      { index: true, element: <MainDashboard />, loader: candlesLoader },
      { path: "candle/:candleID", element: <DashcoardCandle />, loader: getCandle },
      { path: "categories", element: <CategoriesDashboard />, loader: categoriesLoader },
      { path: "categories/:categotyName", element: <OneCategoryDashboard />, loader: getCategoryLoader },
      { path: "about", element: <AboutDashboard />, loader: aboutDashLoader },
      { path: "admins", element: <Users />, loader: adminsLoader },
      { path: "regist", element: <Regist />, action: formRegistAction },
       { path: "payment", element: <Payment />, loader: paymentDashLoader },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
