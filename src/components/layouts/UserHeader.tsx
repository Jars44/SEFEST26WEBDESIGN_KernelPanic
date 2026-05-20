"use client";

import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Settings, LogOut } from "lucide-react";

export default function UserHeader() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#e6e6ea]">
      <div className="px-6 h-14 flex items-center justify-between">
        <div className="flex items-center md:hidden justify-between w-full">
          <Link href="/user" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Image src="/logo.png" alt="Logo" width={24} height={24} />
            </div>
            <span className="text-[#1d1d1f] font-bold text-base tracking-tight">
              ReparasiHub
            </span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md hover:bg-[#f2f3f5] transition-colors">
                <Menu className="w-5 h-5 text-[#3f4941]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-4 flex flex-col">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-auto space-y-2">
                <Link
                  href="/user/pengaturan"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#3f4941] hover:bg-[#f2f3f5] transition-colors"
                >
                  <Settings className="w-4 h-4 text-[#86868b]" />
                  Pengaturan
                </Link>
                <Link
                  href="/login"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#3f4941] hover:bg-[#f2f3f5] transition-colors"
                >
                  <LogOut className="w-4 h-4 text-[#86868b]" />
                  Keluar
                </Link>
                <hr className="border-[#e6e6ea]" />
                <Link
                  href="/user/profile"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f2f3f5] transition-colors"
                >
                  <Avatar className="w-8 h-8 shrink-0">
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold text-xs">
                      DI
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#1d1d1f] truncate">
                      Dhia Irdina
                    </p>
                    <p className="text-[11px] text-[#86868b] truncate">
                      Pengguna
                    </p>
                  </div>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:block" />

        <Link
          href="/user/profile"
          className="hidden md:flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f2f3f5] transition-colors"
        >
          <Avatar className="w-8 h-8 shrink-0">
            <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold text-xs">
              DI
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-sm font-bold text-[#1d1d1f] truncate">
              Dhia Irdina
            </p>
            <p className="text-[11px] text-[#86868b] truncate">Pengguna</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
