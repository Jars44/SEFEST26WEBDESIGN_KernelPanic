"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, UserCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] font-sans flex items-center justify-center px-4 py-16">
      <FadeIn>
      <div className="w-full max-w-2xl space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1d1d1f]">
            Pilih Portal Anda
          </h1>
          <p className="text-[#86868b] text-sm max-w-md mx-auto">
            Ini adalah demo portal. Pilih peran Anda untuk masuk ke dashboard
            yang sesuai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/app/servis">
            <Card className="border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-emerald-300 transition-all cursor-pointer group">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <Wrench className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-[#1d1d1f]">
                    Teknisi
                  </h2>
                  <p className="text-sm text-[#86868b] leading-relaxed">
                    Kelola pekerjaan perbaikan, lacak progres servis, dan
                    kelola inventaris komponen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/user">
            <Card className="border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-emerald-300 transition-all cursor-pointer group">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <UserCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-[#1d1d1f]">
                    Pengguna
                  </h2>
                  <p className="text-sm text-[#86868b] leading-relaxed">
                    Lacak status perbaikan perangkat Anda dan hubungi teknisi
                    yang menangani.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <p className="text-center text-xs text-[#86868b]">
          <Link
            href="/"
            className="text-emerald-600 font-bold hover:underline"
          >
            Kembali ke beranda
          </Link>
        </p>
      </div>
      </FadeIn>
    </main>
  );
}
