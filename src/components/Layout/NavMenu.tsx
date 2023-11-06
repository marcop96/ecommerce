export default function NavMenu() {
  return (
    <nav className="flex w-full space-x-2 p-4">
      {/* <a
        href="#"
        className="hover:text-gray align-middle text-xl  font-semibold text-white"
      >
        Marco
      </a> */}
      <a href="/" className=" text-white hover:text-gray-300">
        Home
      </a>
      <a href="products" className="mx-3 text-white hover:text-gray-300">
        Shop
      </a>
      <a href="FAQ" className="mx-3 text-white hover:text-gray-300">
        FAQ
      </a>
    </nav>
  );
}
