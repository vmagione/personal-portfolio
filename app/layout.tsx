import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinnícius Magione | Senior Software Analyst & Full Stack Developer",
  description:
    "Senior Software Analyst and Full Stack Developer based in Belo Horizonte, Brazil. Building web systems, APIs, and games with passion for clean architecture and innovation.",
  keywords: [
    "Vinnícius Magione",
    "Full Stack Developer",
    "Software Engineer",
    "Angular",
    "Next.js",
    "Spring Boot",
    "Godot",
    "Belo Horizonte",
    "Brazil",
  ],
  authors: [{ name: "Vinnícius Magione" }],
  openGraph: {
    title: "Vinnícius Magione | Senior Full Stack Developer",
    description:
      "Senior Software Analyst building web systems, APIs, and games.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinnícius Magione | Senior Full Stack Developer",
    description:
      "Senior Software Analyst building web systems, APIs, and games.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
