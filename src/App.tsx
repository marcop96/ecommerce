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
    <div className="bg-slate-900 h-full w-full">
      <header>
        <NavBar />
      </header>
      <h1 className="text-red-500">asdof</h1>
      <main className="bg-primary h-screen ">
        <div className="grid grid-cols-3 gap-4 ">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>{" "}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
