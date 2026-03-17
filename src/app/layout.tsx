import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roshan Noronha — Art · Merch · AI · Systems",
  description:
    "Mumbai-based creative technologist building at the intersection of art, commerce, and AI.",
  openGraph: {
    title: "Roshan Noronha",
    description:
      "Art · Merch · AI · Systems — Building at the intersection of creativity and technology.",
    url: "https://roshan.creatingadam.in",
    siteName: "Roshan Noronha",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased bg-base text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
