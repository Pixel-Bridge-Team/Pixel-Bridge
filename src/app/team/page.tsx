"use client";

import { useState } from "react";

import HeroSection from "@/components/team/HeroSection";
import TeamCard from "@/components/team/TeamCard";
import TeamDialog from "@/components/team/TeamDialog";
import JoinTeamSection from "@/components/team/JoinTeamSection";

import {
  teamMembers,
  TeamMember,
} from "@/data/teamMembers";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] =
    useState<TeamMember | null>(null);

  return (
    <main className="min-h-screen bg-[#F7FAFC] pb-24">
      <div className="mx-auto max-w-8xl px-8 sm:px-6 lg:px-16">

        <HeroSection />

        <section className="mt-24">
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onSelect={setSelectedMember}
              />
            ))}
          </div>
        </section>

        <JoinTeamSection />
      </div>

      <TeamDialog
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </main>
  );
}