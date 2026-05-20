"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, Clock, CheckCircle2, Circle, MessageCircle, Navigation } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

const timeline = [
  {
    time: "22 Okt, 09:33",
    title: "Pesanan Diterima",
    desc: "Perangkat telah diterima di fasilitas perbaikan kami dan masuk antrian diagnostik awal.",
    done: true,
    active: false,
  },
  {
    time: "22 Okt, 11:15",
    title: "Diagnostik Selesai",
    desc: "Teknisi menyetujui indikasi masalah. Masalah teridentifikasi pada sirkuit daya utama.",
    done: true,
    active: false,
  },
  {
    time: "Saat Ini",
    title: "Sedang Diperbaiki",
    desc: "Teknisi kami sedang melakukan penggantian komponen dalam dan dengan presisi tinggi di lab anti-statis.",
    done: false,
    active: true,
  },
  {
    time: "Menunggu",
    title: "Tahap Pengetesan Mikro",
    desc: null,
    done: false,
    active: false,
    progress: 75,
  },
  {
    time: "Menunggu",
    title: "Uji Kualitas Akhir",
    desc: "Pengujian fungsionalitas penuh sebelum memastikan standar kualitas ReparasiHub terpenuhi.",
    done: false,
    active: false,
  },
  {
    time: "Menunggu",
    title: "Selesai & Siap Diambil",
    desc: "Perangkat Anda telah selesai diperbaiki dan siap untuk diambil atau siap dikirim.",
    done: false,
    active: false,
  },
];

export default function UserDashboardPage() {
  return (
    <main className="p-8 font-sans">
      <FadeIn>
      <div className="flex items-center gap-4 mb-4 text-xs text-[#86868b]">
        <span className="font-bold tracking-widest uppercase">Status Pesanan</span>
        <span className="w-px h-3 bg-[#e6e6ea]" />
        <span className="font-mono font-semibold text-[#1d1d1f]">ID: RPH-2023-8901</span>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#1d1d1f] leading-tight">
          Pelacakan Servis
        </h1>
        <p className="text-sm text-[#86868b] mt-2 max-w-lg">
          Pantau perkembangan perbaikan perangkat Anda secara real-time. Teknisi
          kami bekerja dengan standar presisi tertinggi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
        <div className="space-y-6">
          <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white overflow-hidden">
            <CardContent className="p-0">
              <div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-[#1d1d1f] text-lg leading-snug">
                        MacBook Pro 16&quot;
                      </p>
                      <p className="text-sm text-[#86868b]">
                        Penggantian Logic Board &amp; Baterai
                      </p>
                    </div>
                    <Badge className="bg-emerald-600 text-white border-0 text-[10px] font-bold tracking-wide rounded-full px-3 py-1 shrink-0">
                      SEDANG DIPERBAIKI
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase mb-1">
                        Teknisi
                      </p>
                      <div className="flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-sm font-semibold text-[#1d1d1f]">
                          Fajar Maulid
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase mb-1">
                        Estimasi Selesai
                      </p>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-sm font-semibold text-[#1d1d1f]">
                          24 Okt, 14:00
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link href="/tracking">
                    <Button className="w-full h-10 rounded-xl bg-emerald-700 hover:bg-emerald-800 font-semibold shadow-none text-sm gap-2">
                      <Navigation className="w-4 h-4" />
                      Lacak Perangkat
                    </Button>
                  </Link>
                </div>

              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-base font-bold text-[#1d1d1f] mb-5">
              Riwayat Perjalanan
            </h2>
            <div className="relative space-y-0">
              {timeline.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        step.done
                          ? "bg-emerald-600"
                          : step.active
                            ? "bg-emerald-600 ring-4 ring-emerald-100"
                            : "bg-[#e6e6ea]"
                      }`}
                    >
                      {step.done ? (
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      ) : step.active ? (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      ) : (
                        <Circle className="w-3 h-3 text-[#86868b]" />
                      )}
                    </div>
                    {i < timeline.length - 1 && (
                      <div
                        className={`w-px flex-1 my-1 ${
                          step.done ? "bg-emerald-300" : "bg-[#e6e6ea]"
                        }`}
                        style={{ minHeight: "32px" }}
                      />
                    )}
                  </div>

                  <div className="pb-6 flex-1 min-w-0">
                    <p
                      className={`text-[11px] font-bold tracking-wide mb-0.5 ${
                        step.active
                          ? "text-emerald-600"
                          : step.done
                            ? "text-[#86868b]"
                            : "text-[#86868b]"
                      }`}
                    >
                      {step.time}
                    </p>
                    <p
                      className={`text-sm font-bold mb-1 ${
                        step.active || step.done
                          ? "text-[#1d1d1f]"
                          : "text-[#86868b]"
                      }`}
                    >
                      {step.title}
                    </p>
                    {step.desc && (
                      <p className="text-xs text-[#86868b] leading-relaxed">
                        {step.desc}
                      </p>
                    )}
                    {step.progress !== undefined && (
                      <div className="mt-2 space-y-1">
                        <div className="w-full h-1.5 bg-[#f2f3f5] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${step.progress}%` }}
                          />
                        </div>
                        <p className="text-[10px] text-[#86868b]">
                          {step.progress}% Selesai
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <Image
              src="/images/hero-chips.jpg"
              alt="Circuit board background"
              fill
              className="object-cover opacity-10"
            />
            <CardContent className="relative z-10 p-5 space-y-3">
              <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                Standar Presisi
              </p>
              <p className="text-xs text-[#3f4941] leading-relaxed">
                Setiap perbaikan dilakukan di lingkungan lab yang terstandarisasi
                untuk memastikan kualitas dan keandalan jangka panjang.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <CardContent className="p-5 space-y-3">
              <p className="text-sm font-bold text-[#1d1d1f]">Butuh Bantuan?</p>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Hubungi teknisi yang menangani perangkat Anda langsung.
              </p>
              <Button
                className="w-full h-10 rounded-xl bg-emerald-700 hover:bg-emerald-800 font-semibold shadow-none text-sm gap-2"
                onClick={() => toast.info("Membuka WhatsApp ke Fajar Maulid...")}
              >
                <MessageCircle className="w-4 h-4" />
                Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      </FadeIn>
    </main>
  );
}
