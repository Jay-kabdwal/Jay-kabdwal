"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    name: "Streamify",
    type: "Language Exchange Platform",
    tone: "from-violet-500 to-violet-700",
    accent: "bg-violet-400/35",
    link: "https://github.com/Jay-kabdwal/Streamify",
  },
  {
    name: "College Feedback Portal",
    type: "Capture Student Feedback React & Node",
    tone: "from-amber-400 to-emerald-500",
    accent: "bg-amber-300/35",
    link: "https://github.com/Garimabisht12/feedback_management_system",
  },
  {
    name: "Productify",
    type: "Ecommerce PERN App",
    tone: "from-cyan-400 to-blue-600",
    accent: "bg-cyan-300/35",
    link: "https://github.com/Jay-kabdwal/PRODUCTIFY",
  },
  {
    name: "Face Recognition Attendence App",
    type: "E-commerce MERN App",
    tone: "from-pink-500 to-red-500",
    accent: "bg-pink-300/35",
    link: "https://github.com/Jay-kabdwal/staff-attendance-app",
  },
  {
    name: "Localfoodie",
    type: "React Static food ordering Website",
    tone: "from-green-400 to-emerald-600",
    accent: "bg-green-300/35",
    link: "https://github.com/Jay-kabdwal/LocalFoodie",
  },
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="relative mt-10 bg-black px-5 py-14 text-white sm:px-8 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-8xl"
        >
          Recent
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-1 text-5xl font-black uppercase leading-[0.88] tracking-tight text-zinc-700 sm:text-7xl md:text-8xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 space-y-5 sm:mt-12">
          {visibleProjects.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group block rounded-3xl border border-zinc-900 bg-[#141313] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:p-5"
            >
              <div className="grid items-center gap-4 sm:grid-cols-[150px_1fr_auto] sm:gap-6">
                <div
                  className={`relative h-28 overflow-hidden rounded-2xl bg-gradient-to-br ${project.tone} sm:h-32`}
                >
                  <div className="absolute inset-0 bg-black/25" />
                  <div
                    className={`absolute -right-7 -top-7 h-20 w-20 rounded-full blur-2xl ${project.accent}`}
                  />
                  <div className="absolute left-3 top-3 rounded-md border border-white/25 bg-black/25 px-2 py-1 text-[11px] font-medium uppercase tracking-wider text-white/90">
                    Preview
                  </div>
                  <div className="absolute bottom-3 left-3 text-xs text-white/80">
                    {project.name}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-lg text-zinc-400">{project.type}</p>
                </div>

                <div className="justify-self-end rounded-full border border-transparent p-2 text-orange-400 transition group-hover:border-orange-400/30 group-hover:bg-orange-400/10">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full border border-zinc-700 px-6 py-2 text-sm text-zinc-300 transition hover:border-orange-400 hover:text-white"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
