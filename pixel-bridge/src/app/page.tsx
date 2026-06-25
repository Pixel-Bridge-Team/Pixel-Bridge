import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/*Hero Section */}
      <section
        className="
    relative
    flex flex-col items-center
    w-full
    min-h-screen
    bg-[#1E1E50]
    pt-16 md:pt-24
    pb-16 md:pb-32
    px-5 md:px-10 lg:px-30
    overflow-hidden
  "
      >
        <div
          className="
    absolute
    top-10 md:top-20
    left-0 md:left-20
    w-40 h-40
    md:w-64 md:h-64
    rounded-full
    bg-[#0066FF]/20
    blur-[80px]
  "
        ></div>
        <div
          className="
    absolute
    bottom-0
    right-0
    w-40 h-40
    md:w-64 md:h-64
    rounded-full
    bg-[#C084FC]/30
    blur-[80px]
  "
        ></div>

        <h1
          className="
    text-center
    font-bold
    text-white
    font-sans
    leading-tight
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-[70px]
  "
          style={{ textShadow: "0px 4px 10px rgba(85, 85, 85, 1)" }}
        >
          We Bridge <span className="text-[#018BD8]">Code</span> &{" "}
          <span className="text-[#018BD8]">Creativity</span>
        </h1>
        <p
          className="
    mt-6
    text-center
    text-[#D1D5DB]
    font-medium
    text-base
    sm:text-lg
    md:text-xl
    lg:text-2xl
    max-w-[784px]
  "
        >
          A multidisciplinary creative-tech studio crafting digital experiences,
          brands, and products that connect ideas to impact.
        </p>

        <button
          className="
    mt-8
    h-12 md:h-15
    px-6 md:px-8
    rounded-full
    bg-[#0066FF]
    text-white
    font-semibold
    text-base md:text-lg
    shadow-[0_0_20px_rgba(0,102,255,0.3)]
  "
        >
          Start Project
        </button>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={1024}
          height={656}
          className="
    mt-10
    rounded-l-xl
    border border-white
    w-full
    max-w-xs
    sm:max-w-md
    md:max-w-2xl
    lg:max-w-5xl
    h-auto
  "
        />
      </section>
    </main>
  );
}
