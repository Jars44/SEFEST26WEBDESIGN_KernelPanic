"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Wallet, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { FadeIn } from "@/components/motion/fade-in";
import { AnimatedNumber } from "@/components/motion/animated-number";

const weeklyData = [
  { day: "Sen", value: 800000 },
  { day: "Sel", value: 1100000 },
  { day: "Rab", value: 1800000 },
  { day: "Kam", value: 600000 },
  { day: "Jum", value: 950000 },
  { day: "Sab", value: 700000 },
  { day: "Min", value: 400000 },
];

const transactions = [
  {
    title: "Reparasi Layar iPhone 13 Pro",
    time: "Hari ini, 14:30",
    amount: "+ Rp 1.500.000",
    positive: true,
    icon: <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />,
  },
  {
    title: "Ganti Baterai MacBook Air",
    time: "Kemarin, 09:15",
    amount: "+ Rp 1.200.000",
    positive: true,
    icon: <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />,
  },
  {
    title: "Penarikan Saldo",
    time: "2 hari lalu",
    amount: "- Rp 5.000.000",
    positive: false,
    icon: <ArrowDownLeft className="w-3.5 h-3.5 text-red-500" />,
  },
];

const chartConfig = {
  value: {
    label: "Pendapatan",
    color: "#2e8b57",
  },
};

export default function PendapatanPage() {
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawBank, setWithdrawBank] = useState("");

  function handleWithdraw() {
    if (!withdrawAmount || !withdrawBank) {
      toast.error("Mohon isi semua field.");
      return;
    }
    toast.success(`Penarikan Rp ${withdrawAmount} ke ${withdrawBank} berhasil diproses!`);
    setWithdrawOpen(false);
    setWithdrawAmount("");
    setWithdrawBank("");
  }

  return (
    <main className="p-8 font-sans">
      <FadeIn>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1d1d1f]">Pendapatan Saya</h1>
        <p className="text-sm text-[#86868b] mt-1">
          Pantau performa perbaikan dan kelola arus kas Anda dengan presisi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
        <div className="space-y-4">
          <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
            <CardContent className="relative z-10 p-6 space-y-5 flex flex-col h-full">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase mb-1">
                    Total Minggu Ini
                  </p>
                  <AnimatedNumber value={4250000} prefix="Rp " className="text-3xl font-bold text-[#1d1d1f]" />
                </div>
                <div className="flex bg-[#f2f3f5] rounded-xl p-1 gap-1">
                  {["Minggu Ini", "Bulan Ini"].map((label, i) => (
                    <button
                      key={label}
                      className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                        i === 0
                          ? "bg-white text-[#1d1d1f] shadow-sm"
                          : "text-[#86868b] hover:text-[#3f4941]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <ChartContainer config={chartConfig} className="h-full min-h-48 w-full flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={weeklyData}
                    barSize={28}
                    margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
                  >
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "#86868b" }}
                    />
                    <YAxis hide />
                    <ReferenceLine y={0} stroke="#e6e6ea" />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent
                          formatter={(value) =>
                            `Rp ${Number(value).toLocaleString("id-ID")}`
                          }
                        />
                      }
                    />
                    <Bar
                      dataKey="value"
                      fill="#2e8b57"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
            <CardContent className="relative z-10 p-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                  Saldo Tersedia
                </p>
              </div>
              <div>
                <AnimatedNumber value={8750000} prefix="Rp " className="text-3xl font-bold text-[#1d1d1f]" />
                <p className="text-xs text-[#86868b] mt-1">
                  Terakhir ditarik 2 hari lalu
                </p>
              </div>
              <Button
                className="w-full h-10 rounded-xl bg-emerald-700 hover:bg-emerald-800 font-semibold shadow-none text-sm"
                onClick={() => setWithdrawOpen(true)}
              >
                Tarik Saldo
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <CardContent className="p-5 space-y-1">
              <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase mb-3">
                Transaksi Terakhir
              </p>
              {transactions.map((t, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-3 py-2.5 border-b border-[#f2f3f5] last:border-0"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-[#f2f3f5] rounded-lg flex items-center justify-center mt-0.5 shrink-0">
                      {t.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1d1d1f] leading-snug">
                        {t.title}
                      </p>
                      <p className="text-[11px] text-[#86868b]">{t.time}</p>
                    </div>
                  </div>
                  <p
                    className={`text-xs font-bold shrink-0 ${
                      t.positive ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {t.amount}
                  </p>
                </div>
              ))}
              <button
                className="w-full text-center text-xs font-semibold text-emerald-600 hover:underline pt-2"
                onClick={() => toast.info("Fitur riwayat lengkap segera hadir!")}
              >
                Lihat Semua Riwayat →
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
        <DialogContent className="rounded-2xl max-w-sm">
          <DialogHeader>
            <DialogTitle>Tarik Saldo</DialogTitle>
            <DialogDescription>
              Masukkan jumlah penarikan dan rekening tujuan.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                Jumlah Penarikan
              </Label>
              <Input
                placeholder="Contoh: 5.000.000"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="rounded-xl border-[#e6e6ea]"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                Rekening Tujuan
              </Label>
              <Input
                placeholder="BCA - 1234567890"
                value={withdrawBank}
                onChange={(e) => setWithdrawBank(e.target.value)}
                className="rounded-xl border-[#e6e6ea]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setWithdrawOpen(false)} className="rounded-xl">
              Batal
            </Button>
            <Button onClick={handleWithdraw} className="rounded-xl bg-emerald-700 hover:bg-emerald-800">
              Tarik Sekarang
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </FadeIn>
    </main>
  );
}
