import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../redux/drawerSlice";
import { RootState } from "../../redux/store";

export default function NavMenu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  return (
    <nav>
      <a href="#" className="text-white text-xl font-semibold">
        Marco
      </a>
      <a href="#" className="text-white hover:text-gray-300 ">
        Home
      </a>
      <a href="#" className="text-white hover:text-gray-300 ">
        Products
      </a>
      {!isOpen && (
        <button
          className="text-white hover:text-gray-300"
          onClick={() => dispatch(openDrawer())}
        >
          abrirdrawer
        </button>
      )}
    </nav>
  );
}
