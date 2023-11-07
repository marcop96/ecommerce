import { Product } from "../../../types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/cartSlice";
import { decrement } from "../../../redux/cartCountSlice";
import deleteIcon from '../../../assets/deleteIcon.svg';
import {useState} from 'react'
interface CartProps {
  item: Product;
  index: number;
}

function Cart({ item, index }: CartProps) {
  const [quantityToRemove,setQuantityToRemove] = useState(0);
  const dispatch = useDispatch();

  const removeFromCartHandler = (product: Product, quantity: number) => {
    dispatch(removeFromCart({ product, quantity }));
    dispatch(decrement(quantity));
  };
  const options = [];
  for (let i = 1; i <= item.quantity; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <li key={index} className="flex bg-orange-400 p-2 m-2 rounded-lg">
      <div id='product-info' className="flex w-4/5 items-center">
        <img
          src={item.image}
          width="40px"
          height="40px"
          className="mx-3 justify-start"
          alt={item.title}
        />
        <span>{item.quantity} - {item.title}</span>
      </div>

      <div id='product-management' className="w-1/5 items-center">
        <select
          className="mx-2 p-1"
          onChange={(e) => setQuantityToRemove(Number(e.target.value))}

        >
          {options}

        </select>

        <button
          onClick={() => removeFromCartHandler(item, quantityToRemove)}
          className="border-2 border-black rounded-lg hover:bg-orange-600"
        >
          <img src={deleteIcon} alt="Delete Icon" width="30px" height="30px" />
        </button>

        <p className="w-full px-4">
          ${item.price * item.quantity}
        </p>
      </div>
    </li>
  );
}

export default Cart;
