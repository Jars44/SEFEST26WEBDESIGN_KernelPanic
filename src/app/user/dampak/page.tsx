"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, TreePine, Smartphone, Laptop } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { AnimatedProgress } from "@/components/motion/animated-progress";

const contributions = [
  {
    title: "Ganti Baterai iPhone 13",
    date: "12 April 2026",
    co2: "+ 12 kg CO2 Diselamatkan",
    icon: <Smartphone className="w-4 h-4 text-[#86868b]" />,
  },
  {
    title: "Perbaikan Layar MacBook Air",
    date: "5 Maret 2026",
    co2: "+ 45 kg CO2 Diselamatkan",
    icon: <Laptop className="w-4 h-4 text-[#86868b]" />,
  },
];

export default function DampakPage() {
  return (
    <main className="p-8 font-sans">
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1d1d1f]">Jejak Hijau Kamu</h1>
          <p className="text-sm text-[#86868b] mt-1">
            Lihat kontribusi nyatamu dalam mengurangi limbah elektronik.
          </p>
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6" staggerDelay={0.1}>
        <FadeInItem>
          <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white h-full">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
            <CardContent className="relative z-10 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                  Total Emisi Dicegah
                </p>
                <Leaf className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex items-end gap-1">
                <AnimatedNumber value={125} className="text-4xl font-bold text-[#1d1d1f] leading-none" />
                <span className="text-base text-[#86868b] mb-0.5">kg CO2</span>
              </div>
            </CardContent>
          </Card>
        </FadeInItem>

        <FadeInItem>
          <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white h-full">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
            <CardContent className="relative z-10 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                  E-Waste Dihindari
                </p>
                <Recycle className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex items-end gap-1">
                <AnimatedNumber value={3.2} decimals={1} className="text-4xl font-bold text-[#1d1d1f] leading-none" />
                <span className="text-base text-[#86868b] mb-0.5">kg</span>
              </div>
            </CardContent>
          </Card>
        </FadeInItem>

        <FadeInItem>
          <Card className="relative overflow-hidden border border-emerald-200 shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-emerald-50 h-full">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/25 rounded-full blur-2xl" />
            <CardContent className="relative z-10 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                  Dampak Setara
                </p>
                <TreePine className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-2xl font-bold text-emerald-800 leading-tight">
                Menanam 5 Pohon
              </p>
            </CardContent>
          </Card>
        </FadeInItem>
      </FadeInStagger>

      <FadeIn delay={0.3}>
        <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white mb-6">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="font-bold text-[#1d1d1f] text-sm">
                  Status Pahlawan Bumi
                </p>
                <p className="text-xs text-[#86868b] mt-0.5">
                  Selesaikan 1 servis lagi untuk mencapai Level 3.
                </p>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 border-0 text-[10px] font-bold tracking-wide rounded-full px-3 py-1">
                LEVEL 2: PEJUANG SERVIS
              </Badge>
            </div>

            <AnimatedProgress value={78} className="w-full h-2.5 bg-[#f2f3f5] rounded-full overflow-hidden" />
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="space-y-3">
          <h2 className="text-base font-bold text-[#1d1d1f]">
            Riwayat Kontribusi
          </h2>
          {contributions.map((c, i) => (
            <Card
              key={i}
              className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white"
            >
              <CardContent className="px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#f2f3f5] rounded-xl flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f]">
                      {c.title}
                    </p>
                    <p className="text-xs text-[#86868b]">{c.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-600">
                    {c.co2}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>
    </main>
  );
}
