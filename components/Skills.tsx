"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "purple",
    skills: [
      { name: "Angular 19+", level: 90 },
      { name: "Next.js / React", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "cyan",
    skills: [
      { name: "Java + Spring Boot", level: 88 },
      { name: "Node.js / Fastify", level: 85 },
      { name: "REST API Design", level: 92 },
      { name: "OutSystems Reactive", level: 95 },
    ],
  },
  {
    category: "Database & Infra",
    icon: "🗄️",
    color: "pink",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 75 },
      { name: "Docker", level: 80 },
      { name: "GitHub Actions / CI/CD", level: 78 },
    ],
  },
  {
    category: "Game Development",
    icon: "🎮",
    color: "orange",
    skills: [
      { name: "Godot 4.x / GDScript", level: 75 },
      { name: "Unity / C#", level: 70 },
      { name: "Game Architecture", level: 72 },
    ],
  },
];

const techBadges = [
  "Angular", "React", "Next.js", "TypeScript", "JavaScript",
  "Java", "Spring Boot", "Node.js", "Fastify", "Go",
  "PostgreSQL", "Redis", "Docker", "Vercel", "Railway",
  "GitHub Actions", "Cloudflare R2", "OutSystems", "Godot", "Unity",
  "Prisma", "BullMQ", "Turborepo", "Git", "REST APIs",
];

const colorMap: Record<string, { bar: string; border: string; text: string; bg: string }> = {
  purple: {
    bar: "bg-gradient-to-r from-purple-600 to-purple-400",
    border: "border-purple-600/30",
    text: "text-purple-300",
    bg: "bg-purple-600/10",
  },
  cyan: {
    bar: "bg-gradient-to-r from-cyan-600 to-cyan-400",
    border: "border-cyan-600/30",
    text: "text-cyan-300",
    bg: "bg-cyan-600/10",
  },
  pink: {
    bar: "bg-gradient-to-r from-pink-600 to-pink-400",
    border: "border-pink-600/30",
    text: "text-pink-300",
    bg: "bg-pink-600/10",
  },
  orange: {
    bar: "bg-gradient-to-r from-orange-600 to-orange-400",
    border: "border-orange-600/30",
    text: "text-orange-300",
    bg: "bg-orange-600/10",
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate progress bars
            const bars =
              entry.target.querySelectorAll<HTMLElement>("[data-progress]");
            bars.forEach((bar) => {
              const progress = bar.dataset.progress || "0";
              bar.style.setProperty("--progress", `${progress}%`);
              bar.classList.add("progress-animate");
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 relative" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-cyan-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
            // tech stack
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A broad toolkit built over years of working across the full stack —
            from APIs and frontend frameworks to game engines and DevOps.
          </p>
        </div>

        {/* Skill groups with progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.category}
                className={`reveal bg-[#0d0d2b] rounded-2xl p-6 border ${c.border}`}
                style={{ transitionDelay: `${gi * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className={`text-lg font-bold ${c.text}`}>
                    {group.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${c.bar} w-0`}
                          data-progress={skill.level}
                          style={{ "--progress": `${skill.level}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech badges cloud */}
        <div className="reveal">
          <p className="text-center text-gray-500 text-sm mb-6 font-mono">
            // all technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <span
                key={tech}
                className="skill-badge px-4 py-2 rounded-full text-sm font-medium text-gray-300 bg-white/[0.03] cursor-default"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Currently learning */}
        <div className="reveal mt-14 text-center">
          <p className="text-gray-500 text-sm font-mono mb-4">
            // currently exploring
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Go", "VR Development", "Shader Programming", "AI Agents", "Pixel Art", "Self-hosted LLMs"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-sm font-medium text-purple-300 bg-purple-600/10 border border-purple-600/20 hover:bg-purple-600/20 transition-all duration-200"
                >
                  🔭 {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
