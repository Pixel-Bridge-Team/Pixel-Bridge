export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center px-6 py-16 sm:px-10">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        Contact
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
        Let&apos;s talk about the next build.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
        For project inquiries, partnerships, or a quick setup review, reach out
        and we&apos;ll respond with the next best step.
      </p>
      <a
        className="mt-8 inline-flex w-fit rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        href="mailto:hello@pixelbridge.dev"
      >
        hello@pixelbridge.dev
      </a>
    </main>
  );
}
