import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../../../redux/drawerSlice";
import { RootState } from "../../../redux/store";
import CartComponent from "./CartComponent";

const Drawer = () => {
  const cartCount = useSelector((state: RootState) => state.cartCount);
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const EMPTY_CART_MESSAGE = "Your Cart is empty";

  return (
    <>
      {/* Background overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-screen transform rounded-lg border-4 border-orange-700 bg-orange-200 transition-transform lg:w-2/4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-center bg-orange-600">
          <h2 className="self-center">My cart: {cartCount}</h2>
        </div>

        {/* Close button */}
        <button
          className="absolute right-2 top-2"
          onClick={() => dispatch(closeDrawer())}
        >
          X
        </button>

        {/* Drawer content */}
        <div className="flex h-full flex-col items-center bg-orange-300 p-4">
          {cartCount === 0 ? (
            <>
              <h2 className="text-2xl">{EMPTY_CART_MESSAGE}</h2>
              <span>Perhaps you should buy something ;)</span>
            </>
          ) : (
            <ul>
              <li className="h-72 min-h-full w-full items-center bg-orange-300">
                {cartItems.map((item, index) => (
                  <CartComponent item={item} index={index} />
                ))}
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
export default Drawer;
