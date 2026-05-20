"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/../public/images/hero_LandingPage.webp";
import {
  ArrowRight,
  Wrench,
  ShieldCheck,
  Trash,
  DollarSign,
  Leaf,
  Star,
  MonitorSmartphone,
  UserSearch,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion/fade-in";

export default function RootPage() {
  const steps = [
    {
      id: 1,
      icon: <MonitorSmartphone className="w-8 h-8 text-emerald-600" />,
      title: "Pilih Gadget",
      description:
        "Pilih jenis perangkat Anda dan deskripsikan masalah secara detail untuk estimasi awal.",
    },
    {
      id: 2,
      icon: <UserSearch className="w-8 h-8 text-emerald-600" />,
      title: "Cocokkan Teknisi",
      description:
        "Kami mencocokkan Anda dengan teknisi vokasi lokal terdekat yang ahli dalam masalah tersebut.",
    },
    {
      id: 3,
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
      title: "Selesai & Bergaransi",
      description:
        "Perangkat diperbaiki dengan presisi. Nikmati garansi layanan untuk ketenangan pikiran Anda.",
    },
  ];

  return (
    <>
      <FadeIn>
        <section className="container mx-auto px-6 py-16 mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-green-200 text-green-800 rounded-full px-3 py-1 mb-4">
              <Wrench className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Restorasi Presisi</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-black font-bold tracking-tight">
              Jangan Dibuang,{" "}
              <span className="text-green-700">Mari Perbaiki.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose">
              Layanan perbaikan perangkat andal yang mengembalikan fungsi optimal
              gadget Anda, memberdayakan teknisi lokal, dan mengurangi limbah
              elektronik secara signifikan.
            </p>
            <div className="flex space-x-4">
              <Button asChild>
                <Link href="/servis">
                  Cari Teknisi Sekarang
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/tentang-kami">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-sm md:max-w-md mx-auto h-72 md:h-[26rem] bg-muted rounded-xl overflow-hidden flex flex-col">
            <Image
              src={heroImage}
              alt="Circuit board microchips"
              fill
              className="object-cover w-full h-full"
            />
            <div className="flex-1"></div>
            <div className="relative mt-2.5 mx-2.5 mb-4 p-4 bg-white rounded-xl shadow-sm flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-green-200 rounded-full">
                <ShieldCheck className="w-5 h-5 text-green-800" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">
                  Teknisi Tersertifikasi
                </p>
                <p className="text-xs text-muted-foreground">
                  Ahli perbaikan perangkat teruji
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="container mx-auto px-6 py-12">
        <FadeIn>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Mengapa Memperbaiki Lebih Baik?
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Limbah elektronik adalah salah satu krisis lingkungan dengan
              pertumbuhan tercepat. Memperbaiki perangkat Anda adalah langkah
              nyata untuk perubahan.
            </p>
          </div>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          <FadeInItem>
            <Card className="bg-muted/30 rounded-xl p-6 flex flex-col items-start h-full">
              <div className="bg-green-200 rounded-full p-3 mb-4">
                <Trash className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Gunung E‑Waste
              </h3>
              <p className="text-sm text-muted-foreground">
                Indonesia memproduksi ratusan ribu ton limbah elektronik setiap
                tahun, sebagian besar tidak didaur ulang dengan benar.
              </p>
            </Card>
          </FadeInItem>
          <FadeInItem>
            <Card className="bg-muted/30 rounded-xl p-6 flex flex-col items-start h-full">
              <div className="bg-red-200 rounded-full p-3 mb-4">
                <DollarSign className="w-6 h-6 text-red-800" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Biaya Penggantian
              </h3>
              <p className="text-sm text-muted-foreground">
                Membeli perangkat baru jauh lebih mahal daripada memperbaiki
                komponen yang rusak secara selektif dan presisi.
              </p>
            </Card>
          </FadeInItem>
          <FadeInItem>
            <Card className="bg-muted/30 rounded-xl p-6 flex flex-col items-start h-full">
              <div className="bg-green-200 rounded-full p-3 mb-4">
                <Leaf className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Dampak Lingkungan
              </h3>
              <p className="text-sm text-muted-foreground">
                Produksi satu smartphone baru membutuhkan lebih banyak energi dan
                material daripada memperpanjang umur perangkat lama.
              </p>
            </Card>
          </FadeInItem>
        </FadeInStagger>
      </section>

      <FadeIn>
        <div className="container mx-auto px-6">
        <div className="relative w-full overflow-hidden rounded-[2rem] bg-gray-100 min-h-[400px] flex items-center">
          <Image
            src="/images/hero-background.jpg"
            alt="Vocational technician at work"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200/90 via-gray-200/60 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full p-8 md:p-16 gap-8">
            <div className="flex flex-col items-start max-w-lg gap-5">
              <span className="text-xs md:text-sm font-bold tracking-widest text-emerald-600 uppercase">
                Solusi Lokal
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1]">
                Memberdayakan <br />
                Bakat Vokasi
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                Kami tidak hanya memperbaiki perangkat Anda. Kami menghubungkan
                Anda dengan siswa SMK dan teknisi lokal bersertifikat, memberikan
                mereka pengalaman praktis dan penghasilan yang adil.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Kenali Teknisi Kami <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <Card className="w-full max-w-[320px] shadow-xl rounded-2xl border-none bg-white md:mr-8 mt-8 md:mt-0">
              <CardContent className="p-5 flex items-center gap-4">
                <Avatar className="w-16 h-16 border bg-slate-100">
                  <AvatarImage
                    src="/images/technician-avatar.jpg"
                    alt="Rifqi Abdillah"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-lg font-bold text-slate-400">
                    RA
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-extrabold text-slate-900 text-lg leading-tight">
                    Rifqi Abdillah
                  </span>
                  <span className="text-xs text-slate-500 font-medium mb-1.5">
                    Siswa SMK Negeri 2 Singosari
                  </span>
                  <div className="flex items-center gap-1 text-orange-400">
                    <Star className="w-4 h-4" strokeWidth={2.5} />
                    <Star className="w-4 h-4" strokeWidth={2.5} />
                    <Star className="w-4 h-4" strokeWidth={2.5} />
                    <Star className="w-4 h-4" strokeWidth={2.5} />
                    <Star className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </FadeIn>

      <section className="container mx-auto px-6 py-12">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Proses Perbaikan Sederhana
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Kami merancang proses perbaikan semudah mungkin tanpa mengorbankan
              kualitas dan presisi.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <div
            className="absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-slate-200 hidden md:block"
            aria-hidden="true"
          />

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 relative" staggerDelay={0.15}>
            {steps.map((step) => (
              <FadeInItem key={step.id}>
                <div className="flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] ring-1 ring-slate-50 z-10 relative transition-transform group-hover:scale-105">
                      {step.icon}
                    </div>

                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold z-20 shadow-md">
                      {step.id}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>
    </>
  );
}
