import { useState } from "react";
import CartDrawer from "../../products/Cart/CartDrawer";
import { openDrawer } from "../../../redux/drawerSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" p-4 sticky">
      <div className="container mx-auto flex justify-start items-center ">
        <a href="#" className="text-white text-2xl font-semibold p-3">
          Marco
        </a>
        <a href="#" className="text-white hover:text-gray-300 p-3 ">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-300 p-3">
          Products
        </a>

        <button
          className="text-white hover:text-gray-300"
          onClick={() => dispatch(openDrawer())}
        >
          abrirdrawer
        </button>
        <CartDrawer />
      </div>
      <div className="flex md:hidden">
        <button onClick={toggleMobileMenu} className="text-white"></button>
      </div>
      {/* Mobile Menu (Hidden by default) */}
      {isMobileMenuOpen && (
        <div className="md:hidden  p-4">
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
          >
            boton
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
