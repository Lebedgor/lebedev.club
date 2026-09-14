import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BackgroundFx } from "@/components/background-fx";
import { LanguageProvider } from "@/components/language-provider";
import { Nav } from "@/components/nav";
import { StarField } from "@/components/star-field";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "LEBEDEV LABS — Full Stack Web Developer",
  description:
    "Full Stack Web Developer with 8+ years of experience. E-commerce (OpenCart, WordPress, WooCommerce), plugins & modules, full-stack apps with React, Node.js and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <LanguageProvider>
          <StarField />
          <div className="glow g1" aria-hidden />
          <div className="glow g2" aria-hidden />
          <div className="glow g3" aria-hidden />
          <BackgroundFx />
          <Nav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
