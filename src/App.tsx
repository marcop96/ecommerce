import { useState, useEffect } from "react";
import Footer from "./components/Navigation/Footer";
import NavBar from "./components/Navigation/NavBar/NavBar";
import ProductCard from "./components/products/ProductCard";
import { Product } from "./types";
import CartDrawer from "./components/products/Cart/CartDrawer";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    // Use useEffect to make the API call
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className=" w-full h-full relative">
      <NavBar />
      <main className=" bg-orange-100 p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {loading && <p className="flex ">Loading...</p>}
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
