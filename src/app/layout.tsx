import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Pixel Bridge",
  description:
    "A clean, root-level Next.js setup for the Pixel Bridge project.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${inter.className} font-sans`}>
        {children}
      </body>
    </html>
  );
}
