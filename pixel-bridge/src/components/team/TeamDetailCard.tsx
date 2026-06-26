"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Briefcase, MapPin, X } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { TeamMember } from "@/data/teamMembers";

type Props = {
  member: TeamMember;
  onClose: () => void;
};

export default function TeamDetailCard({
  member,
  onClose,
}: Props) {
  return (
    <div className="overflow-hidden rounded-[30px] bg-white shadow-[0_30px_70px_rgba(15,23,42,.18)]">
      <div className="custom-scrollbar max-h-[85vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex w-full items-start justify-between">
            <div className="flex w-full flex-col items-center gap-5 md:flex-row md:items-start">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-blue-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex flex-col items-start">
                  <h2 className="text-3xl font-extrabold leading-tight text-[#16355C]">
                    {member.name}
                  </h2>

                  <p className="mt-1 font-semibold text-[#2563EB]">
                    {member.role}
                  </p>

                  <div className="mt-4 flex gap-3">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-950 p-2"
                      >
                        <FaGithub size={18} className="text-[#94A3B8]" />
                      </a>
                    )}

                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-950 p-2"
                      >
                        <FaLinkedin size={18} className="text-[#94A3B8]" />
                      </a>
                    )}

                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-950 p-2"
                      >
                        <FaInstagram size={18} className="text-[#94A3B8]" />
                      </a>
                    )}

                    {member.socials.facebook && (
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-950 p-2"
                      >
                        <FaFacebook size={18} className="text-[#94A3B8]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-full bg-[#F5F7FA] text-gray-500 p-2 transition-all duration-300 hover:rotate-90 hover:bg-[#94A3B8] hover:text-white"
            >
              <X size={22} />
            </button>
          </div>

          <div className="my-8 h-px bg-gray-200" />

          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
              About
            </h3>

            <p className="leading-8 text-[#5F6C7B]">
              {member.bio}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4">
              <MapPin size={28} className="text-[#018BD8]" />

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Location
                </p>

                <p className="font-semibold text-[#16355C]">
                  {member.location ?? "Remote"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4">
              <Briefcase size={28} className="text-[#018BD8]" />

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Experience
                </p>

                <p className="font-semibold text-[#16355C]">
                  {member.experience ?? "5+ Years"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0062ff] px-5 py-3 font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,99,235,.35)]"
            >
              Let's Work
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}