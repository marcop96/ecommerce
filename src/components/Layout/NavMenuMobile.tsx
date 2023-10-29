import { useDispatch } from "react-redux";
import { openDrawer } from "../../redux/drawerSlice";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
export default function NavMenuMobile() {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div id="mobile-menu" className="md:hidden  p-4 h-full">
      <button className="text-white " onClick={() => setOpen(!isOpen)}>
        <MenuIcon />
      </button>

      {isOpen && (
        <>
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
            drawer
          </button>
        </>
      )}
    </div>
  );
}
