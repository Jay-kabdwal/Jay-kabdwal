"use client";

import { Home, Folder, Briefcase, Wrench, Pencil } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Folder, label: "Projects", href: "/projects" },
  { icon: Briefcase, label: "Experience", href: "/experience" },
  { icon: Wrench, label: "Tools", href: "/tools" },
  { icon: Pencil, label: "Connect", href: "/connect" },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-6 px-6 py-3 bg-zinc-900 text-white rounded-2xl shadow-lg border border-zinc-700">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <div key={index} className="relative group">
              <Link href={item.href}>
                <button
                  className={`p-1 transition-all duration-200 hover:scale-110
                    ${isActive ? "text-blue-500 scale-110" : "text-white"}`}
                >
                  <Icon size={20} />
                </button>
              </Link>
              <span
                className="absolute -bottom-11 left-1/2 -translate-x-1/2 
                               opacity-0 group-hover:opacity-100 group-hover:-translate-y-1
                               transition-all duration-200
                               bg-black text-xs px-2 py-1 rounded-md whitespace-nowrap"
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
