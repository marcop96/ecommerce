import NavBar from "./components/NavBar";
export default function App() {
  return (
    <div className="bg-slate-900	h-full w-full">
      <header>
        <NavBar />
      </header>

      <div className="bg-primary h-screen">
        <div className="grid grid-cols-5">
          <div className="col-span-1 bg-slate-900"></div>
          <div className="col-span-3 bg-slate-900"></div>
          <div className="col-span-1 bg-slate-900"></div>
        </div>
      </div>
    </div>
  );
}
