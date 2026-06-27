export default function LegacyPortfolioItemPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center px-6 py-16 sm:px-10">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        Portfolio item
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
        This route is kept valid while the setup gets normalized.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
        The project now runs from the root `Pixel Bridge` folder, and this page
        remains as a harmless legacy route until the app structure is fully
        cleaned up.
      </p>
    </main>
  );
}
