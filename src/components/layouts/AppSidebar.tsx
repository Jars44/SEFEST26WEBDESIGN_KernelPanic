"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wrench,
  DollarSign,
  Package,
  Settings,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { label: "Ringkasan", href: "/app", icon: LayoutDashboard },
  { label: "Proses Servis", href: "/app/servis", icon: Wrench },
  { label: "Pendapatan", href: "/app/pendapatan", icon: DollarSign },
  { label: "Inventoris", href: "/app/inventoris", icon: Package },
];

const bottomItems = [
  { label: "Pengaturan", href: "/app/pengaturan", icon: Settings },
  { label: "Keluar", href: "/login", icon: LogOut },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-[#e6e6ea] bg-white">
      <SidebarHeader className="px-4 py-5">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Reparasi Hub Logo" width={28} height={28} />
          <div>
            <p className="font-bold text-[#1d1d1f] text-sm leading-tight">
              ReparasiHub
            </p>
            <p className="text-[10px] text-[#86868b] font-medium">
              Partner Teknisi
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const active =
                  item.href === "/app"
                    ? pathname === "/app"
                    : pathname.startsWith(item.href);
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                          active
                            ? "text-emerald-700"
                            : "text-[#3f4941] hover:bg-[#f2f3f5] hover:text-[#1d1d1f]"
                        )}
                      >
                        {active && (
                          <motion.div
                            layoutId="sidebar-active"
                            className="absolute inset-0 bg-emerald-50 rounded-xl"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <item.icon
                          className={cn(
                            "relative w-4 h-4 shrink-0",
                            active ? "text-emerald-600" : "text-[#86868b]"
                          )}
                        />
                        <span className="relative">{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-2 pb-4 space-y-1">
        <SidebarMenu>
          {bottomItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#3f4941] hover:bg-[#f2f3f5] hover:text-[#1d1d1f] transition-colors"
                >
                  <item.icon className="w-4 h-4 shrink-0 text-[#86868b]" />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <Link
          href="/app/profile"
          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f2f3f5] transition-colors mt-2"
        >
          <Avatar className="w-9 h-9 shrink-0">
            <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold text-sm">
              FM
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-sm font-bold text-[#1d1d1f] truncate">
              Fajar Maulid
            </p>
            <p className="text-[11px] text-[#86868b] truncate">
              Teknisi
            </p>
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
