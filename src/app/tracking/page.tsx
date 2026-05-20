"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, MapPin, CheckCircle2, Circle, Navigation, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FadeIn } from "@/components/motion/fade-in";

const timeline = [
  {
    title: "Pesanan Dikonfirmasi",
    time: "10:15 WIB",
    desc: "Teknisi Fajar Maulid menerima pesanan.",
    done: true,
    active: false,
  },
  {
    title: "Teknisi Menuju Lokasi",
    time: "14:05 WIB",
    desc: "Teknisi sedang dalam perjalanan ke alamat Anda.",
    done: false,
    active: true,
  },
  {
    title: "Pengecekan & Servis",
    time: null,
    desc: "Menunggu teknisi tiba di lokasi.",
    done: false,
    active: false,
  },
  {
    title: "Selesai",
    time: null,
    desc: "Pekerjaan selesai dan pembayaran.",
    done: false,
    active: false,
  },
];

export default function TrackingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#fbfbfd] font-sans flex flex-col items-center py-12 px-4">
      <FadeIn>
      <div className="w-full max-w-xl space-y-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-sm font-semibold text-[#86868b] hover:text-[#1d1d1f] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </button>

        <div className="text-center space-y-1">
          <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
            Order #RPH-2023-8901
          </p>
          <h1 className="text-2xl font-bold text-[#1d1d1f]">
            Teknisi sedang menuju ke lokasimu
          </h1>
          <p className="text-sm text-[#86868b]">
            MacBook Pro 16&quot; — Penggantian Logic Board &amp; Baterai
          </p>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-4">
          <Card className="border border-[#e6e6ea] rounded-2xl overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.03)] h-full">
            <CardContent className="p-0 h-full">
              <div className="relative w-full h-full min-h-48 bg-emerald-50">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(16,185,129,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: '28px 28px',
                }} />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-300/50" />
                <div className="absolute top-0 bottom-0 left-1/3 w-px bg-slate-300/50" />
                <div className="absolute top-0 bottom-0 left-2/3 w-px bg-slate-300/50" />

                <div className="absolute top-[30%] left-[55%] flex flex-col items-center animate-pulse">
                  <div className="w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center shadow-md shadow-emerald-600/30">
                    <Navigation className="w-3.5 h-3.5 text-white -rotate-45" />
                  </div>
                </div>

                <div className="absolute top-[58%] left-[22%] flex flex-col items-center">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-sm">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                </div>

                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="57%" y1="37%" x2="24%" y2="60%" stroke="#10b981" strokeWidth="2" strokeDasharray="5 3" opacity="0.5" />
                </svg>

                <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  <div>
                    <p className="text-[11px] font-bold text-[#1d1d1f]">Jarak 2.4 km</p>
                    <p className="text-[9px] text-[#86868b]">Jl. Sudirman No. 45</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] w-44">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold text-sm">
                    BS
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#1d1d1f] truncate">Fajar Maulid</p>
                  <p className="text-[10px] text-[#86868b]">Spesialis Hardware &amp; Software</p>
                </div>
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 border-0 text-[10px] font-bold rounded-full px-2 py-0.5">
                ★ 4.9
              </Badge>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div>
                  <p className="text-xs font-bold text-[#1d1d1f]">5 Tahun</p>
                  <p className="text-[9px] text-[#86868b] uppercase tracking-wide">Pengalaman</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1d1d1f]">1,240+</p>
                  <p className="text-[9px] text-[#86868b] uppercase tracking-wide">Total Servis</p>
                </div>
              </div>
              <Button
                className="w-full h-9 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-none text-xs gap-1.5"
                onClick={() => toast.info("Membuka WhatsApp ke Fajar Maulid...")}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] bg-white">
          <CardContent className="p-6">
            <h2 className="text-base font-bold text-[#1d1d1f] mb-5">Status Perbaikan</h2>
            <div className="space-y-0">
              {timeline.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      step.done ? "bg-emerald-600" : step.active ? "bg-emerald-600 ring-4 ring-emerald-100" : "bg-[#e6e6ea]"
                    }`}>
                      {step.done ? (
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      ) : step.active ? (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      ) : (
                        <Circle className="w-3 h-3 text-[#86868b]" />
                      )}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className={`w-px my-1 ${step.done || step.active ? "bg-emerald-300" : "bg-[#e6e6ea]"}`} style={{ minHeight: 28 }} />
                    )}
                  </div>
                  <div className="pb-5 flex-1">
                    <p className={`text-sm font-bold ${step.active ? "text-emerald-600" : step.done ? "text-[#1d1d1f]" : "text-[#86868b]"}`}>
                      {step.title}
                    </p>
                    {step.time && (
                      <p className="text-[11px] text-[#86868b]">{step.time} WIB - {step.desc}</p>
                    )}
                    {!step.time && (
                      <p className="text-[11px] text-[#86868b]">{step.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      </FadeIn>
    </main>
  );
}
