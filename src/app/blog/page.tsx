const posts = [
  {
    title: "Designing a simpler launch flow",
    summary: "How we trimmed friction from onboarding without losing flexibility.",
  },
  {
    title: "The case for reusable sections",
    summary: "A practical way to keep a site consistent as content grows.",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col px-6 py-16 sm:px-10">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        Blog
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
        Notes, updates, and practical field work.
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-neutral-950">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              {post.summary}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
