import React, { Suspense } from "react";
import MenuNavLink from "./MenuNavLink";
import CandlesBySizeMenu from "./CandlesBySizeMenu";
import NavBarMenuSocials from "./SideNavBarMenuSocials";
import { Await, useLoaderData } from "react-router-dom";
import { candleCategoryType } from "../../../utils/types/categories";

const SideNavBarMenu = ({
  closeMenus,
  sizeMenuIsOpen,
  toggleSizeMenu,
}: {
  closeMenus?: () => void;
  sizeMenuIsOpen: boolean;
  toggleSizeMenu: () => void;
}) => {
  const { categories } = useLoaderData() as {
    categories: Array<candleCategoryType>;
  };

  return (
    <nav
      dir="rtl"
      className={`flex flex-col items-start divide-y-[1px] border-[[#B0C4B1]/30] text-center xl:items-center xl:pt-20`}
    >
      <MenuNavLink onClick={closeMenus} to="/" text="ראשי" />
      <MenuNavLink onClick={closeMenus} to="/candles" text="כל הנרות" />
      <CandlesBySizeMenu
        closeMenus={closeMenus || toggleSizeMenu}
        sizeMenuIsOpen={sizeMenuIsOpen}
        toggleSizeMenu={toggleSizeMenu}
      />
      <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
        <Await resolve={categories}>
          {categories.map((candleCategory: candleCategoryType) => (
            <MenuNavLink
              onClick={closeMenus}
              key={candleCategory._id}
              to={`/candles/${candleCategory.opt}`}
              text={candleCategory.opt}
            />
          ))}
        </Await>
      </Suspense>
      <MenuNavLink onClick={closeMenus} to="/about" text="אודות" />
      <MenuNavLink onClick={closeMenus} to="#contact_us" text="צור קשר" />
      <NavBarMenuSocials />
    </nav>
  );
};

export default SideNavBarMenu;
