import { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border-2 flex flex-col items-center justify-center h-72 w-72 p-4">
      <h2 className="text-white text-lg font-semibold mb-2">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-scale-down mb-2"
      />
      <p className="text-white text-sm">${product.price}</p>
    </div>
  );
}
