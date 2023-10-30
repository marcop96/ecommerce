import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useDispatch } from "react-redux";
import { openDrawer } from "../../../redux/drawerSlice";
export default function FloatingCartCTA() {
  const dispatch = useDispatch();
  return (
    <div className="fixed bottom-14 right-14 z-40 ">
      <ShoppingBasketOutlinedIcon
        onClick={() => dispatch(openDrawer())}
        className="absolute rounded-full bg-orange-600 p-3  hover:text-white"
        style={{ fontSize: "3em" }}
      />
    </div>
  );
}
