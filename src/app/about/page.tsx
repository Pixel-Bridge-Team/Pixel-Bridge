export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col justify-center px-6 py-16 sm:px-10">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        About
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
        We build digital experiences with care, clarity, and momentum.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
        Pixel Bridge is a small studio setup focused on clean product thinking,
        fast delivery, and interfaces that feel intentional from the first
        screen.
      </p>
    </main>
  );
}
