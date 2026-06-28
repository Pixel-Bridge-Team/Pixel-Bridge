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
    <div
      className="flex min-h-[360px] w-full max-w-[320px] flex-col rounded-xl bg-white
      p-5 text-center shadow-xl transition hover:-translate-y-1 md:min-h-[380px]"
    >
      <Image
        src={imageSrc}
        alt={client}
        width={300}
        height={150}
        className="mx-auto mb-5 h-auto w-full rounded-lg object-cover
        cursor-pointer transition-transform duration-300"
      />
      <div className="flex flex-1 flex-col">
        <p className="mb-2 text-base font-semibold text-[#1e1e50]">
          Client: {client}
        </p>
        <p className="mb-2 text-base font-semibold text-[#1e1e50]">
          Project Type: {projectType}
        </p>
        <p className="mb-4 text-base font-semibold text-[#1e1e50]">
          Team: {team}
        </p>
        <button
          onClick={onExploreClick}
          className="mt-auto w-fit self-center rounded-full bg-[#0066FF] px-5 py-2 text-white shadow-lg
          cursor-pointer hover:bg-[#023e99]"
          style={{ boxShadow: "0px 4px 20px rgba(0, 102, 255, 0.3)" }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}
