import { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border-2 flex flex-col items-center justify-center h-76 w-72 p-4">
      <h2 className="text-white text-lg font-semibold mb-2">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-scale-down mb-2"
      />
      <p className="text-white text-sm">${product.price}</p>

      <button className="text-white border-2 border-radius-2 p-2">
        buy now
      </button>
      <div className="flex flex-row align-center">
        <button className="text-white p-2">-</button>
        <input type="text" placeholder="0" className="w-3 h-1/2" />
        <button className="text-white p-2">+</button>
      </div>
    </div>
  );
}
