import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
export default function CartBadge() {
  return (
    <Badge badgeContent={2} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
