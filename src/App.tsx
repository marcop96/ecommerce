import { useState, useEffect } from "react";
import Footer from "./components/Navigation/Footer";
import NavBar from "./components/Navigation/NavBar";
import ProductCard from "./components/products/ProductCard";
import { Product } from "./types";
import Cart from "./components/products/Cart";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";

export default function App() {
  const [products, setProducts] = useState([]);
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
  //TODO add animation when adding to cart to give user feedback
  //TODO add my Cart section
  //TODO add validation cart
  //TODO remove from cart
  //TODO add more than one to cart? maybe with an input that lets you select quantity before adding, and passing that as prop to add the correct qty
  // const addToCartHandler = (product: Product) => {
  //   console.log(product);

  //   setCart((prevCart) => [...prevCart, product]);
  // };

  return (
    <div className=" h-full min-w-max">
      <nav className="bg-orange-700">
        <NavBar />
      </nav>
      <main className=" bg-orange-100">
        <div className="grid grid-cols-1 gap-2  md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {loading && <p className="flex ">Loading...</p>}
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
      <Cart />
    </div>
  );
}
