"use client";

import { useEffect, useState } from "react";

const roles = [
  "Senior Full Stack Developer",
  "OutSystems Specialist",
  "Game Developer",
  "API Architect",
  "AI Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-700/15 blur-3xl" />
        <div className="orb-2 absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="orb-3 absolute top-2/3 left-1/2 w-64 h-64 rounded-full bg-pink-600/10 blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(121,40,202,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(121,40,202,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-600/40 bg-purple-600/10 text-purple-300 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight">
          <span className="text-white">Vinnícius</span>
          <br />
          <span className="gradient-text">Magione</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl text-gray-300 font-light">
            {displayed}
            <span className="cursor-blink text-purple-400">|</span>
          </span>
        </div>

        {/* Bio */}
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-10">
          Senior Software Analyst at{" "}
          <span className="text-purple-300 font-medium">Unimed-BH</span>,
          crafting innovation systems, SaaS products, and game experiences.
          Passionate about clean architecture, AI-driven workflows, and building
          things that actually work in production.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-10">
          <svg
            className="w-4 h-4 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Belo Horizonte, Minas Gerais, Brazil
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold text-gray-200 border border-gray-600 hover:border-purple-500 hover:text-white hover:bg-purple-600/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "20+", label: "Projects Built" },
            { value: "∞", label: "Coffee Consumed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-600 text-xs animate-bounce">
          <span>Scroll down</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
