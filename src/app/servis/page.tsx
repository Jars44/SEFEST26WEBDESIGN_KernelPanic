"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Smartphone,
  Laptop,
  Tv,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Battery,
  PowerOff,
  Camera,
  Volume2,
  Plus,
} from "lucide-react";
import Link from "next/link";
import ServisHeader from "@/components/layouts/ServisHeader";

type Step = "device" | "issues" | "estimate" | "searching" | "found" | "checkout" | "success";

const DEVICES = [
  { id: "smartphone", label: "Smartphone", icon: Smartphone },
  { id: "laptop", label: "Laptop", icon: Laptop },
  { id: "home", label: "Home Electronics", icon: Tv },
];

const ISSUES = [
  { id: "layar", label: "Layar Pecah", icon: Smartphone },
  { id: "baterai", label: "Baterai Bocor", icon: Battery },
  { id: "mati", label: "Mati Total", icon: PowerOff },
  { id: "kamera", label: "Kamera Rusak", icon: Camera },
  { id: "speaker", label: "Speaker Sember", icon: Volume2 },
  { id: "lain", label: "Permasalahan lain", icon: Plus },
];

function StepBar({ current }: { current: "device" | "issues" | "estimate" | "done" }) {
  const steps = [
    { key: "device", label: "DEVICE", num: 1 },
    { key: "issues", label: "ISSUES", num: 2 },
    { key: "estimate", label: "ESTIMATE", num: 3 },
  ];

  const order = ["device", "issues", "estimate", "done"];
  const currentIdx = order.indexOf(current);

  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {steps.map((s, i) => {
        const stepIdx = order.indexOf(s.key);
        const isCompleted = stepIdx < currentIdx;
        const isActive = s.key === current;

        return (
          <div key={s.key} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  isCompleted
                    ? "bg-emerald-600 text-white"
                    : isActive
                      ? "bg-emerald-700 text-white"
                      : "bg-[#e6e6ea] text-[#86868b]"
                }`}
              >
                {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : s.num}
              </div>
              <span
                className={`text-[9px] font-bold tracking-widest uppercase ${
                  isActive ? "text-emerald-700" : isCompleted ? "text-emerald-600" : "text-[#86868b]"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-16 h-px mx-2 mb-4 ${stepIdx < currentIdx ? "bg-emerald-400" : "bg-[#e6e6ea]"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ServisPage() {
  const [step, setStep] = useState<Step>("device");
  const [direction, setDirection] = useState<1 | -1>(1);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [customIssue, setCustomIssue] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  function goTo(next: Step, dir: 1 | -1 = 1) {
    setDirection(dir);
    setStep(next);
  }

  useEffect(() => {
    if (step === "searching") {
      const timer = setTimeout(() => goTo("found"), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  function toggleIssue(issue: string) {
    setSelectedIssues((prev) => (prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]));
  }

  const showHeader = !["searching", "found", "success"].includes(step);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <ServisHeader visible={showHeader} />
      <main className="min-h-screen bg-[#fbfbfd] font-sans flex flex-col items-center justify-center pt-20 pb-24 px-4 overflow-x-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {step === "device" && (
            <>
              <motion.div
                key="device"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="w-full max-w-2xl mx-auto">
                  <StepBar current="device" />
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[#1d1d1f]">What needs fixing today?</h1>
                    <p className="text-sm text-[#86868b] mt-1">Pilih perangkat yang ingin kamu servis</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    {DEVICES.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => setSelectedDevice(id)}
                        className={`rounded-2xl border p-6 flex flex-col items-center gap-3 transition-all bg-white shadow-[0_2px_15px_rgba(0,0,0,0.03)] cursor-pointer ${
                          selectedDevice === id
                            ? "border-emerald-500 ring-2 ring-emerald-200"
                            : "border-[#e6e6ea] hover:border-emerald-300"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            selectedDevice === id ? "bg-emerald-50 text-emerald-700" : "bg-[#f5f5f7] text-[#3f4941]"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span
                          className={`text-sm font-semibold ${
                            selectedDevice === id ? "text-emerald-700" : "text-[#1d1d1f]"
                          }`}
                        >
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
              <div className="fixed bottom-6 left-6 right-6 flex justify-end z-40 pointer-events-none">
                <Button
                  onClick={() => selectedDevice && goTo("issues")}
                  disabled={!selectedDevice}
                  className="bg-emerald-700 hover:bg-emerald-800 rounded-xl px-6 gap-2 disabled:opacity-40 pointer-events-auto"
                >
                  Lanjut <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </>
          )}

          {step === "issues" && (
            <>
              <motion.div
                key="issues"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="w-full max-w-2xl mx-auto">
                  <StepBar current="issues" />
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[#1d1d1f]">What seems to be the issue?</h1>
                    <p className="text-sm text-[#86868b] mt-1">Pilih satu atau lebih masalah yang kamu alami</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                    {ISSUES.map(({ id, label, icon: Icon }) => {
                      const selected = selectedIssues.includes(label);
                      return (
                        <button
                          key={id}
                          onClick={() => toggleIssue(label)}
                          className={`rounded-2xl border p-6 flex flex-col items-start gap-3 transition-all bg-white shadow-[0_2px_15px_rgba(0,0,0,0.03)] cursor-pointer ${
                            selected
                              ? "border-emerald-500 ring-2 ring-emerald-200"
                              : "border-[#e6e6ea] hover:border-emerald-300"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${selected ? "text-emerald-700" : "text-[#3f4941]"}`} />
                          <span className={`text-sm font-semibold ${selected ? "text-emerald-700" : "text-[#1d1d1f]"}`}>
                            {label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {selectedIssues.includes("Permasalahan lain") && (
                    <div className="mb-10">
                      <Input
                        placeholder="Jelaskan permasalahan kamu..."
                        value={customIssue}
                        onChange={(e) => setCustomIssue(e.target.value)}
                        className="rounded-xl border-[#e6e6ea] text-sm"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
              <div className="fixed bottom-6 left-6 right-6 flex justify-between z-40 pointer-events-none">
                <Button
                  variant="outline"
                  onClick={() => goTo("device", -1)}
                  className="rounded-xl border-[#e6e6ea] text-[#3f4941] pointer-events-auto"
                >
                  ← Kembali
                </Button>
                <Button
                  onClick={() => selectedIssues.length > 0 && goTo("estimate")}
                  disabled={selectedIssues.length === 0}
                  className="bg-emerald-700 hover:bg-emerald-800 rounded-xl px-6 gap-2 disabled:opacity-40 pointer-events-auto"
                >
                  Lanjut <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </>
          )}

          {step === "estimate" && (
            <>
              <motion.div
                key="estimate"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="w-full max-w-3xl mx-auto">
                  <StepBar current="done" />
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[#1d1d1f]">Review & Confirm</h1>
                    <p className="text-sm text-[#86868b] mt-1">Lengkapi lokasi servis dan tinjau estimasi biaya</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 w-full">
                    <Card className="bg-white border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <h2 className="text-sm font-bold text-[#1d1d1f]">Service Location</h2>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-[#86868b]">Alamat Lengkap</Label>
                          <Input
                            placeholder="Jl. Contoh No. 123, RT/RW"
                            className="rounded-xl border-[#e6e6ea] text-sm"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <Label className="text-xs text-[#86868b]">Kota</Label>
                            <Input placeholder="Jakarta" className="rounded-xl border-[#e6e6ea] text-sm" />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs text-[#86868b]">Kode Pos</Label>
                            <Input placeholder="12345" className="rounded-xl border-[#e6e6ea] text-sm" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-[#86868b]">Catatan (opsional)</Label>
                          <textarea
                            placeholder="Patokan atau instruksi tambahan..."
                            rows={3}
                            className="w-full rounded-xl border border-[#e6e6ea] text-sm px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-300 text-[#1d1d1f] placeholder:text-[#86868b]"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                      <CardContent className="p-6 space-y-5">
                        <div>
                          <h2 className="text-sm font-bold text-[#1d1d1f] mb-3">Diagnostic Summary</h2>
                          <div className="flex flex-wrap gap-2">
                            {selectedIssues.map((issue) => (
                              <Badge
                                key={issue}
                                className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-medium px-3 py-1"
                              >
                                {issue}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-[#e6e6ea] pt-4">
                          <p className="text-xs text-[#86868b] mb-1">Estimated Cost</p>
                          <p className="text-xl font-bold text-[#1d1d1f]">Rp 150.000 – Rp 300.000</p>
                          <p className="text-xs text-[#86868b] mt-0.5">Final price confirmed after diagnosis</p>
                        </div>
                        <div className="space-y-2 border-t border-[#e6e6ea] pt-4">
                          {[
                            "Teknisi bersertifikat & terverifikasi",
                            "Garansi servis 30 hari",
                            "Tidak ada biaya tersembunyi",
                          ].map((note) => (
                            <div key={note} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="text-xs text-[#3f4941]">{note}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
              <div className="fixed bottom-6 left-6 right-6 flex justify-between z-40 pointer-events-none">
                <Button
                  variant="outline"
                  onClick={() => goTo("issues", -1)}
                  className="rounded-xl border-[#e6e6ea] text-[#3f4941] pointer-events-auto"
                >
                  ← Kembali
                </Button>
                <Button
                  onClick={() => goTo("searching")}
                  className="bg-emerald-700 hover:bg-emerald-800 rounded-xl px-6 gap-2 pointer-events-auto"
                >
                  Cari Teknisi <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </>
          )}

          {step === "searching" && (
            <motion.div
              key="searching"
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center animate-pulse">
                  <ShieldCheck className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#1d1d1f]">Mencari Teknisi Terbaik</h1>
                  <p className="text-sm text-[#86868b] mt-1">Kami sedang mencocokkan kamu dengan teknisi terdekat...</p>
                </div>
                <Card className="w-full bg-white border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                  <CardContent className="p-5 space-y-3 animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#e6e6ea]" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-[#e6e6ea] rounded-full w-3/4" />
                        <div className="h-2.5 bg-[#e6e6ea] rounded-full w-1/2" />
                      </div>
                    </div>
                    <div className="h-2.5 bg-[#e6e6ea] rounded-full w-full" />
                    <div className="h-2.5 bg-[#e6e6ea] rounded-full w-5/6" />
                    <div className="h-8 bg-[#e6e6ea] rounded-xl w-full" />
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {step === "found" && (
            <motion.div
              key="found"
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-xs font-bold tracking-widest text-[#86868b] uppercase">Match Confirmed</p>

                <Card className="w-full bg-white border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <Avatar className="w-24 h-24">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold text-2xl">FM</AvatarFallback>
                    </Avatar>
                    <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold px-3 py-0.5">
                      Ready to Connect
                    </Badge>
                    <div>
                      <p className="font-bold text-[#1d1d1f] text-lg">Fajar Maulid</p>
                      <p className="text-sm text-[#86868b] mt-1 leading-relaxed">
                        Level 4 Diagnostic Specialist. Over 8 years of precision micro-soldering experience.
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-6 pt-2 pb-2 border-t border-[#e6e6ea] w-full">
                      <div className="text-center">
                        <p className="text-base font-bold text-[#1d1d1f]">4.9</p>
                        <p className="text-[10px] text-[#86868b] uppercase tracking-wide">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-base font-bold text-[#1d1d1f]">1,204</p>
                        <p className="text-[10px] text-[#86868b] uppercase tracking-wide">Repairs</p>
                      </div>
                      <div className="text-center">
                        <p className="text-base font-bold text-[#1d1d1f]">15m</p>
                        <p className="text-[10px] text-[#86868b] uppercase tracking-wide">ETA</p>
                      </div>
                    </div>

                    <Button
                      onClick={() => goTo("checkout")}
                      className="w-full bg-emerald-700 hover:bg-emerald-800 rounded-xl gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4" /> Hubungi Teknisi via WhatsApp
                    </Button>
                    <button
                      onClick={() => goTo("device", -1)}
                      className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                    >
                      Cancel Request
                    </button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {step === "checkout" && (
            <motion.div
              key="checkout"
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="w-full max-w-3xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold text-[#1d1d1f]">Checkout.</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                  <div className="space-y-4">
                    <Card className="bg-white border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                      <CardContent className="p-5 space-y-3">
                        <h2 className="text-sm font-bold text-[#1d1d1f]">Metode Pembayaran</h2>
                        <label
                          onClick={() => setPaymentMethod("cod")}
                          className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${paymentMethod === "cod" ? "border-2 border-emerald-500 bg-emerald-50" : "border border-[#e6e6ea] hover:border-emerald-300"}`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === "cod"}
                            readOnly
                            className="accent-emerald-600"
                          />
                          <div>
                            <p className="text-sm font-semibold text-[#1d1d1f]">Bayar Tunai ke Teknisi</p>
                            <p className="text-xs text-[#86868b]">COD — bayar saat teknisi tiba</p>
                          </div>
                        </label>
                        <label
                          onClick={() => setPaymentMethod("transfer")}
                          className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${paymentMethod === "transfer" ? "border-2 border-emerald-500 bg-emerald-50" : "border border-[#e6e6ea] hover:border-emerald-300"}`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === "transfer"}
                            readOnly
                            className="accent-emerald-600"
                          />
                          <div>
                            <p className="text-sm font-semibold text-[#1d1d1f]">Transfer Bank</p>
                            <p className="text-xs text-[#86868b]">BCA, Mandiri, BNI, BRI</p>
                          </div>
                        </label>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                      <CardContent className="p-5 space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <h2 className="text-sm font-bold text-[#1d1d1f]">Lokasi Servis</h2>
                        </div>
                        <p className="text-sm text-[#3f4941]">Jl. Sudirman No. 45, Jakarta Pusat</p>
                        <p className="text-xs text-[#86868b]">Jakarta, 10220</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-white border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                    <CardContent className="p-5 space-y-4">
                      <h2 className="text-sm font-bold text-[#1d1d1f]">Order Summary</h2>
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-[#1d1d1f] font-medium">Screen Replacement</p>
                            <p className="text-xs text-[#86868b]">iPhone 13 Pro Max</p>
                          </div>
                          <p className="text-sm font-semibold text-[#1d1d1f]">Rp 2.450.000</p>
                        </div>
                      </div>
                      <div className="border-t border-[#e6e6ea] pt-3 space-y-2">
                        <div className="flex justify-between text-sm text-[#3f4941]">
                          <span>Subtotal</span>
                          <span>Rp 2.450.000</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#3f4941]">
                          <span>Biaya Layanan</span>
                          <span>Rp 150.000</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#3f4941]">
                          <span>Pajak 11%</span>
                          <span>Rp 286.000</span>
                        </div>
                      </div>
                      <div className="border-t border-[#e6e6ea] pt-3 flex justify-between items-center">
                        <span className="text-sm font-bold text-[#1d1d1f]">Total</span>
                        <span className="text-lg font-bold text-[#1d1d1f]">Rp 2.886.000</span>
                      </div>
                      <Button
                        onClick={() => goTo("success")}
                        className="w-full bg-emerald-700 hover:bg-emerald-800 rounded-xl gap-2 mt-2"
                      >
                        Bayar <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="w-full max-w-md mx-auto flex flex-col items-center text-center space-y-6 py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-emerald-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#1d1d1f]">Pesanan Berhasil!</h1>
                  <p className="text-sm text-[#86868b] mt-1">
                    Teknisi akan segera menghubungi kamu untuk konfirmasi jadwal
                  </p>
                </div>

                <Card className="w-full bg-white border border-[#e6e6ea] rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-[#e6e6ea]">
                      <span className="text-xs text-[#86868b] font-bold tracking-widest uppercase">Order ID</span>
                      <span className="text-sm font-bold text-[#1d1d1f]">RH-9824</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-[#3f4941]">
                        <span>Ganti Layar iPhone 13 Pro</span>
                        <span>Rp 2.450.000</span>
                      </div>
                      <div className="flex justify-between text-sm text-[#3f4941]">
                        <span>Biaya Layanan</span>
                        <span>Rp 50.000</span>
                      </div>
                    </div>
                    <div className="border-t border-[#e6e6ea] pt-3 flex justify-between items-center">
                      <span className="text-sm font-bold text-[#1d1d1f]">Total Pembayaran</span>
                      <span className="text-lg font-bold text-emerald-700">Rp 2.500.000</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="w-full space-y-3">
                  <Button className="w-full bg-emerald-700 hover:bg-emerald-800 rounded-xl" asChild>
                    <Link href="/user">Lihat Detail Pesanan</Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl border-[#e6e6ea] text-[#3f4941]" asChild>
                    <Link href="/">Kembali ke Beranda</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
