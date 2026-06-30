import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FOOTER_NAV_LINKS, SKILLS } from "@/utils/constants";
import { FooterProps } from "@/types/layout.types";
import SocialIcons from "./SocialIcons";
import NewsletterForm from "./NewsletterForm";

const Footer: React.FC<FooterProps> = ({ variant = "simple" }) => {
  return (
    <footer className="bg-darkNavy-3 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + Description + Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assests/images/common/footer-logo.jpg"
                alt="Pixel Bridge Icon"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold text-white">
                Pixel Bridge
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              We bridge code &amp; creativity. A multidisciplinary team building
              digital experiences that connect imagination with execution.
            </p>
            <SocialIcons />
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white/90">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-hoverBlue transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Skills */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white/90">
              Our Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill.label}
                  className="px-4 py-2 text-sm rounded-md bg-[#1E293B] text-white/90 hover:bg-hoverBlue hover:text-white transition-colors duration-200 cursor-default"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Connect / Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Connect
            </h4>

            <a
              href="mailto:pixelbridge@gmail.com"
              className="flex items-center gap-3 text-white/80 hover:text-hoverBlue transition"
            >
              <Mail size={18} className="text-hoverBlue" />
              <span className="text-sm">pixelbridge@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 text-white/80">
              <MapPin size={18} className="text-hoverBlue" />
              <span className="text-sm">Worldwide / Remote</span>
            </div>

            {variant === "newsletter" ? (
              <div className="mt-2">
                <NewsletterForm />
              </div>
            ) : (
              <>
                <p className="text-sm text-white/70 italic mt-2">
                  Let&apos;s build something amazing together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-[268px] h-[48px] bg-white text-[#0a0f2c] font-semibold rounded-[8px] text-[16px] leading-[24px] tracking-[0.01em] hover:bg-[#0066FF] hover:text-white transition-colors duration-200 shadow-lg shadow-black/10"
                >
                  Let&apos;s Talk
                  <span className="text-lg">→</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Pixel Bridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
