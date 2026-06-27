const team = [
  { name: "Amina", role: "Design systems" },
  { name: "Noor", role: "Frontend engineering" },
  { name: "Rahim", role: "Delivery and QA" },
];

export default function TeamPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col px-6 py-16 sm:px-10">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        Team
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
        Small team, tight feedback loop, fast shipping.
      </h1>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {team.map((member) => (
          <article
            key={member.name}
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-neutral-950">{member.name}</h2>
            <p className="mt-2 text-sm text-neutral-600">{member.role}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
