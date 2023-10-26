import { Product } from "../../../types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/cartSlice";
import { decrement } from "../../../redux/cartCountSlice";

interface CartProps {
  item: Product;
  index: number;
}

function Cart({ item, index }: CartProps) {
  const dispatch = useDispatch();

  const removeFromCartHandler = (product: Product) => {
    dispatch(removeFromCart(product));
    dispatch(decrement());
  };

  return (
    <li key={index} className="w-full flex flex-row my-2">
      <div className="flex items-center w-full hover:bg-orange-600 hover:rounded-lg">
        <img
          src={item.image}
          width="40px"
          height="40px"
          className="justify-start mx-3"
        />
        <p className="px-4 w-full">
          {item.quantity}x - {item.title}
        </p>
      </div>
      <button
        onClick={() => removeFromCartHandler(item)}
        className="border-2 border-black hover:bg-orange-600"
      >
        Remove
      </button>
    </li>
  );
}

export default Cart;
