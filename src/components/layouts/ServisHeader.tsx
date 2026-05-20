"use client";

import Link from "next/link";
import { User } from "lucide-react";

export default function ServisHeader({ visible = true }: { visible?: boolean }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-lg tracking-tight text-foreground">ReparasiHub</span>
        </Link>
        <Link
          href="/user/profile"
          className="w-9 h-9 rounded-full bg-[#f5f5f7] flex items-center justify-center hover:bg-[#e6e6ea] transition-colors"
        >
          <User className="w-4 h-4 text-[#3f4941]" />
        </Link>
      </div>
    </header>
  );
}
