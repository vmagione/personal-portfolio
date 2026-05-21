"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    name: "fullstack-auth-template",
    description:
      "Full stack application with authenticated login using Spring Boot and Angular. Implements secure JWT authentication, role-based access control, and REST integration between backend and frontend.",
    tags: ["TypeScript", "Angular", "Spring Boot", "Java", "JWT"],
    link: "https://github.com/vmagione/fullstack-auth-template",
    icon: "🔐",
    featured: true,
    gradient: "from-purple-600/20 to-cyan-600/10",
    accent: "rgba(121,40,202,0.6)",
  },
  {
    name: "video-server-api-v1",
    description:
      "REST API built with Node.js and Fastify, focused on performance, modular architecture, schema validation, and clean error handling. Designed as a scalable backend foundation.",
    tags: ["JavaScript", "Node.js", "Fastify", "REST API"],
    link: "https://github.com/vmagione/video-server-api-v1",
    icon: "🎬",
    featured: true,
    gradient: "from-cyan-600/20 to-blue-600/10",
    accent: "rgba(0,212,255,0.6)",
  },
  {
    name: "node-bittorrent-client",
    description:
      "Web-based torrent downloader built with Node.js and WebTorrent. Upload .torrent files, monitor progress in real time, preview package contents, and manage downloads through a clean dashboard UI.",
    tags: ["JavaScript", "Node.js", "WebTorrent", "Dashboard"],
    link: "https://github.com/vmagione/node-bittorrent-client",
    icon: "⚡",
    featured: false,
    gradient: "from-pink-600/20 to-purple-600/10",
    accent: "rgba(255,0,128,0.6)",
  },
  {
    name: "git-contributions-visualizer",
    description:
      "A CLI command that generates a graph similar to GitHub's contributions graph, showing the number of commits from a local directory. Built with Go for high performance.",
    tags: ["Go", "CLI", "Git", "Visualization"],
    link: "https://github.com/vmagione/git-contribuitions-visualizer",
    icon: "📊",
    featured: false,
    gradient: "from-green-600/20 to-cyan-600/10",
    accent: "rgba(0,212,100,0.6)",
  },
  {
    name: "Simple-games-prototypes",
    description:
      "A compilation of various game prototypes — Pong, Snake, platformers, story-driven games and more — all built in Godot 4.x. A creative playground for game mechanics and systems.",
    tags: ["GDScript", "Godot 4.x", "Game Dev", "Prototypes"],
    link: "https://github.com/vmagione/Simple-games-prototypes",
    icon: "🎮",
    featured: false,
    gradient: "from-orange-600/20 to-pink-600/10",
    accent: "rgba(255,100,0,0.6)",
  },
  {
    name: "Magi-Brick-Cars",
    description:
      "A survival game where you drive a car endlessly dodging other vehicles until you crash. An addictive arcade experience built in Unity with C#.",
    tags: ["C#", "Unity", "Game Dev", "Arcade"],
    link: "https://github.com/vmagione/Magi-Brick-Cars",
    icon: "🚗",
    featured: false,
    gradient: "from-red-600/20 to-orange-600/10",
    accent: "rgba(200,50,50,0.6)",
  },
];

function ExternalLinkIcon() {
  return (
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
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export default function Projects() {
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
    <section id="projects" className="py-28 relative" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal text-center mb-16">
          <p className="text-purple-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            {'// featured work'}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Projects I&apos;ve Built
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects ranging from production-ready APIs and full
            stack apps to game prototypes and CLI tools.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal project-card group relative bg-[#0d0d2b] rounded-2xl p-6 flex flex-col bg-gradient-to-br ${project.gradient} overflow-hidden cursor-pointer`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-600/30 text-purple-300 border border-purple-600/30">
                  Featured
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{project.icon}</div>

              {/* Name */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300 font-mono">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center gap-2 text-gray-500 text-sm group-hover:text-purple-400 transition-colors duration-200">
                <span>View on GitHub</span>
                <ExternalLinkIcon />
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                }}
              />
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal text-center mt-12">
          <a
            href="https://github.com/vmagione"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-white hover:bg-purple-600/10 transition-all duration-300 text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            See all 26 repositories
          </a>
        </div>
      </div>
    </section>
  );
}
