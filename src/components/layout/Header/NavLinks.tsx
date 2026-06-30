"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/utils/constants";

interface NavLinksProps {
  onLinkClick?: () => void;
  mobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick, mobile = false }) => {
  const pathname = usePathname();

  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-6 items-center"
          : "hidden lg:flex items-center gap-8"
      }
    >
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onLinkClick}
              className={`relative text-base font-medium transition-colors duration-200 hover:text-[#0066FF] ${
                isActive ? "text-[#0066FF]" : "text-neutral-700"
              }`}
            >
              {link.label}
              {isActive && !mobile && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0066FF] rounded-full" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
