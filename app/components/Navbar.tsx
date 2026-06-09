"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/services", label: "服务介绍" },
  { href: "/contact", label: "联系我们" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020b18]/80 backdrop-blur-xl border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center shadow-lg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="8" cy="8" r="2" fill="white"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight group-hover:text-sky-400 transition-colors">
              NexusAI
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-sky-400 bg-sky-400/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 text-white text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-sky-500/20"
            >
              免费咨询
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800/60 bg-[#020b18]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-sky-400 bg-sky-400/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-violet-600 text-white text-sm font-medium text-center"
            >
              免费咨询
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
