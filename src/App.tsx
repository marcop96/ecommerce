import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
export default function App() {
  return (
    <div className="bg-slate-900	h-full w-full">
      <header>
        <NavBar />
      </header>

      <div className="bg-primary h-screen"></div>
      <Footer />
    </div>
  );
}
