import { useState, useEffect } from "react";
import Footer from "./components/Navigation/Footer";
import NavBar from "./components/Navigation/NavBar";
import ProductCard from "./components/ProductCard";
import { Product } from "./types";
export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Use useEffect to make the API call
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-slate-900 h-full min-w-max">
      <nav>
        <NavBar />
      </nav>
      <main className="  ">
        <div className="grid grid-cols-1 gap-2  md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
