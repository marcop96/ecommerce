import { Product } from "../../../types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/cartSlice";
import { decrement } from "../../../redux/cartCountSlice";
import deleteIcon from '../../../assets/deleteIcon.svg'
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
          {item.quantity}x - {item.title} - ${item.price}
        </p>
      </div>
      <button
        onClick={() => removeFromCartHandler(item)}
        className="border-2 border-black rounded-lg hover:bg-orange-600"
      >
<img src={deleteIcon} width="20px" height="20px" />
      </button>
    </li>
  );
}

export default Cart;
