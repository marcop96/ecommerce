import ProductCard from "./ProductCard";
import { Product } from "../../types";
import {useState,useEffect} from "react";

export default function DisplayProducts(){
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
return(
  <>
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
</>

)}
