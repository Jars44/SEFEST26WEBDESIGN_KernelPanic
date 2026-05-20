"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Layout, Wrench, User, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Layanan", href: "/", active: true },
    { name: "Tentang Kami", href: "/tentang-kami", active: false },
    { name: "E-Waste", href: "/ewaste", active: false },
    { name: "Bantuan", href: "/bantuan", active: false },
  ].map(link => ({ ...link, active: link.href === pathname || (pathname === "/" && link.href === "/") }));

  return (
    <>
    <header className={cn(
      "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-500 ease-out",
      mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    )}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center md:hidden justify-between w-full px-4">
          <span className="text-foreground font-bold text-xl tracking-tight"><Link href="/">ReparasiHub</Link></span>
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <Link href="/" className="hidden md:flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-sm">
            <Image src={"/logo.png"} alt="Reparasi Hub Logo" width={50} height={50} />
          </div>
          <span className="text-foreground font-bold text-xl tracking-tight">
            ReparasiHub
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-200",
                link.active ? "text-[#064E3B]" : "text-[#064E3B]/70 hover:text-[#064E3B]"
              )}
            >
              {link.name}
              {link.active && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            className="rounded-full px-6 font-semibold shadow-none hover:opacity-90 transition-all active:scale-95"
            asChild
          >
            <Link href="/login">Mulai Servis</Link>
          </Button>
        </div>
      </div>
    </header>

    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[60] md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-64 bg-background z-[60] p-4 flex flex-col border-l border-border md:hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold text-lg">Menu</p>
              <button onClick={() => setMenuOpen(false)} className="p-1 rounded-md hover:bg-muted">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => {
                const icons = { "Layanan": Layout, "Tentang Kami": Wrench, "E-Waste": Settings, "Bantuan": User };
                const IconComponent = icons[link.name as keyof typeof icons] || Menu;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "relative flex items-center text-base font-medium",
                        link.active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center w-full">
                        {link.active && (
                          <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary rounded-l-full" />
                        )}
                        <IconComponent className={cn("w-4 h-4 mr-2 ml-2", link.active ? "text-primary" : "text-muted-foreground")} />
                        {link.name}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <Button className="w-full mt-auto rounded-full" asChild>
              <Link href="/login">Mulai Servis</Link>
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}