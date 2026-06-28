import Image from "next/image";

import CoreValueCard from "../components/CoreValueCard";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
type CoreValueProps = {
  title: string;
  text: string;
  id: number;
  featured: boolean;
};

type FeaturedProject = {
  id: number;
  imageSrc: string;
  client: string;
  projectType: string;
  team: string;
};
const coreValues: CoreValueProps[] = [
  {
    title: "Our Mission",
    text: `We are here to redefine how businesses experience digital growth 
              by crafting solutions that merge design, technology, and
              innovation into single, powerful direction. We strive to go beyond
              execution - focusing on clarity, usability, and long-term impact
              in every project we deliver. At Pixel Bridge, we believe that
              strong digital foundation are built through purposeful design,
              smart development , enabling brands to adapt, evolve, and lead in
              a constantly changing digital landscape.`,
    id: 1,
    featured: false,
  },
  {
    title: "Our Vision",
    text: `  we envision a future where every brand, regardless of size or
              industry, has access to powerful digital tools and creative
              solutions that allow the to compete confidently in the digital
              world. Our vision is to become a trusted creative technology
              partner known for innovation, reliability, and excellence. We
              strive to shape digital experiences that not only meet current
              demands but also support long-term growth by helping businesses
              adapt and stay relevant in a fast-changing digital environment.
            `,
    id: 2,
    featured: true,
  },
  {
    title: "Our Values",
    text: `At Pixel Bridge, our values shape every decision, every project,
              and every partnership. We approach challenges with curiosity,
              embrace new ideas with an open mind, and peruse excellence through
              careful attention to detail. We believe great work is built on
              accountability, respect, and a genuine commitment to understanding
              oue client’s goals. By fostering a culture of learning,
              adaptability, ad teamwork, we create solutions that are not only
              effective today but capable of creating lasting value for the
              future.`,
    id: 3,
    featured: false,
  },
];
const featuredProjectData: FeaturedProject[] = [
  {
    id: 1,
    imageSrc: "/assests/images/home/featured-project-1.png",
    client: `Brad Mood Board`,
    projectType: `Website Development`,
    team: `FrontendDev`,
  },
  {
    id: 2,
    imageSrc: "/assests/images/home/featured-project-2.png",
    client: `Mana Company`,
    projectType: `E-Commerece Website`,
    team: `Backend Solution`,
  },
  {
    id: 3,
    imageSrc: "/assests/images/home/featured-project-3.png",
    client: `Wild Horizon`,
    projectType: `Logo Design`,
    team: `Branding`,
  },
];
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
    max-w-196
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
          src="/assests/images/home/hero-image.png"
          alt="Hero Image"
          width={1024}
          height={656}
          priority
          className="
    mt-10
    rounded-l-xl
    border border-slate
    border-top-5
    w-full
    max-w-xs
    sm:max-w-md
    md:max-w-2xl
    lg:max-w-5xl
    h-auto
  "
        />
      </section>

      {/*Trusted By Section*/}
      <section
        className="
      w-full
      py-10
      md:py-14 
      px-5
      md:px-8
      flex 
      flex-col
      items-center"
      >
        <h1
          className="font-bold text-[#91959F] text-xl
        sm:text-2xl md:text-[26px]"
        >
          Trusted By
        </h1>
        <div
          className="flex flex-wrap items-center
           w-full justify-center"
        >
          <Image
            src="/assests/images/home/aqsalogo.png"
            alt="Aqsa Logo"
            width={120}
            height={60}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
          <Image
            src="/assests/images/home/cti.png"
            alt="CTI Logo"
            width={120}
            height={60}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </div>
      </section>

      {/*About Section*/}
      <section
        className="flex
      flex-col
      lg:flex-row
      items-center
      lg:items-start
      justify-center
      py-12 px-6 
      md:px-12 gap-18 lg:gap-0"
      >
        {/*about image div*/}
        <div className="relative w-full lg:w-[37%] flex flex-col items-center">
          <Image
            src="/assests/images/home/about-image.png"
            alt="About Image"
            width={450}
            height={618}
            className="rounded-[29px] border border-black w-full h-auto object-cover"
          />
        </div>
        <div
          className="relative
         lg:-translate-y-10 z-10 w-full lg:min-h-163
          lg:w-[23%] bg-[#1e1e50] text-center
           text-white rounded-[34px] items-center 
            py-6 px-4 md:py-8 md:px-6 shadow-md"
        >
          <h1 className="font-semibold text-3xl mb-4">About Us</h1>
          <p className="font-medium text-[17px]">
            We are <span className="font-bold">Pixel Bridge</span>, a creative
            technology company passionate about transforming ideas into
            impactful digital experiences. By combining creativity, innovation,
            and technical expertise, we help businesses build strong brands and
            meaningful connections with their audiences. Our mission is to
            bridge the gap between creativity and technology, turning ambitious
            ideas into lasting digital success. We empower organizations with
            the digital tools and experiences they need to succeed today and
            stay relevant.
          </p>
          <button
            className="bg-[#0066FF] text-white 
          py-2 px-6 rounded-full font-semibold
           hover:bg-[#0052CC] transition-colors
           mt-4"
            style={{ boxShadow: "0px 4px 20px rgba(0, 102, 255, 0.3)" }}
          >
            Read More
          </button>
        </div>

        {/*Why choose us div*/}
        <div
          className="relative  w-full  rounded-[26px] lg:min-h-154
            lg:w-[45%] space-y-4 lg:py-10 lg:px-4 px-4  shadow-2xl"
        >
          <h2 className="text-[#42A5F8] font-semibold text-3xl">
            Why Choose Us
          </h2>
          <div className="px-4 py-2.5">
            <h3 className="text-[#1e1e50] font-bold text-xl">
              Tailored Solution
            </h3>
            <p className="text-[#4B5563] text-base font-regular">
              Every business is different, so we create tailored digital
              solutions that reflect your brand, audience, and objectives.
            </p>
          </div>

          <div className="py-2.5 px-4">
            <h3 className="text-[#1e1e50] font-bold text-xl">
              Quality Assurance
            </h3>
            <p className="text-[#4B5563] text-base font-regular">
              Our commitment to quality assurance guarantees reliable,
              consistent, and polished results in every project we deliver.
            </p>
          </div>

          <div className="px-4 py-2.5">
            <h3 className="text-[#1e1e50] font-bold text-xl">Expert Team</h3>
            <p className="text-[#4B5563] text-base font-regular">
              Our experts in design, development and digital innovation work
              together to turn ideas into powerful projects.
            </p>
          </div>

          <div className="px-4 py-2.5">
            <h3 className="text-[#1e1e50] font-bold text-xl">
              Timely Delivery
            </h3>
            <p className="text-[#4B5563] text-base font-regular">
              We respect deadlines and ensure projects are delivered efficiently
              without compromising quality.
            </p>
          </div>
        </div>
      </section>

      {/*What Defines US Section */}
      <section className="bg-[#1e1e50] w-full py-12 px-6 md:px-12 flex flex-col items-center">
        <div className="flex items-center justify-center gap-5 md:gap-8 mb-5">
          <div className="h-px w-10 sm:w-16 md:w-50 bg-white"></div>
          <h1 className="text-white font-semibold text-[25px] md:text-[40px]">
            What Defines Us
          </h1>
          <div className="h-px w-10 sm:w-16 md:w-50 bg-white"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:mt-30">
          {coreValues.map((card) => (
            <CoreValueCard
              key={card.id}
              title={card.title}
              text={card.text}
              featured={card.featured}
            />
          ))}
        </div>
      </section>

      {/*Featured Project Section*/}
      <section
        className="w-full bg-[#F3F4F6]
      py-12 px-6 md:px-7 align-items
      flex flex-col items-center
      justify-center"
      >
        <h1 className="font-bold text-[#1E1E50] text-[25px] md:text-[40px]">
          Featured <span className="text-[#0066FF]">Projects</span>
        </h1>
        <p className="text-[#4B5563] text-[18px] font-regular w-3xl text-center mt-5">
          Every project tells a story. Discover how we turn vision into reality
          through creative design, smart technology, and impactful solutions.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:mt-10">
          {featuredProjectData.map((card) => (
            <FeaturedProjectCard
              key={card.id}
              imageSrc={card.imageSrc}
              client={card.client}
              projectType={card.projectType}
              team={card.team}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
