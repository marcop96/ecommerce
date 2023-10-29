import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";
const Navbar = () => {
  return (
    <header className=" sticky bg-orange-700 p-3 container mx-auto flex justify-start items-center space-x-2">
      <NavMenuMobile />

      {/* <div id="mobile-menu" className="md:hidden  p-4 h-20">
          <a href="#" className="block text-white mb-2">
            Home
          </a>
          <a href="#" className="block text-white mb-2">
            Shop
          </a>
          <a href="#" className="block text-white mb-2">
            Products
          </a>

          <button
            className="text-white hover:text-gray-300"
            onClick={() => dispatch(openDrawer())}
          ></button>
        </div>
       */}
    </header>
  );
};

export default Navbar;
