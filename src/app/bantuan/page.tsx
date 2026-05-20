"use client";

import {
  Search,
  User,
  Wrench,
  CreditCard,
  AlertTriangle,
  Recycle,
  Handshake,
  MessageCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Akun & Profil",
      description: "Pengaturan akun, profil teknisi, dan keamanan data.",
      icon: <User className="w-5 h-5 text-emerald-600" />,
      bgIcon: (
        <User className="w-16 h-16 text-slate-50 opacity-5 absolute -top-2 -right-2" />
      ),
    },
    {
      title: "Proses Servis",
      description: "Panduan pelacakan status perbaikan dan jadwal teknisi.",
      icon: <Wrench className="w-5 h-5 text-emerald-600" />,
      bgIcon: (
        <Wrench className="w-16 h-16 text-slate-50 opacity-5 absolute -top-2 -right-2" />
      ),
    },
    {
      title: "Pembayaran & Garansi",
      description: "Informasi tagihan, metode pembayaran, dan klaim garansi.",
      icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
      bgIcon: (
        <CreditCard className="w-16 h-16 text-slate-50 opacity-5 absolute -top-2 -right-2" />
      ),
    },
    {
      title: "Kendala Teknisi",
      description: "Pelaporan masalah teknis atau keluhan layanan.",
      icon: <AlertTriangle className="w-5 h-5 text-emerald-600" />,
      bgIcon: (
        <AlertTriangle className="w-16 h-16 text-slate-50 opacity-5 absolute -top-2 -right-2" />
      ),
    },
    {
      title: "Layanan E-Waste",
      description: "Panduan daur ulang perangkat elektronik bekas.",
      icon: <Recycle className="w-5 h-5 text-emerald-600" />,
      bgIcon: (
        <Recycle className="w-16 h-16 text-slate-50 opacity-5 absolute -top-2 -right-2" />
      ),
    },
    {
      title: "Kemitraan",
      description: "Informasi untuk teknisi baru dan kerjasama B2B.",
      icon: <Handshake className="w-5 h-5 text-emerald-600" />,
      bgIcon: (
        <Handshake className="w-16 h-16 text-slate-50 opacity-5 absolute -top-2 -right-2" />
      ),
    },
  ];

  const faqs = [
    "Bagaimana cara klaim garansi?",
    "Berapa lama rata-rata proses servis?",
    "Apakah ada biaya pengecekan awal?",
    "Bagaimana jika teknisi tidak datang sesuai jadwal?",
    "Metode pembayaran apa saja yang diterima?",
  ];

  return (
    <main className="bg-[#fafafa] min-h-screen font-sans pb-20">
      <FadeIn>
      <section className="pt-20 pb-16 px-6 text-center space-y-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Ada yang bisa kami bantu?
        </h1>
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            className="w-full h-14 pl-12 rounded-2xl border-none shadow-sm bg-white text-base focus-visible:ring-emerald-500"
            placeholder="Cari solusi atau artikel bantuan..."
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {categories.map((cat, i) => (
          <Card
            key={i}
            className="border-none shadow-[0_2px_15px_rgba(0,0,0,0.02)] rounded-2xl overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
          >
            <CardContent className="p-8 relative">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-6">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {cat.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {cat.description}
              </p>
              {cat.bgIcon}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-24">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Pertanyaan Umum</h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Temukan jawaban cepat untuk pertanyaan yang paling sering diajukan
            oleh pengguna kami.
          </p>
        </div>
        <div className="md:col-span-3">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-none bg-white rounded-xl px-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              >
                <AccordionTrigger className="hover:no-underline font-semibold text-slate-700 text-left py-5">
                  {faq}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500">
                  Informasi detail mengenai {faq.toLowerCase()} akan ditampilkan
                  di sini.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6">
        <Card className="border-none shadow-xl rounded-[2.5rem] bg-white p-4">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-10">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900">
                Masih butuh bantuan?
              </h3>
              <p className="text-slate-500 text-sm">
                Tim dukungan khusus kami siap membantu Anda menyelesaikan
                masalah yang ada.
              </p>
            </div>
            <Button
              className="bg-[#128C7E] hover:bg-[#075E54] text-white rounded-xl h-12 px-8 gap-2 font-bold transition-colors"
              onClick={() => toast.info("Membuka WhatsApp...")}
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Hubungi via WhatsApp
            </Button>
          </CardContent>
        </Card>
      </section>
      </FadeIn>
    </main>
  );
}
