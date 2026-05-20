"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, Download } from "lucide-react";
import { toast } from "sonner";
import { FadeIn } from "@/components/motion/fade-in";

const transactions = [
  {
    title: "MacBook Pro M1 - Layar Retak",
    trx: "TRX-8921",
    date: "12 OKT 2023",
    status: "Selesai",
    description:
      "Penggantian Retina Display Assembly Original (A2338). Kalibrasi TrueTone berhasil.",
    cost: "Rp 5.200.000",
    icon: <Laptop className="w-5 h-5 text-[#86868b]" />,
  },
  {
    title: "iPhone 13 Pro - Baterai Drop",
    trx: "TRX-7743",
    date: "05 SEP 2023",
    status: "Selesai",
    description:
      "Penggantian Baterai OEM Capacity 100%. Uji diagnostik daya lulus sempurna.",
    cost: "Rp 850.000",
    icon: <Smartphone className="w-5 h-5 text-[#86868b]" />,
  },
];

export default function UserServisPage() {
  return (
    <main className="p-8 font-sans">
      <FadeIn>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1d1d1f]">Riwayat Transaksi</h1>
        <p className="text-sm text-[#86868b] mt-1 max-w-lg">
          Laporan detail perbaikan perangkat Anda. Kami menghargai presisi teknis
          dan transparansi biaya.
        </p>
      </div>
      </FadeIn>

      <FadeIn delay={0.15}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
        <div className="space-y-4">
          {transactions.map((t, i) => (
            <Card
              key={i}
              className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-[#1d1d1f] text-base">{t.title}</p>
                    <p className="text-xs text-[#86868b] mt-0.5">{t.trx} • {t.date}</p>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 border-0 text-[10px] font-bold tracking-wide rounded-full px-3 py-1 shrink-0">
                    {t.status}
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#f2f3f5] rounded-xl flex items-center justify-center shrink-0">
                    {t.icon}
                  </div>
                  <p className="text-sm text-[#3f4941] leading-relaxed">{t.description}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#f2f3f5]">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase mb-0.5">
                      Total Biaya Perbaikan
                    </p>
                    <p className="text-base font-bold text-[#1d1d1f]">{t.cost}</p>
                  </div>
                  <button
                    className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:underline"
                    onClick={() => toast.success(`Invoice ${t.trx} sedang diunduh...`)}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Unduh Invoisi
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white sticky top-6">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
          <CardContent className="relative z-10 p-6 space-y-5">
            <h2 className="text-base font-bold text-[#1d1d1f]">Metrik Presisi Anda</h2>
            <div className="bg-[#f8faf9] rounded-2xl p-4 space-y-1">
              <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                Total Penghematan
              </p>
              <p className="text-4xl font-bold text-[#1d1d1f] leading-tight">Rp 14.500.000</p>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Dibandingkan dengan biaya penggantian unit baru (MSRP Apple).
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#3f4941]">Perangkat Diperbaiki</p>
                <p className="text-sm font-bold text-[#1d1d1f]">2 Unit</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#3f4941]">Total Pengeluaran</p>
                <p className="text-sm font-bold text-[#1d1d1f]">Rp 6.050.000</p>
              </div>
            </div>
            <Button
              className="w-full h-11 rounded-xl bg-emerald-700 hover:bg-emerald-800 font-semibold shadow-none text-sm"
              asChild
            >
              <Link href="/servis">Konsultasi Teknisi Baru</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      </FadeIn>
    </main>
  );
}
