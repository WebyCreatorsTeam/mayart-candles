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
import DashcoardCandle from "./views/Dashboard/Candle/DashcoardCandle";
import CategoriesDashboard, {
  categoriesLoader,
} from "./views/Dashboard/Categories/CategoriesDashboard";
import OneCategoryDashboard from "./views/Dashboard/Categories/OneCategoryDashboard";
import AboutDashboard from "./views/Dashboard/About/AboutDashboard";
import Candle from "./views/Candles/[id]/page";
import CandlesAll from "./views/Candles/CandlesAll/CandlesAll";
import { candleCatagoriesLoader, candlesLoader } from "./utils/serverActions";

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
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/candles",
        children: [
          { index: true, element: <CandlesAll />, loader: candlesLoader },
          { path: "/candles/candle/:id", element: <Candle /> },
          { path: "/candles/sized/:size", element: <BySize /> },
          {
            path: "/candles/:type",
            element: <CandlesAll />,
            loader: candlesLoader,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    action: formLoginAction,
    errorElement: <ErrorComponent />,
  },
  {
    path: "dashboard",
    element: <LayoutDashboard />,
    errorElement: <ErrorComponent />,
    children: [
      { index: true, element: <MainDashboard />, loader: candlesLoader },
      { path: "candle/:candleID", element: <DashcoardCandle /> },
      {
        path: "categories",
        element: <CategoriesDashboard />,
        loader: categoriesLoader,
      },
      {
        path: "categories/:categotyName",
        element: <OneCategoryDashboard />,
        loader: categoriesLoader,
      },
      { path: "about", element: <AboutDashboard /> },
      { path: "admins", element: <Users />, loader: adminsLoader },
      { path: "regist", element: <Regist />, action: formRegistAction },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
