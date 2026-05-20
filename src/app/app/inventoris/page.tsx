"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Smartphone,
  Battery,
  Plug,
  Camera,
  Search,
  Plus,
  AlertTriangle,
  Package,
  TrendingUp,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { AnimatedNumber } from "@/components/motion/animated-number";

const parts = [
  {
    name: "LCD iPhone 13 Pro Max",
    spec: "OLED Display, Original Part",
    category: "Layar",
    stock: 12,
    lowStock: false,
    price: "Rp 3.500.000",
    icon: <Smartphone className="w-4 h-4 text-[#86868b]" />,
  },
  {
    name: "Baterai MacBook Pro M1 2020",
    spec: "A2338, 58.2Wh",
    category: "Daya",
    stock: 2,
    lowStock: true,
    price: "Rp 1.200.000",
    icon: <Battery className="w-4 h-4 text-[#86868b]" />,
  },
  {
    name: "Konektor Charger Samsung S22 Ultra",
    spec: "Type-C Port Board",
    category: "Port",
    stock: 24,
    lowStock: false,
    price: "Rp 150.000",
    icon: <Plug className="w-4 h-4 text-[#86868b]" />,
  },
  {
    name: "Modul Kamera Belakang iPhone 12",
    spec: "Dual Lens, OEM",
    category: "Optik",
    stock: 5,
    lowStock: false,
    price: "Rp 850.000",
    icon: <Camera className="w-4 h-4 text-[#86868b]" />,
  },
];

const categoryColors: Record<string, string> = {
  Layar: "bg-blue-50 text-blue-600",
  Daya: "bg-yellow-50 text-yellow-600",
  Port: "bg-purple-50 text-purple-600",
  Optik: "bg-emerald-50 text-emerald-600",
};

export default function InventorisPage() {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editPart, setEditPart] = useState<typeof parts[0] | null>(null);
  const [addForm, setAddForm] = useState({ name: "", category: "", stock: "", price: "" });
  const [editForm, setEditForm] = useState({ name: "", stock: "", price: "" });

  function handleAdd() {
    if (!addForm.name || !addForm.category || !addForm.stock) {
      toast.error("Mohon isi field yang wajib.");
      return;
    }
    toast.success(`${addForm.name} berhasil ditambahkan ke inventaris!`);
    setAddOpen(false);
    setAddForm({ name: "", category: "", stock: "", price: "" });
  }

  function handleEdit() {
    toast.success(`Stok ${editForm.name} berhasil diperbarui!`);
    setEditOpen(false);
    setEditPart(null);
  }

  function openEdit(part: typeof parts[0]) {
    setEditPart(part);
    setEditForm({ name: part.name, stock: String(part.stock), price: part.price });
    setEditOpen(true);
  }

  return (
    <main className="p-8 font-sans">
      <FadeIn>
      <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1d1d1f]">
            Manajemen Sparepart
          </h1>
          <p className="text-sm text-[#86868b] mt-1">
            Kelola stok dan harga modal komponen perbaikan Anda.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
            <Input
              placeholder="Cari komponen..."
              className="pl-9 h-10 rounded-xl border-[#e6e6ea] bg-white w-52 text-sm focus-visible:ring-emerald-500/30"
            />
          </div>
          <Button
            className="h-10 rounded-xl bg-[#1d1d1f] hover:bg-[#3f4941] text-white font-semibold shadow-none gap-2 text-sm"
            onClick={() => setAddOpen(true)}
          >
            <Plus className="w-4 h-4" />
            Tambah Stok
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          {
            label: "Total Komponen",
            value: <AnimatedNumber value={142} className="text-3xl font-bold leading-none text-[#1d1d1f]" />,
            icon: <Package className="w-4 h-4 text-emerald-600" />,
            bg: "bg-emerald-50",
          },
          {
            label: "Stok Menipis",
            value: <AnimatedNumber value={8} className="text-3xl font-bold leading-none text-orange-500" />,
            icon: <AlertTriangle className="w-4 h-4 text-orange-500" />,
            bg: "bg-orange-50",
          },
          {
            label: "Nilai Inventaris",
            value: "Rp 45.2M",
            icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
            bg: "bg-emerald-50",
          },
        ].map((s) => (
          <Card
            key={s.label}
            className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white"
          >
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 rounded-full" />
            <CardContent className="relative z-10 p-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase mb-1">
                  {s.label}
                </p>
                {typeof s.value === "string" ? (
                  <p className="text-3xl font-bold leading-none text-[#1d1d1f]">
                    {s.value}
                  </p>
                ) : (
                  s.value
                )}
              </div>
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.bg}`}
              >
                {s.icon}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
        <CardContent className="p-0 overflow-x-auto">
          <div className="min-w-[600px] grid grid-cols-[1fr_120px_80px_140px_80px] gap-4 px-6 py-3 border-b border-[#f2f3f5]">
            {["Nama Komponen", "Kategori", "Stok", "Harga Modal", "Aksi"].map(
              (h) => (
                <p
                  key={h}
                  className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase"
                >
                  {h}
                </p>
              )
            )}
          </div>

          {parts.map((p, i) => (
            <div
              key={i}
              className="min-w-[600px] grid grid-cols-[1fr_120px_80px_140px_80px] gap-4 px-6 py-4 border-b border-[#f2f3f5] last:border-0 items-center hover:bg-[#fbfbfd] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 bg-[#f2f3f5] rounded-xl flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#1d1d1f] truncate">
                    {p.name}
                  </p>
                  <p className="text-xs text-[#86868b] truncate">{p.spec}</p>
                </div>
              </div>

              <Badge
                className={`text-[10px] font-semibold rounded-full px-3 py-1 border-0 w-fit ${categoryColors[p.category] ?? "bg-slate-100 text-slate-600"}`}
              >
                {p.category}
              </Badge>

              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${p.lowStock ? "bg-red-400" : "bg-emerald-400"}`}
                />
                <span
                  className={`text-sm font-bold ${p.lowStock ? "text-red-500" : "text-[#1d1d1f]"}`}
                >
                  {p.stock}
                </span>
              </div>

              <p className="text-sm font-semibold text-[#1d1d1f]">{p.price}</p>

              <button
                className="text-xs font-semibold text-emerald-600 hover:underline text-left"
                onClick={() => openEdit(p)}
              >
                Edit
              </button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="rounded-2xl max-w-sm">
          <DialogHeader>
            <DialogTitle>Tambah Komponen Baru</DialogTitle>
            <DialogDescription>Isi detail komponen yang ingin ditambahkan.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Nama Komponen</Label>
              <Input placeholder="LCD iPhone 14 Pro" value={addForm.name} onChange={(e) => setAddForm({ ...addForm, name: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Kategori</Label>
              <Select value={addForm.category} onValueChange={(val) => setAddForm({ ...addForm, category: val })}>
                <SelectTrigger className="rounded-xl border-[#e6e6ea]"><SelectValue placeholder="Pilih kategori" /></SelectTrigger>
                <SelectContent>
                  {["Layar", "Daya", "Port", "Optik"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Stok</Label>
                <Input type="number" placeholder="10" value={addForm.stock} onChange={(e) => setAddForm({ ...addForm, stock: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Harga Modal</Label>
                <Input placeholder="Rp 1.000.000" value={addForm.price} onChange={(e) => setAddForm({ ...addForm, price: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddOpen(false)} className="rounded-xl">Batal</Button>
            <Button onClick={handleAdd} className="rounded-xl bg-emerald-700 hover:bg-emerald-800">Tambah</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="rounded-2xl max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit Komponen</DialogTitle>
            <DialogDescription>Perbarui stok dan harga {editPart?.name}.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Nama Komponen</Label>
              <Input value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Stok</Label>
                <Input type="number" value={editForm.stock} onChange={(e) => setEditForm({ ...editForm, stock: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Harga Modal</Label>
                <Input value={editForm.price} onChange={(e) => setEditForm({ ...editForm, price: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditOpen(false)} className="rounded-xl">Batal</Button>
            <Button onClick={handleEdit} className="rounded-xl bg-emerald-700 hover:bg-emerald-800">Simpan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </FadeIn>
    </main>
  );
}
