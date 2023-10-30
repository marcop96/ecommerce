import { useState, useEffect } from "react";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
import ProductCard from "./components/products/ProductCard";
import { Product } from "./types";
import CartDrawer from "./components/products/Cart/CartDrawer";
import OpenDrawerIcon from "./components/products/Cart/OpenDrawerIcon";
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
  //TODO carrito icono abajo a la derecha fixed para abrir el drawer

  return (
    <div className=" w-full h-full relative">
      <NavBar />
      <main className=" bg-orange-100 p-4">
        <OpenDrawerIcon />
        {loading ? (
          <div className="h-screen">
            <p className=" ">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
