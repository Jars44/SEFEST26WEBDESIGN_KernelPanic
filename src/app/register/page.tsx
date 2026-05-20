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
  SiApple,
} from "@icons-pack/react-simple-icons";
import { GoogleIcon } from "@/components/icons/google-icon";

type Role = "user" | "technician";

export default function RegisterPage() {
  const [role, setRole] = useState<Role>("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="py-34 min-h-screen grid grid-cols-1 lg:grid-cols-2 font-sans">
      <FadeIn direction="left">
      <div className="bg-[#f8fafc] p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto lg:mx-20 space-y-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100/50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            AKSES AKUN AMAN
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
              Buat Akun <br /> ReparasiHub <br /> Anda
            </h1>
            <p className="text-slate-500 leading-relaxed">
              Daftar sekarang untuk memulai pengalaman perbaikan perangkat yang
              seamless.
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

      <FadeIn direction="right">
      <div className="flex items-center justify-center p-6 bg-white">
        <Card className="w-full max-w-[440px] border-none shadow-[0_20px_60px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-4">
          <CardContent className="pt-10 pb-8 px-8 space-y-6">
            <div className="flex bg-slate-100 rounded-xl p-1">
              {(
                [
                  { value: "user", label: "Saya Butuh Servis" },
                  { value: "technician", label: "Saya Teknisi" },
                ] as { value: Role; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setRole(tab.value)}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    role === tab.value
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  Nama Lengkap
                </Label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="h-12 bg-slate-50 border-none rounded-xl px-4 focus-visible:ring-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  Alamat Email
                </Label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="h-12 bg-slate-50 border-none rounded-xl px-4 focus-visible:ring-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  Kata Sandi
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="h-12 bg-slate-50 border-none rounded-xl px-4 pr-12 focus-visible:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
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

              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  Konfirmasi Kata Sandi
                </Label>
                <div className="relative">
                  <Input
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    className="h-12 bg-slate-50 border-none rounded-xl px-4 pr-12 focus-visible:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((p) => !p)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showConfirm ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button asChild className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold shadow-lg shadow-emerald-700/20 transition-all">
              <Link href="/portal">Buat Akun</Link>
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100" />
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
                { icon: <SiApple size={18} />, color: "text-slate-900" },
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

            <p className="text-center text-xs text-slate-500 pt-2">
              Sudah punya akun?{" "}
              <Link
                href="/login"
                className="text-emerald-600 font-bold hover:underline"
              >
                Masuk
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
      </FadeIn>
    </main>
  );
}
