import React, {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useMemo,
} from "react";
// import ActionButtons from "../ActionButtons";
import Logo from "../Logo";
import MenuToggle from "../MenuToggle";
import SideNavBar from "../SideNavBar";
import { CandleType, ChosenCandleType } from "../../../utils/types/candles";
import FavoritesButton from "../ActionButtons/FavoritesButton";
import SearchButton from "../ActionButtons/SearchButton";
import ShoppingCartButton from "../ActionButtons/ShoppingCartButton";
import { ActionButtonInfoT } from "../ActionButtons/GenericActionButton";
import { useLocalShoppingCartCandlesStorage } from "../../../utils/localCandleStorage";

const searchActionButtonInfo: ActionButtonInfoT = {
  mobile: {
    src: "/icons/nav/mobile/search-icon.svg",
    alt: "search icon",
  },
  tablet: {
    src: "/icons/nav/tablet/search-icon.svg",
    alt: "search icon",
  },
};

const favoritesActionButtonInfo: ActionButtonInfoT = {
  mobile: {
    src: "/icons/nav/mobile/heart-icon.svg",
    alt: "heart icon",
  },
  tablet: {
    src: "/icons/nav/tablet/heart-icon.svg",
    alt: "heart icon",
  },
};

const shoppingCartActionButtonInfo: ActionButtonInfoT = {
  mobile: {
    src: "/icons/nav/mobile/shopping-cart-icon.svg",
    alt: "shopping cart icon",
  },
  tablet: {
    src: "/icons/nav/tablet/shopping-cart-icon.svg",
    alt: "shopping cart icon",
  },
};

const Header = ({
  navBarMenuIsOpen,
  setNavBarMenuIsOpen,
  toggleNavBarMenu,
  favoritesArray,
  openSearchBar,
}: {
  navBarMenuIsOpen: boolean;
  setNavBarMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleNavBarMenu: () => void;
  favoritesArray: CandleType[];
  openSearchBar: (e: SyntheticEvent) => void;
}) => {
  const { getShoppingCartItems } = useLocalShoppingCartCandlesStorage();
  const shoppingCartArray = getShoppingCartItems();
  const favoritesAmount = useMemo(() => {
    if (!favoritesArray) return 0;
    return favoritesArray.length;
  }, [favoritesArray]);
  const shoppingCartAmount = useMemo(() => {
    if (!shoppingCartArray) return 0;
    let quantity = 0;
    if (shoppingCartArray) {
      shoppingCartArray.forEach((candle: ChosenCandleType) => {
        quantity += candle.quantity;
      });
    }
    return quantity;
  }, [shoppingCartArray]);

  return (
    <header className="relative ~min-h-[5rem]/[9.375rem] xl:max-2xl:min-h-fit z-10 flex w-full basis-1 items-center justify-between bg-white px-[10.5px]  py-[13.5px] sm:px-11  sm:py-7">
      <div className="flex gap-7 sm:gap-[29.93px]">
        <SearchButton
          openSearchBar={openSearchBar}
          actionButtonInfo={searchActionButtonInfo}
        />
        <FavoritesButton
          favoritesAmount={favoritesAmount}
          favoritesArray={favoritesArray}
          actionButtonInfo={favoritesActionButtonInfo}
        />
        <ShoppingCartButton
          shoppingCartAmount={shoppingCartAmount}
          shoppingCartArray={shoppingCartArray}
          actionButtonInfo={shoppingCartActionButtonInfo}
        />
      </div>
      <Logo />
      <MenuToggle toggleNavBarMenu={toggleNavBarMenu} />
      <SideNavBar
        navBarMenuIsOpen={navBarMenuIsOpen}
        setNavBarMenuIsOpen={setNavBarMenuIsOpen}
      />
    </header>
  );
};

export default Header;
