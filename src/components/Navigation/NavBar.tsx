import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-semibold">
          Marco
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300 ">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Shop
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Products
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
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
          <a href="#" className="block text-white mb-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
