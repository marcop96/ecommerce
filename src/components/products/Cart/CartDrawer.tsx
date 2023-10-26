import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ItemsInCart from "./ItemsInCart";
import CartBadge from "../Cart/CartBadge";
type Anchor = "right";

export default function CartDrawer() {
  const cartItems = useSelector((state: RootState) => state.cart);
  const [state, setState] = useState({ right: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      className="flex flex-col h-full bg-orange-300 items-center  p-4"
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="items-center bg-orange-300 ">
        {cartItems.map((item, index) => (
          <ItemsInCart item={item} index={index} key={index} />
        ))}
      </List>
    </Box>
  );
  const cartCount = useSelector((state: RootState) => state.cartCount);

  return (
    <div id="drawer-activation-button">
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <CartBadge />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{ style: { width: "600px" } }}
          >
            <div className="bg-orange-600 h-16 flex items-center justify-center">
              <h2 className="self-center">My cart: {cartCount}</h2>
            </div>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
