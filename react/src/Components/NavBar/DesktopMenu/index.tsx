import React, { Suspense } from "react";
import DesktopNavLink from "./DesktopNavLink";
import DesktopCandlesBySizeMenu from "./DesktopCandlesBySizeMenu";

import { Await, useLoaderData } from "react-router-dom";
import { candleCategoryType } from "../../../utils/types/categories";

const DesktopMenu = () => {
  const { categories } = useLoaderData() as {
    categories: Array<candleCategoryType>;
  };
  return (
    <nav className="absolute top-full hidden w-full flex-row-reverse items-center justify-evenly bg-white/50 py-[51px] backdrop-blur-sm xl:flex">
      <DesktopNavLink
        to="/"
        text="ראשי"
        imgsrc="/icons/nav/desktop/home-icon.svg"
      />
      <DesktopNavLink to="/candles" text="כל הנרות" />
      <DesktopCandlesBySizeMenu />
      <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
        <Await resolve={categories}>
          {categories.map((candleCategory: candleCategoryType) => (
            <DesktopNavLink
              key={candleCategory._id}
              to={`/candles/${candleCategory.opt}`}
              text={candleCategory.opt}
            />
          ))}
        </Await>
      </Suspense>
      <DesktopNavLink to="/about" text="אודות" />
      <DesktopNavLink aTag to="#contact_us" text="צור קשר" />
    </nav>
  );
};

export default DesktopMenu;
