import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Branding",
    description: "CRAFTING CREATIVE IDENTITIES",
    image: "/assests/images/team/branding.png",
  },
  {
    title: "Coding",
    description: "BUILDING SEAMLESS SOLUTIONS",
    image: "/assests/images/team/coding.png",
  },
  {
    title: "AI Integration",
    description: "INNOVATING WITH INTELLIGENCE",
    image: "/assests/images/team/AI.png",
  },
];

export default function JoinTeamSection() {
  return (
    <section className="mt-24 font-sans">
      <div className="w-full overflow-hidden bg-[#0159A2] px-8 py-14 shadow-[0_25px_60px_rgba(37,99,235,.25)] md:px-14">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">
            We're growing — join our creative team.
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            We're always looking for passionate designers and developers.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5"
            >
              <h3 className="mb-6 text-center text-xl font-bold text-white">
                {card.title}
              </h3>

              <div className="relative h-80 w-11/12 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-center leading-7 text-black">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="relative border-3 border-[#0066FF] inline-flex w-[85%] items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-[18px] font-bold text-[#2563EB]! duration-300 shadow-[0_0_30px_12px_rgba(255,255,255,0.1)]"
          >
            View project
          </Link>
        </div>
      </div>
    </section>
  );
}