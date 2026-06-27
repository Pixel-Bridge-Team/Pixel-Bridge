export default function PortfolioItemPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center px-6 py-16 sm:px-10">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        Portfolio item
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
        Dynamic portfolio entries are now supported.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
        This is the correctly structured App Router dynamic route for
        `src/app/portfolio/[id]/page.tsx`.
      </p>
    </main>
  );
}
