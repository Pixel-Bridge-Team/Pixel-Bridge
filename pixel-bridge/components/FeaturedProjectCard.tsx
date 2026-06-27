"use client";
import Image from "next/image";

type FeaturedProjectCardProps = {
  imageSrc: string;
  client: string;
  projectType: string;
  team: string;
};
function onExploreClick() {
  // Implement the logic for the "Explore More" button click here
}
export default function FeaturedProjectCard({
  imageSrc,
  client,
  projectType,
  team,
}: FeaturedProjectCardProps) {
  return (
    <div
      className="font-semibold text-[16px]
        text-[#1e1e50] leading-[28px] 
        items-center text-center shadow-xl
         bg-white rounded-xl p-4"
    >
      <Image
        src={imageSrc}
        alt={client}
        width={300}
        height={150}
        className="border border-black mb-5 h-auto w-auto"
      />
      <p>Client: {client}</p>
      <p>Project Type: {projectType}</p>
      <p>Team: {team}</p>
      <button
        style={{ boxShadow: "0px 4px 20px rgba(0, 102, 255, 0.3)" }}
        onClick={onExploreClick}
        className="mt-4 bg-[#0066FF] px-5
     text-white py-2 px-4 rounded-full"
      >
        Explore More
      </button>
    </div>
  );
}
