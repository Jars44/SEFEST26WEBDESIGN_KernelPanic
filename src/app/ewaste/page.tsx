"use client";
import { Leaf, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DEVICE_DATA = {
  smartphone: { co2: 12.5, trees: 2, fuel: 1 },
  laptop: { co2: 38.0, trees: 6, fuel: 3 },
  tablet: { co2: 22.0, trees: 3, fuel: 2 },
};

export default function EwastePage() {
  const [selectedDevice, setSelectedDevice] = useState<keyof typeof DEVICE_DATA>("smartphone");
  const [displayCo2, setDisplayCo2] = useState(DEVICE_DATA.smartphone.co2);
  const prevCo2 = useRef(DEVICE_DATA.smartphone.co2);
  const scrollObserver = useRef<MutationObserver | null>(null);
  const data = DEVICE_DATA[selectedDevice];

  useEffect(() => {
    const from = prevCo2.current;
    const to = data.co2;
    prevCo2.current = to;
    const duration = 600;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayCo2(parseFloat((from + (to - from) * eased).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [data.co2]);

  useEffect(() => {
    const unlock = () => {
      document.body.removeAttribute("data-scroll-locked");
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("padding-right");
      document.documentElement.classList.remove("no-scrollbars");
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-scroll-locked"
        ) {
          unlock();
        }
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked"],
    });
    scrollObserver.current = observer;

    return () => {
      observer.disconnect();
      unlock();
    };
  }, []);

  const journalPosts = [
    {
      category: "MATERIAL",
      title: "Anatomi Baterai Lithium",
      description:
        "Membongkar siklus hidup komponen paling krusial dalam mobilitas modern.",
      image: "/images/journal-battery.jpg",
    },
    {
      category: "TEKNIK",
      title: "Seni Pemulihan Kaca",
      description:
        "Bagaimana teknologi mengembalikan integritas struktural layar yang hancur tanpa limbah ekstra.",
      image: "/images/journal-glass.jpg",
    },
    {
      category: "DAMPAK",
      title: "Ekonomi Sirkular Mikro",
      description:
        "Membangun ekosistem berkelanjutan dari bengkel perbaikan lokal ke dampak global.",
      image: "/images/journal-circular.jpg",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      <FadeIn>
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Mengapa Servis <br /> Lebih Baik?
          </h1>
          <p className="text-slate-500 leading-relaxed max-w-md">
            Setiap perangkat yang diperbaiki adalah langkah nyata mengurangi
            limbah elektronik. Pelajari bagaimana perbaikan presisi
            menyelamatkan bumi dan memperpanjang masa pakai teknologi yang Anda
            cintai.
          </p>
        </div>
        <div className="relative aspect-[4/3] bg-slate-200 rounded-[2rem] overflow-hidden shadow-lg">
          <Image
            src="/images/heroE-WastePage.webp"
            alt="E-waste reduction and repair concept"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden p-2 md:p-4">
          <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center py-8 px-8">
            <div className="md:col-span-3 space-y-6">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg">
                <Leaf className="w-5 h-5 fill-emerald-600" />
                <span>Kalkulator Emisi Karbon</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                Hitung estimasi dampak lingkungan positif yang Anda hasilkan
                dengan memilih untuk memperbaiki daripada membeli perangkat
                baru.
              </p>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                  Jenis Perangkat
                </label>
                <Select
                  value={selectedDevice}
                  onValueChange={(val) => setSelectedDevice(val as keyof typeof DEVICE_DATA)}
                >
                  <SelectTrigger className="w-full max-w-xs bg-slate-50 border-none rounded-xl h-12 focus:ring-emerald-500">
                    <SelectValue placeholder="Pilih perangkat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smartphone">Smartphone</SelectItem>
                    <SelectItem value="laptop">Laptop</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="relative overflow-hidden md:col-span-2 bg-emerald-50/50 rounded-3xl p-8 text-center flex flex-col justify-center items-center h-full min-h-[180px]">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
              <span className="text-[10px] font-bold text-emerald-800/60 tracking-widest uppercase mb-2">
                Estimasi Emisi yang Dicegah
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl font-bold text-emerald-600 tracking-tighter">
                  {displayCo2}
                </span>
                <span className="text-xl font-bold text-emerald-600/70">
                  kg CO2
                </span>
              </div>
              <p className="text-[10px] text-emerald-800/40 mt-4 leading-relaxed">
                Setara dengan menanam {data.trees} pohon atau <br /> menghemat{" "}
                {data.fuel} galon bensin.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Jurnal Presisi</h2>
          <button className="text-emerald-600 text-sm font-bold flex items-center gap-1 group">
            Lihat Semua{" "}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-square bg-slate-200 rounded-[2rem] mb-6 overflow-hidden transition-transform group-hover:scale-[1.02]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </FadeIn>
    </main>
  );
}
