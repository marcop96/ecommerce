import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Product } from "../../../types";
type Anchor = "right";

export default function TemporaryDrawer() {
  const cartItems = useSelector((state: RootState) => state.cart);
  const [state, setState] = React.useState({
    right: false,
  });

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
      sx={{ width: 600 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="flex flex-col">
        {cartItems.map((item: Product, index: number) => (
          <button className="hover:bg-orange-100">
            <li key={index}>
              <img src={item.image} width="40px" height="40px" />
              <p className="px-4">
                {item.quantity}x - {item.title}
              </p>
            </li>
          </button>
        ))}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"asd"} />
          </ListItemButton>
        </ListItem>
      </List>
      <hr />
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
