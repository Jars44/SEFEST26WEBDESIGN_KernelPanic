import type { Metadata } from "next";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppUserSidebar from "@/components/layouts/AppUserSidebar";
import { MobileDock } from "@/components/layouts/MobileDock";

export const metadata: Metadata = {
  title: {
    template: "%s | Portal Pengguna | ReparasiHub",
    default: "Dashboard Pengguna",
  },
  description:
    "Portal pengguna ReparasiHub — lacak perbaikan, kelola perangkat, dan lihat dampak lingkungan Anda.",
};

export default function AppUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="min-h-screen">
      <AppUserSidebar />
      <SidebarInset className="min-w-0 overflow-auto pb-20 md:pb-0">
        {children}
      </SidebarInset>
      <MobileDock variant="user" />
    </SidebarProvider>
  );
}
