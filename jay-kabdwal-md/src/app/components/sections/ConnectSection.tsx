"use client";

import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";

type ToastState = {
  type: "success" | "error" | "rate-limit";
  message: string;
} | null;

export default function ConnectSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = window.setTimeout(() => {
      setToast(null);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setToast(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          const retryAfterSec = Number(data?.retryAfterSec ?? 0);
          const retryAfterMin =
            retryAfterSec > 0 ? Math.ceil(retryAfterSec / 60) : null;
          setToast({
            type: "rate-limit",
            message:
              retryAfterMin !== null
                ? `Rate limit reached. Try again in about ${retryAfterMin} min.`
                : "Rate limit reached. Please try again later.",
          });
          return;
        }

        const msg =
          typeof data?.message === "string"
            ? data.message
            : "Unable to send your message right now.";
        setToast({ type: "error", message: msg });
        return;
      }

      setToast({ type: "success", message: "Message sent successfully." });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setToast({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSending(false);
    }
  };

  const toastStyles =
    toast?.type === "success"
      ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-200"
      : toast?.type === "rate-limit"
        ? "border-amber-500/40 bg-amber-500/15 text-amber-200"
        : "border-rose-500/40 bg-rose-500/15 text-rose-200";

  return (
    <section className="w-full mt-10 flex justify-center px-4 py-16">
      {toast ? (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={`fixed right-4 top-20 z-[70] max-w-sm rounded-xl border px-4 py-3 text-sm shadow-lg ${toastStyles}`}
        >
          {toast.message}
        </motion.div>
      ) : null}

      <div className="w-full max-w-5xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-zinc-200 mb-10"
        >
          Let’s Create <br />
          Something{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text font-extrabold text-8xl text-transparent m-auto">
            Amazing
          </span>
        </motion.h1>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-lg"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <InputField
              label="Name"
              placeholder="Your Name"
              delay={0.1}
              type="text"
              value={name}
              onChange={setName}
            />

            {/* Email */}
            <InputField
              label="Email"
              placeholder="Your@email.com"
              delay={0.2}
              type="email"
              value={email}
              onChange={setEmail}
            />

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-2"
            >
              <label className="text-zinc-400 text-sm">Message</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Your Message"
                className="bg-zinc-800/60 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 outline-none focus:border-orange-500 transition resize-none"
              />
            </motion.div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSending}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-700 to-green-900 text-white font-medium shadow-md hover:opacity-90 transition"
            >
              {isSending ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* Reusable Input Component */
function InputField({
  label,
  placeholder,
  delay,
  type,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  delay: number;
  type: "text" | "email";
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex flex-col gap-2"
    >
      <label className="text-zinc-400 text-sm">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="bg-zinc-800/60 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 outline-none focus:border-purple-500 transition"
      />
    </motion.div>
  );
}
