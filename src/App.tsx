import { useState, useEffect } from "react";
import Footer from "./components/Navigation/Footer";
import NavBar from "./components/Navigation/NavBar";
import ProductCard from "./components/products/ProductCard";
import { Product } from "./types";
export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Use useEffect to make the API call
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const addToCartHandler = (product: Product) => {
    console.log(product);

    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className=" h-full min-w-max">
      <nav className="bg-orange-700">
        <NavBar />
      </nav>
      <main className=" bg-orange-100">
        <div className="grid grid-cols-1 gap-2  md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {loading && <p className="flex ">Loading...</p>}
          {products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCartHandler}
            />
          ))}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
