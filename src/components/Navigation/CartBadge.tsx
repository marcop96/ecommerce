import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function CartBadge() {
  const totalCartItems = useSelector((state: RootState) => state.cartCount);
  return (
    <Badge badgeContent={totalCartItems} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
