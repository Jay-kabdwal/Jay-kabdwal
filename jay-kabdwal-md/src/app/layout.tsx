import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ SEO Friendly Metadata */
export const metadata: Metadata = {
  title: {
    default: "Jay Kabdwal | Full Stack Developer",
    template: "%s | Jay Kabdwal",
  },
  description:
    "Jay Kabdwal is a Full Stack Developer specializing in MERN stack, building modern, scalable web applications with clean UI and performance-focused architecture.",
  keywords: [
    "Jay Kabdwal",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Jay Kabdwal" }],
  creator: "Jay Kabdwal",

  /* ✅ Open Graph (for LinkedIn, WhatsApp preview) */
  openGraph: {
    title: "Jay Kabdwal | Full Stack Developer",
    description:
      "Portfolio of Jay Kabdwal — Full Stack Developer building modern web applications using MERN & Next.js.",
    url: "https://your-domain.com", // 🔥 replace after deployment
    siteName: "Jay Kabdwal Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Jay Kabdwal Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ✅ Twitter Preview */
  twitter: {
    card: "summary_large_image",
    title: "Jay Kabdwal | Full Stack Developer",
    description: "Explore the portfolio of Jay Kabdwal — MERN Stack Developer.",
    images: ["/profile.jpg"],
  },

  /* ✅ Favicon */
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth" // ✅ FIX
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col bg-black text-white">
        <Header />

        <div className="w-full bg-black px-4 sm:px-6 lg:px-8">
          {/* MAIN LAYOUT */}
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-2 sm:px-4 lg:flex-row">
            {/* MOBILE SIDEBAR */}
            <aside className="lg:hidden w-full pt-20">
              <Sidebar />
            </aside>

            {/* DESKTOP SIDEBAR */}
            <aside className="hidden lg:block w-[300px] pt-24">
              <div className="sticky top-20">
                <Sidebar />
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <main className="flex-1 min-h-screen">{children}</main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
