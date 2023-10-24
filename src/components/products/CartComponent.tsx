import { Product } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );

    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  const removeFromCartHandler = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <h2>Cart.component</h2>
      <p>Total items {totalQuantity}</p> {/* Display the total quantity here */}
      <ul>
        {cartItems.map((item: Product, index: number) => (
          <li key={index}>
            ${item.price} {item.title}
            <br />
            {item.quantity}
            <button onClick={() => removeFromCartHandler(item)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
