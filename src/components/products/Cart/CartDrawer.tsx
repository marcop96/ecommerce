import { useRef, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { closeDrawer } from "../../../redux/drawerSlice";
import { RootState } from "../../../redux/store";
import CartComponent from "./CartComponent";
import { Product } from "../../../types";

export default function Drawer  ()  {
  const cart = useSelector((state: RootState) => state.cart);
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
//count items in cart
useEffect(() => {
  const count = cart.products.reduce((total: number, item: Product) => total + item.quantity, 0);
console.log(count)}, [cart.products, dispatch]);


  const calculateTotalPrice = () => {
      const totalPrice = cart.products.reduce((total:number, item:Product) => total + (item.price * item.quantity), 0);
      return totalPrice.toFixed(2)
    };
  return (
    <>
      <div className={`fixed h-screen inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm ${isOpen ? "block" : "hidden"}`}></div>
      <div ref={drawerRef} className={`fixed right-0 top-0 z-50 h-full w-full sm:w-screen g transform rounded-lg border-4 border-orange-700 bg-orange-200 transition-transform lg:w-2/4 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <header className="flex p-4 items-center justify-center bg-orange-600">
          <h2 className="self-center">My cart: {cart.count} items</h2>
        </header>
        <button className="absolute right-2 top-2" onClick={() => dispatch(closeDrawer())}>X</button>
        <div className="flex h-full flex-col items-center bg-orange-300 p-4">
          {cart.products.length === 0 ? (
            <>
              <h2 className="text-2xl">{EMPTY_CART_TEXT.title}</h2>
              <span>{EMPTY_CART_TEXT.message}</span>
            </>
          ) : (
            <div className="w-full items-center bg-orange-300 overflow-auto">
            <ul >
              {cart.products.map((item:Product, index:number) => (
                <CartComponent key={index} item={item} index={index} />

              )) 
              }
            
            </ul></div>
          )}
        <div className="flex flex-col bottom-4 min-h-2/3 w-full bg-orange-300">
          <h3 id='price' className="text-3xl p-4 self-center">
                {cart.products.length > 0 ? `Total: $${calculateTotalPrice()}` : ""}

</h3>
          <button className="rounded-full bg-orange-500 w-fit self-center p-3 hover:bg-orange-600"><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">  Checkout</a></button>
        </div>
        </div>
      </div>
    </>
  );


              }
