import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Bridge | Where Ideas Become Digital Reality",
  description:
    "Pixel Bridge — Expert Solutions for Digital Excellence. We design, develop, and deliver world-class digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-full flex flex-col font-sans bg-white text-neutral-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer variant="simple" />
      </body>
    </html>
  );
}
