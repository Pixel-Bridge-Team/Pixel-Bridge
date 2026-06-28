import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-15 md:pt-20 font-sans">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-[#0159A2] md:text-6xl">
          Meet Our Team
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 md:text-base">
          The people behind Pixel Bridge who build creative digital experiences.
        </p>
      </div>

      <div className="mx-auto mt-10 overflow-hidden">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative flex items-center justify-center p-10 lg:p-14">
            <div className="absolute h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

            <Image
              src="/assests/images/team/bg.png"
              alt="Team Illustration"
              width={520}
              height={420}
              priority
              className="relative z-10 w-full max-w-md object-contain transition duration-500 hover:scale-105"
            />
          </div>

          <div className="px-8 pb-10 lg:px-12 lg:pb-0">
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#102A43] md:text-5xl">
              Take Your Business
              <br />
              <span className="text-black">to the Next Level</span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-500">
              Boost your success with our expert digital solutions. We combine
              strategy, creativity and technology to craft modern products that
              delight users and grow businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-3 font-bold text-white! shadow-[0_0_25px_6px_rgba(37,99,235,0.45)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                Start Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full border-2 border-[#2563EB] px-7 py-3 font-bold text-[#2563EB]! transition-all duration-300 hover:-translate-y-1 hover:bg-[#2563EB] hover:text-white! active:scale-95"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}