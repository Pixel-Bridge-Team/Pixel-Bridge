"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex items-center">
                {/* 
                  NOTE: Replaced the original image with a placeholder that
                  matches the design. Ensure your logo has a transparent background.
                */}
                <Image
                  src="/assests/images/common/navbar-logo.png" // Replace with your actual logo file
                  alt="Pixel Bridge Logo"
                  width={150}
                  height={40}
                  priority
                  className="h-14 w-auto" // Adjusted size to match the design
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavLinks />
            </div>

            {/* CTA & Mobile Menu Button */}
            <div className="flex-1 flex justify-end items-center">
              {/* CTA Button (Desktop) */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-7 rounded-full shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all text-sm"
              >
                Start Project
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 -mr-2 rounded-md hover:bg-neutral-100"
              >
                <Menu size={28} className="text-neutral-900" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
};

export default Header;
