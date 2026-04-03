"use client";

import { Pacifico } from "next/font/google";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const goodfellaFont = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

type SocialItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type FooterProps = {
  brandName?: string;
  tagline?: string;
  socialItems?: SocialItem[];
  showBackToTop?: boolean;
};

const defaultSocialItems: SocialItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/Jay-kabdwal",
    icon: FaGithub
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jay-kabdwal/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:jaykabdwal@gmail.com",
    icon: Mail
  },
];

export default function Footer({
  brandName = "Jay Kabdwal",
  tagline = "Designing and shipping modern web experiences.",
  socialItems = defaultSocialItems,
  showBackToTop = true,
}: FooterProps) {
  return (
    <footer className="relative mt-16 overflow-visible rounded-2xl border  bg-black text-white shadow-lg sm:mt-20 lg:mt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.09),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.07),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="text-4xl font-bold leading-[0.98] tracking-wide text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {brandName}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base"
            >
              {tagline}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <p className="mb-1 text-3xl font-bold text-gray-600 sm:text-4xl lg:text-5xl ">
              CONNECT
            </p>
            <p className="mb-4 text-2xl font-semibold text-zinc-300 sm:text-3xl lg:text-4xl ">
              HERE
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1">
              {socialItems.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-2 text-base text-zinc-100 transition hover:border-zinc-500 hover:text-white sm:text-lg"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {showBackToTop ? (
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            viewport={{ once: true }}
            href="#top"
            className="mt-5 mx-auto flex w-fit items-center justify-center 
             rounded-full border border-zinc-700 px-4 py-2 
             text-xs font-medium uppercase tracking-[0.16em] 
             text-white transition hover:border-zinc-500 hover:text-white gap-1.5"
          >
            Back to top <ArrowUpRight />
          </motion.a>
        ) : null}
      </div>
      <div className="w-full overflow-visible px-3 pb-10 pt-3 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-base font-semibold uppercase tracking-[0.12em] text-gray-500 sm:text-xl sm:tracking-[0.22em]"
        >
          You reached the bottom
        </motion.p>
        <h1
          className={`${goodfellaFont.className} whitespace-nowrap text-center leading-[1.16] tracking-tight text-[clamp(2.75rem,12vw,9rem)] text-white/90`}
        >
          {"GoodFella".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block animate-wave"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-zinc-800 pt-6 text-xs tracking-wide text-zinc-400"
        >
          {new Date().getFullYear()} {brandName}. Built with ❤️ and questionable
          sleep schedule...
        </motion.p>
      </div>
    </footer>
  );
}
