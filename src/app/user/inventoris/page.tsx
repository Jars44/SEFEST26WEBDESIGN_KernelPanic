"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, Laptop, Tablet, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion/fade-in";

const devices = [
  {
    name: "iPhone 13 Pro",
    spec: "Sierra Blue, 256GB",
    status: "SEHAT",
    statusColor: "bg-emerald-100 text-emerald-700",
    meta: { label: "Terakhir diperiksa:", value: "Hari ini", valueColor: "text-[#1d1d1f] font-semibold" },
    icon: <Smartphone className="w-6 h-6 text-[#86868b]" />,
  },
  {
    name: "MacBook Air M1",
    spec: "Space Gray, 8GB/512GB",
    status: "BUTUH SERVIS",
    statusColor: "bg-orange-100 text-orange-600",
    meta: { label: "Isu terdeteksi:", value: "Baterai (79%)", valueColor: "text-red-500 font-semibold" },
    icon: <Laptop className="w-6 h-6 text-[#86868b]" />,
  },
  {
    name: 'iPad Pro 11"',
    spec: "Silver, 3rd Gen",
    status: "SEHAT",
    statusColor: "bg-emerald-100 text-emerald-700",
    meta: { label: "Terakhir diperiksa:", value: "12 Okt 2023", valueColor: "text-[#1d1d1f] font-semibold" },
    icon: <Tablet className="w-6 h-6 text-[#86868b]" />,
  },
];

export default function UserInventorisPage() {
  const [addOpen, setAddOpen] = useState(false);
  const [deviceForm, setDeviceForm] = useState({ name: "", type: "", spec: "" });

  function handleAdd() {
    if (!deviceForm.name) {
      toast.error("Mohon isi nama perangkat.");
      return;
    }
    toast.success(`${deviceForm.name} berhasil ditambahkan!`);
    setAddOpen(false);
    setDeviceForm({ name: "", type: "", spec: "" });
  }

  return (
    <main className="p-8 font-sans">
      <FadeIn>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1d1d1f]">Gadget Saya</h1>
          <p className="text-sm text-[#86868b] mt-1">
            Inventaris perangkat keras dan status diagnostik.
          </p>
        </div>
        <Button
          className="h-10 rounded-xl bg-[#1d1d1f] hover:bg-[#3f4941] text-white font-semibold shadow-none gap-2"
          onClick={() => setAddOpen(true)}
        >
          <Plus className="w-4 h-4" />
          Tambah Perangkat
        </Button>
      </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {devices.map((d, i) => (
          <FadeInItem key={i}>
          <Card
            className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white cursor-pointer hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-[#f2f3f5] rounded-xl flex items-center justify-center">
                  {d.icon}
                </div>
                <Badge className={`text-[10px] font-bold tracking-wide rounded-full px-3 py-1 border-0 ${d.statusColor}`}>
                  {d.status}
                </Badge>
              </div>
              <div>
                <p className="font-bold text-[#1d1d1f] text-base">{d.name}</p>
                <p className="text-xs text-[#86868b] mt-0.5">{d.spec}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#86868b]">
                <span>{d.meta.label}</span>
                <span className={d.meta.valueColor}>{d.meta.value}</span>
              </div>
            </CardContent>
          </Card>
          </FadeInItem>
        ))}

        <FadeInItem>
        <Card
          className="border-2 border-dashed border-[#e6e6ea] rounded-2xl bg-transparent cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/30 transition-all group"
          onClick={() => setAddOpen(true)}
        >
          <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[160px] gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#86868b] group-hover:border-emerald-500 flex items-center justify-center transition-colors">
              <Plus className="w-5 h-5 text-[#86868b] group-hover:text-emerald-600 transition-colors" />
            </div>
            <p className="text-sm font-semibold text-emerald-600">
              Daftarkan Perangkat Baru
            </p>
          </CardContent>
        </Card>
        </FadeInItem>
      </FadeInStagger>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="rounded-2xl max-w-sm">
          <DialogHeader>
            <DialogTitle>Tambah Perangkat</DialogTitle>
            <DialogDescription>Daftarkan perangkat baru ke inventaris Anda.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Nama Perangkat</Label>
              <Input placeholder="iPhone 15 Pro Max" value={deviceForm.name} onChange={(e) => setDeviceForm({ ...deviceForm, name: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Tipe</Label>
              <Select value={deviceForm.type} onValueChange={(val) => setDeviceForm({ ...deviceForm, type: val })}>
                <SelectTrigger className="rounded-xl border-[#e6e6ea]"><SelectValue placeholder="Pilih tipe" /></SelectTrigger>
                <SelectContent>
                  {["Smartphone", "Laptop", "Tablet", "Camera", "Lainnya"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Spesifikasi</Label>
              <Input placeholder="Sierra Blue, 256GB" value={deviceForm.spec} onChange={(e) => setDeviceForm({ ...deviceForm, spec: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddOpen(false)} className="rounded-xl">Batal</Button>
            <Button onClick={handleAdd} className="rounded-xl bg-emerald-700 hover:bg-emerald-800">Tambah</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
