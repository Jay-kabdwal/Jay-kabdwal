"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black px-4 py-12 text-white">
      <motion.div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-lime-500/20 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12"
      >
        <p className="text-7xl font-black leading-none text-orange-400 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-lg text-base text-zinc-300 sm:text-lg">
          This page does not exist or has been moved.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-black px-6 py-3 font-medium text-white transition hover:border-orange-400 hover:text-lime-300"
          >
            <ArrowLeft size={18} />
            Back To Home
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
