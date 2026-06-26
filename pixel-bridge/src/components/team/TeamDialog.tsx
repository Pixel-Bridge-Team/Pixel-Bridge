"use client";

import { Fragment } from "react";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { TeamMember } from "@/data/teamMembers";
import TeamDetailCard from "./TeamDetailCard";

type Props = {
  member: TeamMember | null;
  onClose: () => void;
};

export default function TeamDialog({
  member,
  onClose,
}: Props) {
  if (!member) return null;

  return (
    <Transition appear show={!!member} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="hidden min-h-full items-center justify-center p-6 md:flex">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="translate-y-4 scale-95 opacity-0"
              enterTo="translate-y-0 scale-100 opacity-100"
              leave="ease-in duration-200"
              leaveFrom="translate-y-0 scale-100 opacity-100"
              leaveTo="translate-y-4 scale-95 opacity-0"
            >
              <DialogPanel className="mt-8 w-full max-w-xl">
                <TeamDetailCard
                  member={member}
                  onClose={onClose}
                />
              </DialogPanel>
            </TransitionChild>
          </div>

          <div className="mt-6 flex min-h-full items-center justify-center p-4 md:hidden">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="ease-in duration-200"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
            >
              <DialogPanel className="max-h-[85vh] w-full max-w-sm overflow-y-auto rounded-3xl bg-white shadow-[0_30px_70px_rgba(15,23,42,.25)]">
                <TeamDetailCard
                  member={member}
                  onClose={onClose}
                />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}