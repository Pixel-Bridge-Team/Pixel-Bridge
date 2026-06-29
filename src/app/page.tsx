export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
          Expert Solutions for{" "}
          <span className="bg-gradient-creative bg-clip-text text-transparent">
            Digital Excellence
          </span>
        </h1>
        <p className="text-lg text-neutral-700 mb-8">
          Welcome to Pixel Bridge — Where ideas become digital reality.
        p>
        <button className="bg-gradient-primary text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition">
          Start Project
        </button>
      </div>
    </section>
  );
}