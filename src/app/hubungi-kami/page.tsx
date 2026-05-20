"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contacts = [
  {
    icon: <WhatsAppIcon className="w-5 h-5 text-emerald-600" />,
    title: "WhatsApp Support",
    description: "Dapatkan respon cepat untuk konsultasi perbaikan perangkat Anda.",
    action: { label: "Hubungi via WhatsApp →", href: "https://wa.me/6281234567890" },
  },
  {
    icon: <Mail className="w-5 h-5 text-emerald-600" />,
    title: "Email Support",
    description: "Kirimkan detail masalah perangkat Anda untuk estimasi biaya.",
    action: { label: "halo@reparasihub.com", href: "mailto:halo@reparasihub.com" },
  },
  {
    icon: <MapPin className="w-5 h-5 text-emerald-600" />,
    title: "Office Address",
    description: "Malang, Jawa Timur\nIndonesia",
    action: null,
  },
];

const topics = [
  "Konsultasi Perbaikan",
  "Status Perbaikan",
  "Pembayaran & Garansi",
  "Kemitraan Teknisi",
  "Lainnya",
];

export default function HubungiKamiPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Mohon isi field yang wajib.");
      return;
    }
    toast.success("Pesan berhasil dikirim! Tim kami akan menghubungi Anda.");
    setForm({ name: "", email: "", topic: "", message: "" });
  }

  return (
    <main className="bg-[#fbfbfd] min-h-screen font-sans pt-28 pb-20 px-6">
      <FadeIn>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 space-y-2">
          <h1 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-[#86868b] text-base">
            Tim dukungan kami siap membantu masalah perbaikan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 items-start">
          <div className="space-y-4">
            {contacts.map((c) => (
              <Card
                key={c.title}
                className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white"
              >
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-[#1d1d1f] text-sm">{c.title}</p>
                    <p className="text-[#86868b] text-sm leading-relaxed whitespace-pre-line">
                      {c.description}
                    </p>
                    {c.action && (
                      <a
                        href={c.action.href}
                        className="text-emerald-600 text-sm font-medium hover:underline"
                      >
                        {c.action.label}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                    Nama Lengkap
                  </Label>
                  <Input
                    placeholder="Masukkan nama lengkap Anda"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl border-[#e6e6ea] bg-[#fbfbfd] focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                    Alamat Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-xl border-[#e6e6ea] bg-[#fbfbfd] focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                    Pilih Topik
                  </Label>
                  <Select
                    value={form.topic}
                    onValueChange={(val) => setForm({ ...form, topic: val })}
                  >
                    <SelectTrigger className="rounded-xl border-[#e6e6ea] bg-[#fbfbfd] focus:ring-emerald-500/30">
                      <SelectValue placeholder="Konsultasi Perbaikan" />
                    </SelectTrigger>
                    <SelectContent>
                      {topics.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                    Pesan
                  </Label>
                  <textarea
                    placeholder="Jelaskan detail yang ingin Anda sampaikan..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    required
                    className="w-full rounded-xl border border-[#e6e6ea] bg-[#fbfbfd] px-3 py-2.5 text-sm text-[#3f4941] placeholder:text-[#86868b] resize-none outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl font-semibold text-base"
                >
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      </FadeIn>
    </main>
  );
}
