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
    <article className=" w-86 flex h-full flex-col items-center justify-between rounded-lg bg-[#fed7aa] p-2 shadow transition-transform  duration-75 hover:scale-[1.01] hover:shadow-lg">
      <figure className="h-36  w-full ">
        <img
          className="h-full w-full object-contain "
          src={product.image}
          alt={product.title}
        />
      </figure>
      <h3 className="text-xl  ">{product.title}</h3>
      <p className="h-20 max-w-xs  overflow-scroll text-xs">
        {product.description}
      </p>
      <h4 color="text-secondary" className="self-center">
        $ {product.price}
      </h4>
      <button
        className="mx-auto rounded-lg border border-orange-500  bg-orange-300 p-2 uppercase shadow-md transition-colors duration-75 hover:bg-orange-500"
        onClick={() => addToCartHandler(product)}
      >
        add to cart{" "}
      </button>
    </article>
  );
}
