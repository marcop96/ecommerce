import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ShoppingCart } from "@mui/icons-material";
export default function CartBadge() {
  const totalCartItems = useSelector((state: RootState) => state.cartCount);
  return (
    <Badge badgeContent={totalCartItems} color="primary">
      <ShoppingCart color="action" />
    </Badge>
  );
}
