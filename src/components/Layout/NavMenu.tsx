export default function NavMenu() {
  return (
    <nav className="flex w-full py-2 justify-evenly">
      {/* <a
        href="#"
        className="hover:text-gray align-middle text-xl  font-semibold text-white"
      >
        Marco
      </a> */}
      <a href="/" className="px-3 text-white hover:text-gray-300">
        Home
      </a>
      <a href="products" className=" px-3 text-white hover:text-gray-300">
        Shop
      </a>
      <a href="FAQ" className="px-3 text-white hover:text-gray-300">
        FAQ
      </a>
    </nav>
  );
}
