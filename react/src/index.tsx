import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";
import Home from "./views";
import About from "./views/About";
import ErrorComponent from "./Components/Error";
import MainDashboard from "./views/Dashboard/MainDashboard";
import LayoutDashboard from "./views/Dashboard/LayoutDashboard";
import Candle from "./views/Candles/[id]/page";
import AllCandles from "./views/Candles/AllCandles/AllCandles";
import {
  aboutLoader,
  candleCategoriesLoader,
  candleLoader,
  candlesLoader,
  candlesLoaderBySize,
  candlesLoaderByType,
  checkout,
  checkoutPageInfoLoader,
} from "./utils/serverActions";
import "./views/Dashboard/style/global.scss";
import Login, { formLoginAction } from "./views/Dashboard/View/Login/Login";
import DashcoardCandle, { getCandle } from "./views/Dashboard/View/Candle/DashcoardCandle";
import AddNewCandle, { addNewCandleLoader } from "./views/Dashboard/View/NewCandle/AddNewCandle";
import CategoriesDashboard, { categoriesLoader } from "./views/Dashboard/View/Categories/CategoriesDashboard";
import OneCategoryDashboard, { getCategoryLoader } from "./views/Dashboard/View/Categories/OneCategoryDashboard";
import AboutDashboard, { aboutDashLoader } from "./views/Dashboard/View/About/AboutDashboard";
import Users, { adminsLoader } from "./views/Dashboard/View/Users/Users";
import Regist, { formRegistAction } from "./views/Dashboard/View/Regist/Regist";
import Payment, { paymentDashLoader } from "./views/Dashboard/View/Payment/Payment";
import ProtectedRoute from "./views/Dashboard/ProtectedRoute/ProtectedRoute";
import ShoppingCartPage from "./views/ShoppingCart";
import FavoritesPage from "./views/Favorites";
import OrdersPage, { ordersLoader } from "./views/Dashboard/View/OrderPage/OrdersPage";
import { candleCategoryType } from "./utils/types/categories";
import { CandleType } from "./utils/types/candles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    loader: async () => {
      const candlesCategoriesData = await candleCategoriesLoader();
      const { categories } = candlesCategoriesData as {
        categories: candleCategoryType[];
      };
      const { data } = await candlesLoader();
      const { candles } = data as unknown as { candles: CandleType[] };
      return defer({
        categories,
        candles,
      });
    },
    children: [
      { path: "/", id: "Home", element: <Home />, loader: candlesLoader },
      { path: "/about", element: <About />, loader: aboutLoader },
      {
        path: "/candles",
        children: [
          {
            index: true,
            id: "AllCandles",
            element: <AllCandles />,
            loader: candlesLoader,
          },
          {
            path: "/candles/candle/:id",
            element: <Candle />,
            loader: candleLoader,
          },
          {
            path: "/candles/sized/:size",
            element: <AllCandles />,
            loader: candlesLoaderBySize,
          },
          {
            path: "/candles/:type",
            element: <AllCandles />,
            loader: candlesLoaderByType,
          },
          {
            path: "/candles/list",
            children: [
              {
                path: "/candles/list/shoppingCart",
                element: <ShoppingCartPage />,
                loader: checkoutPageInfoLoader,
                action: checkout,
              },
              {
                path: "/candles/list/favorites",
                element: <FavoritesPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  { path: "login", element: <Login />, action: formLoginAction, errorElement: <ErrorComponent />, },
  {
    path: "dashboard", element:
      <ProtectedRoute>
        <LayoutDashboard />
      </ProtectedRoute>,
    errorElement: <ErrorComponent />,
    children: [
      { index: true, element: <MainDashboard />, loader: candlesLoader },
      { path: "candle/:candleID", element: <DashcoardCandle />, loader: getCandle },
      { path: "candle/add-new-candle", element: <AddNewCandle />, loader: addNewCandleLoader },
      { path: "categories", element: <CategoriesDashboard />, loader: categoriesLoader },
      { path: "categories/:categotyName", element: <OneCategoryDashboard />, loader: getCategoryLoader },
      { path: "about", element: <AboutDashboard />, loader: aboutDashLoader },
      { path: "admins", element: <Users />, loader: adminsLoader },
      { path: "regist", element: <Regist />, action: formRegistAction },
      { path: "payment", element: <Payment />, loader: paymentDashLoader },
      { path: "orders", element: <OrdersPage />, loader: ordersLoader },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
