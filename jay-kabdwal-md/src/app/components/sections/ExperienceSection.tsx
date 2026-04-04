"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* BIG HEADING */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            FRESHER WITH
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-700">
            REAL EXPERIENCE
          </h1>
        </div>

        {/* EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition"
        >
          <div className="flex items-start justify-between gap-4">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl font-semibold text-white">Akitra</h2>

              <p className="text-zinc-400 mt-2">
                Working as a Full Stack Developer, building scalable web
                applications using React Node PostgreSQL. Focused on creating
                responsive UI, REST APIs, authentication systems, and real-world
                features.
              </p>

              <p className="text-zinc-500 mt-4">2026 – Present</p>
            </div>
          </div>
        </motion.div>

        {/* OPTIONAL SECOND CARD (PROJECT EXPERIENCE) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 relative border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Personal Projects
              </h2>

              <p className="text-zinc-400 mt-2">
                Built full-stack applications using React, Node.js, MongoDB, and
                modern technologies.
              </p>

              <p className="text-zinc-500 mt-4">2025 – Present</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
