"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "ChatGPT", note: "AI Pair Programmer" },
  { name: "Node.js", note: "Backend Runtime" },
  { name: "Claude", note: "AI Research Assistant" },
  { name: "React", note: "Frontend Library" },
  { name: "Next.js", note: "Fullstack Framework" },
  { name: "TypeScript", note: "Type-safe JavaScript" },
  { name: "Tailwind", note: "Utility-first Styling" },
  { name: "MongoDB", note: "Document Database" },
  { name: "PostgreSQL", note: "Relational Database" },
];

const ToolsSection = () => {
  return (
    <section className="relative w-full mt-10 rounded-3xl bg-[#080707] px-5 py-12 text-white sm:px-8 md:px-10 lg:px-14 lg:py-16 overflow-hidden">
      {/* Container-safe wrapper */}
      <div className="mx-auto w-full max-w-6xl">
        {/* Headings */}
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-black uppercase tracking-tight sm:text-6xl"
        >
          Premium
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-1 text-5xl font-black uppercase tracking-tight text-zinc-700 sm:text-6xl"
        >
          Tools
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-8 max-w-3xl text-2xl font-semibold sm:text-3xl"
        >
          Top-tier technologies I use to build scalable and high-performance
          applications.
        </motion.p>

        {/* GRID (BEST for container-fit) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, idx) => (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-zinc-700 bg-zinc-900/90 p-6 hover:border-green-500/40 transition"
            >
              <p className="text-2xl font-bold">{tool.name}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
                {tool.note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
