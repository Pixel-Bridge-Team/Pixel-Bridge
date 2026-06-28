import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { TeamMember } from "@/data/teamMembers";

type Props = {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
};

export default function TeamCard({ member, onSelect }: Props) {
  return (
    <article
      onClick={() => onSelect(member)}
      className="group font-sans cursor-pointer overflow-hidden rounded-[26px] border border-gray-100 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(37,99,235,0.16)]"
    >
      <div className="flex justify-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#EEF5FF]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-lg font-bold text-[#16355C]">{member.name}</h3>

        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[2px] text-gray-400">
          {member.role}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {member.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full px-3 py-1 text-xs font-medium text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <Link
          href="/portfolio"
          onClick={(e) => e.stopPropagation()}
          className="inline-block w-50 rounded-full border-2 border-[#2563EB] py-3 text-center font-bold text-[#2563EB]! transition-all duration-300 hover:bg-[#2563EB] hover:text-white!"
        >
          View Projects
        </Link>
      </div>

      <div className="my-5 h-px bg-gray-100" />

      <div
        className="flex items-center justify-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {member.socials.github && (
          <a
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub
              size={20}
              className="text-gray-600 transition-colors hover:text-black"
            />
          </a>
        )}

        {member.socials.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaLinkedin
              size={20}
              className="text-[#0A66C2] transition hover:opacity-80"
            />
          </a>
        )}

        {member.socials.instagram && (
          <a
            href={member.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaInstagram
              size={20}
              className="text-pink-700 transition hover:text-pink-800"
            />
          </a>
        )}

        {member.socials.facebook && (
          <a
            href={member.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaFacebook
              size={20}
              className="text-blue-600 transition hover:text-blue-700"
            />
          </a>
        )}
      </div>
    </article>
  );
}