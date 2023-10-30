import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../redux/drawerSlice";
import { RootState } from "../../redux/store";

export default function NavMenu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  return (
    <nav className="w-full flex space-x-2">
      <a
        href="#"
        className="text-white text-xl font-semibold  hover:text-gray align-middle"
      >
        Marco
      </a>
      <a href="#" className="text-white hover:text-gray-300 mx-3">
        Home
      </a>
      <a href="#" className="text-white hover:text-gray-300 mx-3">
        Products
      </a>
      {!isOpen && (
        <a
          className="text-white hover:text-gray-300 mx-3"
          onClick={() => dispatch(openDrawer())}
        >
          Drawer
        </a>
      )}
    </nav>
  );
}
