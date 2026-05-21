"use client";

import { useEffect, useRef } from "react";

const socials = [
  {
    name: "GitHub",
    handle: "@vmagione",
    href: "https://github.com/vmagione",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "hover:border-gray-400 hover:text-white",
    description: "26 public repositories",
  },
  {
    name: "LinkedIn",
    handle: "in/vmagione",
    href: "https://www.linkedin.com/in/vmagione/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "hover:border-blue-400 hover:text-blue-300",
    description: "Professional network",
  },
  {
    name: "Email",
    handle: "vinniciusmagione@gmail.com",
    href: "mailto:vinniciusmagione@gmail.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "hover:border-purple-400 hover:text-purple-300",
    description: "Say hello!",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-28 relative" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-purple-900/15 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6" ref={sectionRef}>
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-pink-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            // get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Always up for a good conversation about tech, games, or side
            projects. Feel free to reach out anytime.
          </p>
        </div>

        {/* Social cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {socials.map((social, i) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name !== "Email" ? "_blank" : undefined}
              rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`group flex flex-col items-center text-center p-6 rounded-2xl bg-[#0d0d2b] border border-white/10 text-gray-400 transition-all duration-300 ${social.color} hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-900/20`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-1">
                {social.name}
              </h3>
              <p className="text-sm font-mono text-gray-500 mb-2 break-all">
                {social.handle}
              </p>
              <p className="text-xs text-gray-600">{social.description}</p>
            </a>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
        <p>
          Crafted with ❤️ by{" "}
          <span className="gradient-text font-semibold">Vinnícius Magione</span>{" "}
          · Built with Next.js & Tailwind CSS · Hosted on Vercel
        </p>
      </div>
    </section>
  );
}
