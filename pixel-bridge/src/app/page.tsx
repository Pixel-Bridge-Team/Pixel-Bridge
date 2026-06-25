import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/*Hero Section */}
      <section
        className="flex flex-col w-full h-299.25
                    items-center bg-[#1E1E50]
                    pt-24  pb-32 px-30  m-0"
      >
        <h1
          className="text-white font-bold
                      text-[70px] text-shadow-2xs
                      font-['Poppins']"
        >
          We Bridge <span className="text-[#0066FF]">Code</span> &{" "}
          <span className="text-[#0066FF]">Creativity</span>
        </h1>
        <p className="text-[#D1D5DB] font-medium text-2xl text-center w-[784]">
          A multidisciplinary creative-tech studio crafting digital experiences,
          brands, and products that connect ideas to impact.
        </p>
        <button
          className="text-white font-semibold text-lg bg-[#0066FF] 
                          pt-4 pb-4 px-8 rounded-full
                           h-15 w-56.25 m-8"
        >
          Start Project
        </button>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          className="rounded-l-xl border max-w-5xl"
          width={1024}
          height={656}
        />
      </section>
    </main>
  );
}
