"use client";

import { Recycle, Receipt, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { AnimatedCounter } from "@/components/motion/animated-counter";

export default function TentangKamiPage() {
  const pillars = [
    {
      title: "Ekonomi Sirkular",
      description:
        "Kami memperpanjang usia pakai gadget Anda, secara aktif mengurangi limbah elektronik dan mendukung masa depan yang lebih berkelanjutan untuk bumi kita.",
      icon: <Recycle className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "Transparansi Harga",
      description:
        "Tidak ada biaya tersembunyi. Kami menyajikan estimasi biaya yang jelas dan masuk akal sebelum perbaikan dimulai, membangun kepercayaan dalam setiap transaksi.",
      icon: <Receipt className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "Teknisi Tersertifikasi",
      description:
        "Siswa vokasi terpilih yang telah melalui pelatihan ketat dan sertifikasi profesional, memastikan perbaikan tingkat tinggi setara dengan pusat layanan resmi.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
    },
  ];
  const stats = [
    {
      value: "5.000+",
      label: "GADGET DISELAMATKAN",
    },
    {
      value: "120+",
      label: "TEKNISI VOKASI",
    },
    {
      value: "15 Ton",
      label: "E-WASTE DICEGAH",
    },
  ];
  return (
    <>
      <section className="py-34 px-4 bg-white font-sans">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Memulihkan Perangkat, <br />
              <span className="text-emerald-600">Memberdayakan Generasi.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              ReparasiHub hadir untuk menekan laju limbah elektronik (E-Waste)
              sambil membuka jalan bagi talenta muda. Kami menghubungkan keahlian
              siswa vokasi (SMK) dengan kebutuhan perbaikan perangkat yang
              transparan, andal, dan ramah lingkungan.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="pt-8">
              <div className="relative aspect-video w-full bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero_tentangKami.webp"
                  alt="Students learning technology and empowering the next generation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#fcfcfc] font-sans">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Pilar Utama Kami
              </h2>
              <p className="text-slate-500 text-lg">
                Fondasi dari setiap layanan yang kami berikan.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {pillars.map((pillar, index) => (
              <FadeInItem key={index}>
                <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] bg-white transition-all hover:shadow-md h-full">
                  <CardHeader className="space-y-6">
                    <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 leading-tight">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 leading-relaxed text-[15px]">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="w-full py-12 px-4 max-w-7xl mx-auto font-sans">
        <FadeIn>
          <Card className="relative w-full border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[3rem] bg-white overflow-hidden">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
            <CardContent className="relative z-10 pt-16 pb-20 px-0">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-16">
                Dampak Nyata
              </h2>

              <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 w-full" staggerDelay={0.15}>
                {stats.map((stat, index) => (
                  <FadeInItem key={index}>
                    <div
                      className={`flex flex-col items-center justify-center text-center px-4 py-8 md:py-4 h-full
                            ${index !== stats.length - 1 ? "md:border-r border-slate-100" : ""}
                          `}
                    >
                      <div className="flex flex-col items-center justify-center space-y-4 w-full">
                      <AnimatedCounter value={stat.value} className="text-5xl md:text-7xl font-bold text-emerald-600 tracking-tighter" />
                        <span className="text-[10px] md:text-[12px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </CardContent>
          </Card>
        </FadeIn>
      </section>
    </>
  );
}
