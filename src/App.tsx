import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
// import ProductCard from "./components/products/ProductCard";
// import { Product } from "./types";
import CartDrawer from "./components/products/Cart/CartDrawer";
import FloatingCartCTA from "./components/products/Cart/FloatingCartCTA";
 import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FAQPage from "./pages/FAQPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {



  return (
    <div className=" h-full w-full ">
      <NavBar />
      <main className=" bg-orange-100 p-4">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
        </Routes>

      </main>
      {useSelector((state: RootState) => !state.drawer.isOpen) && (
        <FloatingCartCTA />
      )}
      <CartDrawer />
      <Footer />
    </div>
    
  );
}
