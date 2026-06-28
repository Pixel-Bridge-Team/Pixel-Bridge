const services = [
  "Next.js setup and architecture cleanup",
  "Product landing pages and content systems",
  "Iterative UI polish and delivery support",
];

export default function ServicesPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col px-6 py-16 sm:px-10">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        Services
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
        The setup work that keeps the rest of the project moving.
      </h1>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <section
            key={service}
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <p className="text-base font-medium text-neutral-900">{service}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
