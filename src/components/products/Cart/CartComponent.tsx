import { Product } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../redux/cartSlice";
import { RootState } from "../../../redux/store";
import { decrement } from "../../../redux/cartCountSlice";
// import { useEffect, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const totalCartItems = useSelector((state: RootState) => state.cartCount);

  const removeFromCartHandler = (product: Product) => {
    dispatch(removeFromCart(product));
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Cart.component</h2>
      <p>Total items {totalCartItems}</p>
      <ul>
        {cartItems.map((item: Product, index: number) => (
          <li key={index}>
            ${item.price} {item.title}
            <br />
            {item.quantity}
            <button className="m-3" onClick={() => removeFromCartHandler(item)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
