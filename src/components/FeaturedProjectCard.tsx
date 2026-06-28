"use client";
import Image from "next/image";

type FeaturedProjectCardProps = {
  imageSrc: string;
  client: string;
  projectType: string;
  team: string;
};

export default function FeaturedProjectCard({
  imageSrc,
  client,
  projectType,
  team,
}: FeaturedProjectCardProps) {
  const onExploreClick = () => {
    // Add explore behavior here if needed.
  };

  return (
    <div className="w-full max-w-[320px] rounded-xl bg-white p-5 text-center shadow-xl transition hover:-translate-y-1">
      <Image
        src={imageSrc}
        alt={client}
        width={300}
        height={150}
        className="mx-auto mb-5 h-auto w-full rounded-lg  object-cover 
        cursor-pointer transition-transform duration-300"
      />
      <p className="mb-2 text-base font-semibold text-[#1e1e50]">
        Client: {client}
      </p>
      <p className="mb-2 text-sm text-[#4b5563]">Project Type: {projectType}</p>
      <p className="mb-4 text-sm text-[#4b5563]">Team: {team}</p>
      <button
        onClick={onExploreClick}
        className="rounded-full bg-[#0066FF] px-5 py-2 text-white shadow-lg"
        style={{ boxShadow: "0px 4px 20px rgba(0, 102, 255, 0.3)" }}
      >
        Explore More
      </button>
    </div>
  );
}
