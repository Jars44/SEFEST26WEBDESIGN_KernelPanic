"use client";

import { useState } from "react";
import { Bell, MapPin, TrendingUp, CheckCircle2, Star, Smartphone, Laptop, Package, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { AnimatedProgress } from "@/components/motion/animated-progress";

const notifications = [
  { icon: <Package className="w-4 h-4 text-emerald-600" />, title: "Pesanan Baru", desc: "iPhone 13 Pro Max — Screen Replacement", time: "2 menit lalu" },
  { icon: <CreditCard className="w-4 h-4 text-emerald-600" />, title: "Pembayaran Diterima", desc: "Rp 1.200.000 dari Ibu Sari", time: "1 jam lalu" },
  { icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />, title: "Servis Selesai", desc: "MacBook Air M1 — Siap diambil", time: "3 jam lalu" },
];

const orders = [
  {
    device: "iPhone 13 Pro Max",
    service: "Screen Replacement",
    priority: "High Priority",
    priorityColor: "bg-slate-100 text-slate-600",
    location: "Jakarta Selatan, 2.4km",
    payout: "Rp 450.000",
    icon: <Smartphone className="w-5 h-5 text-[#86868b]" />,
  },
  {
    device: "MacBook Air M1",
    service: "Battery Service",
    priority: "Standard",
    priorityColor: "bg-slate-100 text-slate-500",
    location: "Kebayoran Baru, 5.1km",
    payout: "Rp 850.000",
    icon: <Laptop className="w-5 h-5 text-[#86868b]" />,
  },
];

const earningsBar = [
  { day: "Mon", value: 850, max: 1700 },
  { day: "Tue", value: 1200, max: 1700 },
  { day: "Wed", value: 500, max: 1700 },
  { day: "Thu", value: 1700, max: 1700 },
];

export default function AppDashboardPage() {
  const [confirmDialog, setConfirmDialog] = useState<{ open: boolean; action: string; device: string }>({ open: false, action: "", device: "" });

  function handleConfirm() {
    toast.success(confirmDialog.action === "Terima" ? `Pesanan ${confirmDialog.device} diterima!` : `Pesanan ${confirmDialog.device} ditolak.`);
    setConfirmDialog({ open: false, action: "", device: "" });
  }

  return (
    <main className="p-8 font-sans">
      <FadeIn>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1d1d1f]">Overview</h1>
          <p className="text-sm text-[#86868b] mt-0.5">
            Welcome back. You have 3 pending requests.
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative w-9 h-9 rounded-full bg-white border border-[#e6e6ea] flex items-center justify-center hover:bg-[#f2f3f5] transition-colors shadow-sm">
              <Bell className="w-4 h-4 text-[#3f4941]" />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 rounded-xl">
            <DropdownMenuLabel className="text-xs font-bold text-[#86868b]">
              Notifikasi
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((n, i) => (
              <DropdownMenuItem key={i} className="flex items-start gap-3 p-3 cursor-pointer rounded-lg">
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  {n.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#1d1d1f]">{n.title}</p>
                  <p className="text-xs text-[#86868b] truncate">{n.desc}</p>
                  <p className="text-[10px] text-[#86868b] mt-1">{n.time}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <FadeInStagger className="space-y-4" staggerDelay={0.1}>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#1d1d1f]">
              Incoming Orders
            </h2>
            <Link href="/app/servis" className="text-sm font-semibold text-emerald-600 hover:underline">
              View All
            </Link>
          </div>

          {orders.map((order, i) => (
            <FadeInItem key={i}>
            <Card
              className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white"
            >
              <CardContent className="p-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#f2f3f5] rounded-xl flex items-center justify-center shrink-0">
                      {order.icon}
                    </div>
                    <div>
                      <p className="font-bold text-[#1d1d1f] text-sm">
                        {order.device}
                      </p>
                      <p className="text-xs text-[#86868b]">{order.service}</p>
                    </div>
                  </div>
                  <Badge
                    className={`text-[10px] font-semibold rounded-full px-3 py-1 border-0 shrink-0 ${order.priorityColor}`}
                  >
                    {order.priority}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase mb-1">
                      Location
                    </p>
                    <div className="flex items-center gap-1 text-xs text-[#3f4941]">
                      <MapPin className="w-3 h-3 text-[#86868b]" />
                      {order.location}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase mb-1">
                      Expected Payout
                    </p>
                    <p className="text-sm font-bold text-[#1d1d1f]">
                      {order.payout}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    className="h-10 rounded-xl bg-emerald-700 hover:bg-emerald-800 font-semibold shadow-none"
                    onClick={() => setConfirmDialog({ open: true, action: "Terima", device: order.device })}
                  >
                    Terima
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 rounded-xl border-[#e6e6ea] text-[#3f4941] font-semibold hover:bg-[#f2f3f5]"
                    onClick={() => setConfirmDialog({ open: true, action: "Tolak", device: order.device })}
                  >
                    Tolak
                  </Button>
                </div>
              </CardContent>
            </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.2} className="space-y-4">
          <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
            <CardContent className="relative z-10 p-5 space-y-4">
              <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                This Week&apos;s Earnings
              </p>
              <div>
                <AnimatedNumber value={4250} prefix="Rp " suffix="k" className="text-3xl font-bold text-[#1d1d1f]" />
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-600">
                    +12.5% from last week
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                {earningsBar.map((bar) => (
                  <div key={bar.day} className="flex items-center gap-2">
                    <span className="text-[11px] text-[#86868b] w-7 shrink-0">
                      {bar.day}
                    </span>
                    <AnimatedProgress value={(bar.value / bar.max) * 100} delay={0.1 * earningsBar.indexOf(bar)} />
                    <span className="text-[11px] text-[#86868b] w-10 text-right shrink-0">
                      {bar.value >= 1000
                        ? `${(bar.value / 1000).toFixed(1)}m`
                        : `${bar.value}k`}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl" />
              <CardContent className="relative z-10 p-5 flex flex-col items-center text-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#86868b]" />
                <AnimatedNumber value={24} className="text-2xl font-bold text-[#1d1d1f] leading-none" />
                <p className="text-[11px] text-[#86868b] leading-tight">
                  Completed Jobs
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl" />
              <CardContent className="relative z-10 p-5 flex flex-col items-center text-center gap-2">
                <Star className="w-5 h-5 text-[#86868b]" />
                <AnimatedNumber value={4.9} decimals={1} className="text-2xl font-bold text-[#1d1d1f] leading-none" />
                <p className="text-[11px] text-[#86868b] leading-tight">
                  Average Rating
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>

      <Dialog open={confirmDialog.open} onOpenChange={(open) => setConfirmDialog({ ...confirmDialog, open })}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle>{confirmDialog.action === "Terima" ? "Terima Pesanan?" : "Tolak Pesanan?"}</DialogTitle>
            <DialogDescription>
              {confirmDialog.action === "Terima"
                ? `Anda akan menerima pesanan ${confirmDialog.device}. Teknisi akan segera diarahkan.`
                : `Anda akan menolak pesanan ${confirmDialog.device}. Tindakan ini tidak dapat dibatalkan.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDialog({ ...confirmDialog, open: false })} className="rounded-xl">
              Batal
            </Button>
            <Button
              onClick={handleConfirm}
              className={`rounded-xl ${confirmDialog.action === "Terima" ? "bg-emerald-700 hover:bg-emerald-800" : "bg-red-600 hover:bg-red-700"}`}
            >
              {confirmDialog.action}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
