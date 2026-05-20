"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Layout, Wrench, User, Settings } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "/", active: true },
    { name: "Tentang Kami", href: "/tentang-kami", active: false },
    { name: "E-Waste", href: "/ewaste", active: false },
    { name: "Bantuan", href: "/bantuan", active: false },
  ].map(link => ({ ...link, active: link.href === pathname || (pathname === "/" && link.href === "/") }));

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-500 ease-out",
      mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    )}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center md:hidden justify-between w-full px-4">
          <span className="text-foreground font-bold text-xl tracking-tight"><Link href="/">ReparasiHub</Link></span>
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
          <SheetContent side="right" className="w-64 p-4 flex flex-col h-full">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => {
                let IconComponent;
                switch (link.name) {
                  case "Layanan":
                    IconComponent = Layout;
                    break;
                  case "Tentang Kami":
                    IconComponent = Wrench;
                    break;
                  case "E-Waste":
                    IconComponent = Settings;
                    break;
                  case "Bantuan":
                    IconComponent = User;
                    break;
                  default:
                    IconComponent = Menu;
                }
                return (
                  <Link
                    key={link.name}
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
                );
              })}
            </nav>
            <Button className="w-full mt-auto rounded-full" asChild>
              <Link href="/login">Mulai Servis</Link>
            </Button>
          </SheetContent>
          </Sheet>
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
  );
}