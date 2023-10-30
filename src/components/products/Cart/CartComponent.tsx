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
    <li key={index} className="my-2 flex w-full flex-row">
      <div className="flex w-full items-center hover:rounded-lg hover:bg-orange-600">
        <img
          src={item.image}
          width="40px"
          height="40px"
          className="mx-3 justify-start"
        />
        <p className="w-full px-4">
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
