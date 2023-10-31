// import React, { useState } from "react";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import { useSelector } from "react-redux";
// import CartComponent from "./CartComponent";

// export default function CartDrawer() {
//   const cartItems = useSelector((state: RootState) => state.cart);
//   const [state, setState] = useState({ right: false });
//   const EMPTY_CART_MESSAGE = "Your cart is empty";
//   const toggleDrawer =
//     (anchor: Anchor, open: boolean) =>
//     (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === "keydown" &&
//         ((event as React.KeyboardEvent).key === "Tab" ||
//           (event as React.KeyboardEvent).key === "Shift")
//       ) {
//         return;
//       }

//       setState({ ...state, [anchor]: open });
//     };

//   const list = (anchor: Anchor) => (
//     <div
//       className="flex flex-col h-full bg-orange-300 items-center  p-4"
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       {cartCount === 0 ? (
//         <h2 className="text-2xl"> {EMPTY_CART_MESSAGE}</h2>
//       ) : (
//         <List className="items-center bg-orange-300 ">
//           {cartItems.map((item, index) => (
//             <CartComponent item={item} index={index} />
//           ))}
//         </List>
//       )}
//     </div>
//   );
//   const cartCount = useSelector((state: RootState) => state.cartCount);

//   return (
//     <div id="drawer-activation-button">
//       {(["right"] as const).map((anchor) => (
//         <React.Fragment key={anchor}>
//           <button onClick={toggleDrawer(anchor, true)}>
//             <CartBadge />
//           </button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             PaperProps={{ style: { width: "600px" } }}
//           >
//             <div className="bg-orange-600 h-16 flex items-center justify-center">
//               <h2 className="self-center">My cart: {cartCount}</h2>
//             </div>

//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../../../redux/drawerSlice";
import { RootState } from "../../../redux/store";
import CartComponent from "./CartComponent";

const Drawer = () => {
  const cartCount = useSelector((state: RootState) => state.cartCount);

  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const EMPTY_CART_MESSAGE = "Your Cart is empty ";
  return (
    <>
      <div
        className={`z-2 fixed right-0 top-0 h-full w-screen  transform  rounded-lg  border-4 border-orange-700 bg-orange-200 shadow-lg transition-transform lg:w-2/4 ${
          isOpen ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <div className="flex h-16 items-center justify-center bg-orange-600">
          <h2 className="self-center">My cart: {cartCount}</h2>
        </div>

        {/* Drawer content goes here */}
        <button
          className="absolute right-2 top-2"
          onClick={() => dispatch(closeDrawer())}
        >
          X
        </button>
        <div className="flex h-full flex-col items-center bg-orange-300  p-4">
          {cartCount === 0 ? (
            <h2 className="text-2xl"> {EMPTY_CART_MESSAGE}</h2>
          ) : (
            <li className="items-center bg-orange-300 ">
              {cartItems.map((item, index) => (
                <CartComponent item={item} index={index} />
              ))}
            </li>
          )}
        </div>
      </div>
    </>
  );
};
export default Drawer;
