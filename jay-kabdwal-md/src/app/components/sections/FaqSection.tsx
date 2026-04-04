"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I build modern full-stack web applications using the MERN stack, focusing on performance, scalability, and clean UI.",
  },
  {
    question: "What is your design process?",
    answer:
      "I follow a structured approach: research → wireframing → UI design → development → testing → deployment.",
  },
  {
    question: "How do you handle project timelines?",
    answer:
      "I break projects into milestones, provide regular updates, and ensure timely delivery with proper planning.",
  },
  {
    question: "Can you work with existing teams?",
    answer:
      "Yes, I collaborate efficiently with teams using Git, Agile workflows, and clear communication.",
  },
  {
    question: "What tools do you use?",
    answer:
      "React, Next.js, Node.js, MongoDB, Tailwind CSS, Framer Motion, and modern DevOps tools.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-10">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-8xl text-transparent m-auto">
            Questions
          </span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-zinc-800 rounded-2xl bg-zinc-900/60 backdrop-blur-md overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium">{faq.question}</span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-orange-400" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 overflow-hidden"
                    >
                      <p className="pb-5 text-zinc-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
