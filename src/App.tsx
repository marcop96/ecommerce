import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
import ProductCard from "./components/products/ProductCard";
import { Product } from "./types";
import CartDrawer from "./components/products/Cart/CartDrawer";
import FloatingCartCTA from "./components/products/Cart/FloatingCartCTA";
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
    <div className=" h-full w-full ">
      <NavBar />
      <main className=" bg-orange-100 p-4">
        {loading ? (
          <div className="h-screen">
            <p className=" ">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
      //TODO when drawers open hide icon
      {useSelector((state: RootState) => !state.drawer.isOpen) && (
        <FloatingCartCTA />
      )}
      <CartDrawer />
    </div>
  );
}
