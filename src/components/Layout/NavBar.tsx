import { useMediaQuery } from "@uidotdev/usehooks";

import NavMenu from "./NavMenu";

import NavMenuMobile from "./NavMenuMobile";
const Navbar = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <header className="  space-x-2 bg-orange-700 p-3 ">
      {isSmallDevice ? <NavMenuMobile /> : <NavMenu />}
    </header>
  );
};

export default Navbar;
