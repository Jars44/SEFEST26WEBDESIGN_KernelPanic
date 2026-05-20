import type { Metadata } from "next";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layouts/AppSidebar";
import { MobileDock } from "@/components/layouts/MobileDock";

export const metadata: Metadata = {
  title: {
    template: "%s | Partner Teknisi | ReparasiHub",
    default: "Dashboard Teknisi",
  },
  description:
    "Dashboard teknisi ReparasiHub — kelola pesanan servis, pantau pendapatan, dan atur inventaris suku cadang Anda.",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="min-h-screen">
      <AppSidebar />
      <SidebarInset className="min-w-0 overflow-auto pb-20 md:pb-0">
        {children}
      </SidebarInset>
      <MobileDock variant="app" />
    </SidebarProvider>
  );
}
