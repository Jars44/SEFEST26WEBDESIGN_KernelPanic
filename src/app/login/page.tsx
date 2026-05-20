"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Wrench, Zap, Eye, EyeOff, ShieldCheck } from "lucide-react";
import {
  SiFacebook,
  SiX,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import { GoogleIcon } from "@/components/icons/google-icon";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-[calc(100vh-4rem)] mt-16 grid grid-cols-1 lg:grid-cols-2 font-sans">
      <FadeIn direction="left" className="hidden lg:block h-full">
      <div className="bg-[#f8fafc] p-12 flex flex-col justify-center h-full">
        <div className="max-w-md mx-auto lg:mx-20 space-y-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100/50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            AKSES AKUN AMAN
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
              Selamat Datang <br /> Kembali di <br /> ReparasiHub
            </h1>
            <p className="text-slate-500 leading-relaxed">
              Masuk sesuai peran Anda dan lanjutkan perbaikan perangkat Anda.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {[
              {
                title: "Teknisi Tersertifikasi",
                desc: "Jaringan ahli yang siap menangani setiap masalah.",
                icon: <Wrench className="w-5 h-5 text-white" />,
              },
              {
                title: "Layanan Ekspres",
                desc: "Proses cepat tanpa mengorbankan presisi.",
                icon: <Zap className="w-5 h-5 text-white" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </FadeIn>

      <FadeIn direction="right" className="h-full">
      <div className="flex items-center justify-center p-6 bg-white h-full">
        <Card className="w-full max-w-[440px] border-none shadow-[0_20px_60px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-4">
          <CardContent className="pt-10 pb-8 px-8 space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-700 ml-1">
                  Email
                </Label>
                <Input
                  type="email"
                  placeholder="nama@email.com"
                  className="h-12 bg-slate-50 border-none rounded-xl px-4 focus-visible:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <Label className="text-xs font-bold text-slate-700">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-[10px] font-bold text-emerald-600 hover:underline"
                  >
                    Lupa Password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="h-12 bg-slate-50 border-none rounded-xl px-4 pr-12 focus-visible:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button asChild className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold shadow-lg shadow-emerald-700/20 transition-all">
              <Link href="/portal">Masuk</Link>
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100"></span>
              </div>
              <div className="relative flex justify-center text-[10px] font-bold uppercase">
                <span className="bg-white px-4 text-slate-400 tracking-widest">
                  Atau
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {[
                { icon: <GoogleIcon size={18} />, color: "" },
                { icon: <SiFacebook size={18} />, color: "text-blue-600" },
                { icon: <SiX size={18} />, color: "text-slate-900" },
                { icon: <SiGithub size={18} />, color: "text-slate-900" },
              ].map((item, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  className={`w-12 h-12 rounded-full border-slate-100 shadow-sm ${item.color}`}
                >
                  {item.icon}
                </Button>
              ))}
            </div>

            <p className="text-center text-xs text-slate-500 pt-4">
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="text-emerald-600 font-bold hover:underline"
              >
                Daftar sekarang
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
      </FadeIn>
    </main>
  );
}
