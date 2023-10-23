import { useSelector } from "react-redux";
import { Product } from "../../types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const removeFromCartHandler = (product: Product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
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
