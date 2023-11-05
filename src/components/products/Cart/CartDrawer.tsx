import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../../../redux/drawerSlice";
import { RootState } from "../../../redux/store";
import CartComponent from "./CartComponent";

const Drawer = () => {
  const cartCount = useSelector((state: RootState) => state.cartCount);
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const EMPTY_CART_TEXT = {
    title: "Your Cart is empty",
    message: "Perhaps you should buy something :)",
  };
  const drawerRef = useRef<HTMLDivElement>(null); 


  //checks if click was made outside of the drawer, and closes it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      //drawer ref = open  drawer div
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {

        dispatch(closeDrawer());
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch, isOpen]);

    // Function to calculate total price
    const calculateTotalPrice = () => {
      const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      return totalPrice.toFixed(2)
    };
  

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
        ref={drawerRef}
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
        <div className="flex h-[505px] flex-col items-center bg-orange-300 p-4">
          {cartCount === 0 ? (
            <>
              <h2 className="text-2xl">{EMPTY_CART_TEXT.title}</h2>
              <span>{EMPTY_CART_TEXT.message}</span>
            </>
          ) : (
            <ul className="h-72 min-h-full w-full items-center bg-orange-300 overflow-auto">
              {cartItems.map((item, index) => (
                <CartComponent item={item} index={index} />
              ))}
            </ul>
          )}
      </div>
      <div className="flex flex-col  h-1/5 w-full bg-orange-300">
        <h3 id='price' className=" text-3xl  p-4">
          Total price  ${calculateTotalPrice()} </h3>
          <button className="rounded-full bg-orange-500 w-fit self-center justify-self-center p-3 hover:bg-orange-600">Checkout</button>
      </div>
        </div>
    </>
  );
};
export default Drawer;
