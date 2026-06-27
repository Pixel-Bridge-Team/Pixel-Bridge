const projects = [
  "Brand refresh for a local studio",
  "Marketing site with flexible sections",
  "Portfolio system ready for growth",
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col px-6 py-16 sm:px-10">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        Portfolio
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
        Selected work and setup experiments.
      </h1>
      <ul className="mt-10 space-y-4">
        {projects.map((project) => (
          <li
            key={project}
            className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-neutral-700 shadow-sm"
          >
            {project}
          </li>
        ))}
      </ul>
    </main>
  );
}
