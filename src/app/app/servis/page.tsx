"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, Tablet, Camera, Clock, CheckCircle2, Package, Wrench } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion/fade-in";

type Job = {
  id: string;
  device: string;
  issue: string;
  client: string;
  time?: string;
  note?: string;
  image?: boolean;
  action?: string;
  icon: React.ReactNode;
};

const logEntries = [
  { time: "12 Okt, 08:30", icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />, title: "Diagnostik Awal", desc: "Masalah teridentifikasi: thermal paste kering, kipas berdebu." },
  { time: "12 Okt, 10:15", icon: <Package className="w-3.5 h-3.5 text-emerald-600" />, title: "Komponen Dipesan", desc: "Thermal paste Arctic MX-5, compressed air can." },
  { time: "13 Okt, 09:00", icon: <Wrench className="w-3.5 h-3.5 text-emerald-600" />, title: "Perbaikan Selesai", desc: "Thermal paste diganti, kipas dibersihkan, stress test passed." },
  { time: "13 Okt, 11:30", icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />, title: "QC Passed", desc: "Semua tes fungsional lulus. Perangkat siap diambil." },
];

const columns: {
  label: string;
  count: number;
  active?: boolean;
  jobs: Job[];
}[] = [
  {
    label: "MENUNGGU",
    count: 2,
    jobs: [
      {
        id: "ID-REP-6492",
        device: "MacBook Pro 16\" (M1 Max)",
        issue: "Layar tidak merespons setelah update macOS. Kemungkinan masalah pada...",
        client: "Client: Ibu Kartini",
        time: "Hari ini, 09:00",
        action: "Mulai Diagnostik",
        icon: <Laptop className="w-4 h-4 text-[#86868b]" />,
      },
      {
        id: "ID-REP-6450",
        device: "iPhone 13 Pro",
        issue: "Penggantian baterai dan modul kamera belakang. Menunggu...",
        client: "Client: Ibu Sari",
        time: "Kemarin",
        icon: <Smartphone className="w-4 h-4 text-[#86868b]" />,
      },
    ],
  },
  {
    label: "PROSES",
    count: 1,
    active: true,
    jobs: [
      {
        id: "ID-REP-6488",
        device: "iPad Air (Gen 5)",
        issue: "Penggantian digitizer kaca depan. Pembersihan sisa perekat lama sedang berlangsung.",
        client: "Estimasi selesai: 14:00",
        image: true,
        icon: <Tablet className="w-4 h-4 text-white" />,
      },
    ],
  },
  {
    label: "SELESAI",
    count: 0,
    jobs: [
      {
        id: "",
        device: "Dell XPS 15",
        issue: "Thermal paste diganti & pembersihan di...",
        client: "SIAP DIAMBIL",
        action: "Lihat Log",
        icon: <Laptop className="w-4 h-4 text-[#86868b]" />,
      },
      {
        id: "",
        device: "Sony A7III Camera Body",
        issue: "Pembersihan sensor dan kalibrasi fokus",
        client: "DIAMBIL CLIENT",
        action: "Lihat Log",
        icon: <Camera className="w-4 h-4 text-[#86868b]" />,
      },
    ],
  },
];

export default function ServisPage() {
  const [logDialog, setLogDialog] = useState<{ open: boolean; device: string }>({ open: false, device: "" });

  return (
    <main className="p-8 font-sans">
      <FadeIn>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1d1d1f]">Pekerjaan Berjalan</h1>
        <p className="text-sm text-[#86868b] mt-1 max-w-xl">
          Kelola perbaikan aktif, lacak kemajuan, dan perbarui status perangkat
          pelanggan dengan presisi.
        </p>
      </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {columns.map((col) => (
          <div key={col.label} className="space-y-3">
            <div className="flex items-center gap-2">
              <span
                className={`text-[11px] font-bold tracking-widest ${
                  col.active ? "text-emerald-600" : "text-[#86868b]"
                }`}
              >
                {col.label}
              </span>
              {col.count > 0 && (
                <span
                  className={`text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                    col.active
                      ? "bg-emerald-600 text-white"
                      : "bg-[#f2f3f5] text-[#86868b]"
                  }`}
                >
                  {col.count}
                </span>
              )}
            </div>

            <FadeInStagger className="space-y-3">
            {col.jobs.map((job, i) => (
              <FadeInItem key={i}>
              <Card
                className={`rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] ${
                  col.active
                    ? "border-2 border-emerald-500 bg-white"
                    : "border border-[#e6e6ea] bg-white"
                }`}
              >
                <CardContent className="p-4 space-y-3">
                  {col.active && (
                    <Badge className="bg-emerald-600 text-white border-0 text-[10px] font-bold tracking-wide rounded-full px-2.5 py-0.5">
                      DIKERJAKAN
                    </Badge>
                  )}

                  <div>
                    <p className="font-bold text-[#1d1d1f] text-sm leading-snug">
                      {job.device}
                    </p>
                    {job.time && (
                      <p className="text-[11px] text-[#86868b]">{job.time}</p>
                    )}
                  </div>

                  <p className="text-xs text-[#3f4941] leading-relaxed line-clamp-3">
                    {job.issue}
                  </p>

                  {job.image && (
                    <div className="relative w-full h-28 bg-[#1d1d1f] rounded-xl overflow-hidden">
                      <Image
                        src="/images/ipad-air-gen5.jpg"
                        alt="iPad Air Gen 5 being repaired"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#f2f3f5] rounded-lg flex items-center justify-center shrink-0">
                        {job.icon}
                      </div>
                      <p className="text-[11px] text-[#86868b] leading-tight">
                        {job.id && (
                          <span className="block font-mono text-[10px]">
                            {job.id}
                          </span>
                        )}
                        {job.client}
                      </p>
                    </div>
                  </div>

                  {job.action && (
                    <Button
                      className={`w-full h-9 rounded-xl text-xs font-semibold shadow-none ${
                        job.action === "Mulai Diagnostik"
                          ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                          : "bg-[#f2f3f5] hover:bg-[#e6e6ea] text-[#1d1d1f]"
                      }`}
                      onClick={() => {
                        if (job.action === "Mulai Diagnostik") {
                          toast.success(`Diagnostik dimulai untuk ${job.device}`);
                        } else {
                          setLogDialog({ open: true, device: job.device });
                        }
                      }}
                    >
                      {job.action}
                    </Button>
                  )}

                  {col.label === "SELESAI" && (
                    <Badge
                      className={`text-[10px] font-bold tracking-wide rounded-full px-3 py-1 border-0 w-fit ${
                        job.client === "SIAP DIAMBIL"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {job.client}
                    </Badge>
                  )}
                </CardContent>
              </Card>
              </FadeInItem>
            ))}
            </FadeInStagger>
          </div>
        ))}
      </div>

      <Dialog open={logDialog.open} onOpenChange={(open) => setLogDialog({ ...logDialog, open })}>
        <DialogContent className="rounded-2xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base">Log Perbaikan</DialogTitle>
          </DialogHeader>
          <div className="space-y-0 mt-2">
            <p className="text-xs text-[#86868b] mb-4 font-mono">{logDialog.device}</p>
            {logEntries.map((entry, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    {entry.icon}
                  </div>
                  {i < logEntries.length - 1 && (
                    <div className="w-px flex-1 bg-emerald-200 my-1" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-xs font-bold text-[#1d1d1f]">{entry.title}</p>
                  <p className="text-[11px] text-[#86868b]">{entry.time}</p>
                  <p className="text-xs text-[#3f4941] mt-1 leading-relaxed">{entry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
