import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
export default function NavMenuMobile() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div id="mobile-menu" className="h-full  p-4 md:hidden">
      <button className="text-white " onClick={() => setOpen(!isOpen)}>
        <MenuIcon />
      </button>

      {isOpen && (
        <>
          <a href="/" className="mb-2 block text-white">
            Home
          </a>
          <a href="products" className="mb-2 block text-white">
            Shop
          </a>
          <a href="FAQ" className="mb-2 block text-white">
            FAQ
          </a>
        </>
      )}
    </div>
  );
}
