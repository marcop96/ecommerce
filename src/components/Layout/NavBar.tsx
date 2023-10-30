import { useMediaQuery } from "@uidotdev/usehooks";

import NavMenu from "./NavMenu";

import NavMenuMobile from "./NavMenuMobile";
const Navbar = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)",
  );

  return (
    <header className="  space-x-2 bg-orange-700 p-3 ">
      {isSmallDevice || isMediumDevice ? <NavMenuMobile /> : <NavMenu />}
    </header>
  );
};

export default Navbar;
