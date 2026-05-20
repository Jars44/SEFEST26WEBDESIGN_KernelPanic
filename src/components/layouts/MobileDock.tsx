"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Wrench,
  DollarSign,
  Package,
  Smartphone,
  ClipboardList,
  Leaf,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const DOCK_ITEMS = {
  app: [
    { label: "Ringkasan", href: "/app", icon: LayoutDashboard },
    { label: "Servis", href: "/app/servis", icon: Wrench },
    { label: "Pendapatan", href: "/app/pendapatan", icon: DollarSign },
    { label: "Inventoris", href: "/app/inventoris", icon: Package },
  ],
  user: [
    { label: "Ringkasan", href: "/user", icon: LayoutDashboard },
    { label: "Gadget", href: "/user/inventoris", icon: Smartphone },
    { label: "Servis", href: "/user/servis", icon: ClipboardList },
    { label: "Hijau", href: "/user/dampak", icon: Leaf },
  ],
} as const;

export function MobileDock({ variant }: { variant: "app" | "user" }) {
  const pathname = usePathname();
  const items = DOCK_ITEMS[variant];
  const [menuOpen, setMenuOpen] = useState(false);
  const profileHref = variant === "app" ? "/app/profile" : "/user/profile";

  return (
    <>
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 bg-white/90 backdrop-blur-xl border border-[#e6e6ea] rounded-full shadow-lg shadow-black/5 flex items-center justify-center"
        >
          {menuOpen ? <X className="w-5 h-5 text-[#1d1d1f]" /> : <Menu className="w-5 h-5 text-[#1d1d1f]" />}
        </button>

        {menuOpen && (
          <div className="absolute top-full mt-2 right-0 bg-white border border-[#e6e6ea] rounded-xl shadow-lg shadow-black/5 overflow-hidden min-w-[160px]">
            <Link
              href={profileHref}
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#1d1d1f] hover:bg-[#f2f3f5] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <User className="w-4 h-4 text-[#86868b]" />
              Profil
            </Link>
            <Link
              href={`/${variant}/pengaturan`}
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#1d1d1f] hover:bg-[#f2f3f5] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <Settings className="w-4 h-4 text-[#86868b]" />
              Pengaturan
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
              onClick={() => setMenuOpen(false)}
            >
              <LogOut className="w-4 h-4" />
              Keluar
            </Link>
          </div>
        )}
      </div>

      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-xl border border-[#e6e6ea] rounded-2xl shadow-lg shadow-black/5 px-2 py-1.5">
          {items.map((item) => {
            const isActive =
              item.href === items[0].href
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors",
                  isActive
                    ? "text-emerald-600 bg-emerald-50"
                    : "text-[#86868b] hover:text-[#1d1d1f]"
                )}
              >
                <item.icon className="w-5 h-5" strokeWidth={isActive ? 2.2 : 1.8} />
                <span className="text-[10px] font-medium leading-none">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
