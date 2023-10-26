// ItemsInCart.tsx
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/cartSlice";
import { Product } from "../../../types";

interface ItemsInCartProps {
  item: Product;
  index: number;
}

export default function ItemsInCart({ item, index }: ItemsInCartProps) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <li key={index} className="w-full flex flex-row">
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
      <button onClick={handleRemoveFromCart}> Remove </button>
    </li>
  );
}
