import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../../redux/drawerSlice";
import { RootState } from "../../../redux/store";
export default function FloatingCartCTA() {
  const cartCount = useSelector((state: RootState) => state.cartCount);
  const dispatch = useDispatch();
  return (
    <div className="fixed bottom-14 right-14 z-40">
      <div className="fixed bottom-11 right-3 z-50 rounded-full bg-black px-2 text-white ">
        {cartCount}
      </div>
      <ShoppingBasketOutlinedIcon
        onClick={() => dispatch(openDrawer())}
        className="absolute rounded-full bg-orange-600 p-3  hover:text-white"
        style={{ fontSize: "3em" }}
      />
    </div>
  );
}
