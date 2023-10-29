import { Product } from "../../types";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { increment } from "../../redux/cartCountSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const { product } = props;
  const dispatch = useDispatch();

  function addToCartHandler(product: Product) {
    dispatch(addToCart(product));
    dispatch(increment());
  }

  return (
    <article className=" flex flex-col justify-between items-center p-2 w-86 h-full bg-[#fed7aa] shadow hover:shadow-lg rounded-lg">
      <figure className="w-full  h-36 ">
        <img
          className="object-contain h-full w-full "
          src={product.image}
          alt={product.title}
        />
      </figure>
      <h3 className="text-xl  ">{product.title}</h3>
      <p className="text-xs h-20  overflow-scroll">{product.description}</p>
      <h4 color="text-secondary" className="self-center">
        $ {product.price}
      </h4>
      <button className="mx-auto" onClick={() => addToCartHandler(product)}>
        Add To Cart
      </button>
    </article>
  );
}
