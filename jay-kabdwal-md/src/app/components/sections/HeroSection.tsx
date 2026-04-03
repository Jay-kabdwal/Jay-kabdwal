"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const stats = [
    { value: "FRESHER", label: "OPEN TO OPPORTUNITIES" },
    { value: "MERN", label: "STACK SPECIALIZATION" },
    { value: "FAST", label: "LEARNER" },
  ];

  return (
    <section className="min-h-screen mt-6 bg-black text-white px-6 md:px-16 py-12 flex flex-col justify-center relative overflow-hidden z-0">
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="space-y-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-3 md:text-7xl font-extrabold leading-tight"
        >
          SOFTWARE
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-orange-500"
        >
          ENGINEER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl text-lg md:text-xl text-zinc-400 mt-4"
        >
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </motion.p>
      </div>

      {/* 🧊 Glass Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-10 mt-10 flex-wrap rounded-3xl p-6 
        bg-white/5 backdrop-blur-lg border border-white/10 
        shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">{stat.value}</h2>
            <p className="text-xs md:text-sm text-zinc-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "keyframes", stiffness: 200 }}
          className="group bg-orange-500/90 backdrop-blur-md 
          rounded-2xl p-6 h-40 flex flex-col justify-between cursor-pointer
          shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
        >
          <p className="font-semibold text-2xl">
            CREATIVE UI
            <br />&
            <br />
            SMOOTH EXPERIENCE
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "keyframes", stiffness: 200 }}
          className="group bg-lime-400/90 text-black backdrop-blur-md 
          rounded-2xl p-6 h-40 flex flex-col justify-between cursor-pointer
          shadow-lg hover:shadow-lime-400/40 transition-all duration-300"
        >
          <p className="font-semibold text-2xl">
            LEARNING.
            <br /> BUILDING.
            <br /> IMPROVING.
            <br /> EVERYDAY
          </p>
        </motion.div>
      </div>
    </section>
  );
}
