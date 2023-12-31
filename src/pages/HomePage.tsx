export default function HomePage() {
  return (
    <div className="flex flex-col   bg-orange-200 rounded-lg">

        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-orange-200 flex  justify-center ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-orange-600 ">
                  Welcome to our E-commerce Store
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl ">
                  Discover our wide range of products and shop with us today.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-700 disabled:pointer-events-none disabled:opacity-50 "
                  href="/products"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}
