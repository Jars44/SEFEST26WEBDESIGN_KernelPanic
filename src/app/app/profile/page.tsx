"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ShieldCheck,
  Bell,
  Globe,
  ChevronRight,
  Plus,
  Smartphone,
  Laptop,
} from "lucide-react";
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
import { FadeIn } from "@/components/motion/fade-in";

const devices = [
  {
    name: "iPhone 13 Pro",
    detail: "Battery Replacement",
    status: "IN SHOP",
    statusColor: "bg-yellow-100 text-yellow-700",
    icon: <Smartphone className="w-4 h-4 text-[#86868b]" />,
  },
  {
    name: "MacBook Air M1",
    detail: "Screen Repair",
    status: "DONE",
    statusColor: "bg-emerald-100 text-emerald-700",
    icon: <Laptop className="w-4 h-4 text-[#86868b]" />,
  },
];

const accountSettings = [
  { label: "Password & Security", icon: <ShieldCheck className="w-4 h-4 text-[#86868b]" />, value: null },
  { label: "Notification Preferences", icon: <Bell className="w-4 h-4 text-[#86868b]" />, value: null },
  { label: "Language & Region", icon: <Globe className="w-4 h-4 text-[#86868b]" />, value: "English (US)" },
];

export default function ProfilePage() {
  const [editOpen, setEditOpen] = useState(false);
  const [addDeviceOpen, setAddDeviceOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "Fajar Maulid",
    email: "fajar.maulid@reparasihub.raiylake.dev",
    phone: "+62 812-3456-7890",
    location: "Malang, Jawa Timur",
  });
  const [deviceForm, setDeviceForm] = useState({ name: "", type: "" });

  function handleEditProfile() {
    toast.success("Profil berhasil diperbarui!");
    setEditOpen(false);
  }

  function handleAddDevice() {
    if (!deviceForm.name) {
      toast.error("Mohon isi nama perangkat.");
      return;
    }
    toast.success(`${deviceForm.name} ditambahkan ke daftar perangkat!`);
    setAddDeviceOpen(false);
    setDeviceForm({ name: "", type: "" });
  }

  return (
    <main className="p-8 space-y-6 font-sans w-full">
      <FadeIn>
      <div className="flex items-start gap-6 mb-8">
        <div className="relative">
          <Avatar className="w-20 h-20">
            <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold text-2xl">
              FM
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-1 pt-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-[#1d1d1f]">Fajar Maulid</h1>
            <Badge className="bg-emerald-50 text-emerald-700 border-0 text-[10px] font-bold tracking-wide rounded-full px-3">
              MEMBER SINCE 2021
            </Badge>
          </div>
          <p className="text-sm text-[#86868b] max-w-sm leading-relaxed">
            Senior Repair Specialist focusing on micro-soldering and high-end
            device recovery.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6">
        <div className="space-y-6">
          <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-[#1d1d1f]">
                  Personal Information
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-emerald-600 font-semibold text-sm h-auto py-1 px-2 hover:bg-emerald-50"
                  onClick={() => setEditOpen(true)}
                >
                  Edit
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: "FULL NAME", value: editForm.name },
                  { label: "EMAIL ADDRESS", value: editForm.email },
                  { label: "PHONE NUMBER", value: editForm.phone },
                  { label: "LOCATION", value: editForm.location },
                ].map((field) => (
                  <div key={field.label}>
                    <p className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase mb-1">
                      {field.label}
                    </p>
                    <p className="text-sm text-[#1d1d1f] font-medium break-all">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-[#1d1d1f]">
                  My Devices
                </h2>
                <button
                  className="w-7 h-7 rounded-full bg-[#f2f3f5] flex items-center justify-center hover:bg-emerald-50 transition-colors"
                  onClick={() => setAddDeviceOpen(true)}
                >
                  <Plus className="w-4 h-4 text-[#3f4941]" />
                </button>
              </div>
              <div className="space-y-3">
                {devices.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-[#f2f3f5] last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#f2f3f5] rounded-xl flex items-center justify-center">
                        {d.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1d1d1f]">
                          {d.name}
                        </p>
                        <p className="text-xs text-[#86868b]">{d.detail}</p>
                      </div>
                    </div>
                    <Badge
                      className={`text-[10px] font-bold tracking-wide rounded-full px-3 py-1 border-0 ${d.statusColor}`}
                    >
                      {d.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="relative overflow-hidden border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
            <CardContent className="relative z-10 p-6">
              <h2 className="text-base font-bold text-[#1d1d1f] mb-5">
                Impact Stats
              </h2>
              <div className="space-y-5">
                <div>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold text-[#1d1d1f] leading-none">
                      124
                    </span>
                    <span className="text-lg font-bold text-[#86868b] mb-1">
                      kg
                    </span>
                  </div>
                  <p className="text-xs text-[#86868b] mt-1 font-medium">
                    CO2 Saved
                  </p>
                </div>
                <div className="w-full h-px bg-[#f2f3f5]" />
                <div>
                  <span className="text-5xl font-bold text-[#1d1d1f] leading-none">
                    342
                  </span>
                  <p className="text-xs text-[#86868b] mt-1 font-medium">
                    Devices Repaired
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
            <CardContent className="p-6">
              <h2 className="text-base font-bold text-[#1d1d1f] mb-4">
                Account Settings
              </h2>
              <div className="space-y-1">
                {accountSettings.map((s) => (
                  <button
                    key={s.label}
                    className="w-full flex items-center justify-between py-3 px-1 rounded-xl hover:bg-[#f2f3f5] transition-colors group"
                    onClick={() => toast.info(`${s.label} — fitur segera hadir`)}
                  >
                    <div className="flex items-center gap-3">
                      {s.icon}
                      <span className="text-sm text-[#1d1d1f] font-medium">
                        {s.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {s.value && (
                        <span className="text-xs text-[#86868b]">
                          {s.value}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-[#86868b]" />
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="rounded-2xl max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit Profil</DialogTitle>
            <DialogDescription>Perbarui informasi pribadi Anda.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Nama Lengkap</Label>
              <Input value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Email</Label>
              <Input value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Telepon</Label>
              <Input value={editForm.phone} onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Lokasi</Label>
              <Input value={editForm.location} onChange={(e) => setEditForm({ ...editForm, location: e.target.value })} className="rounded-xl border-[#e6e6ea]" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditOpen(false)} className="rounded-xl">Batal</Button>
            <Button onClick={handleEditProfile} className="rounded-xl bg-emerald-700 hover:bg-emerald-800">Simpan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={addDeviceOpen} onOpenChange={setAddDeviceOpen}>
        <DialogContent className="rounded-2xl max-w-sm">
          <DialogHeader>
            <DialogTitle>Tambah Perangkat</DialogTitle>
            <DialogDescription>Tambahkan perangkat baru ke daftar Anda.</DialogDescription>
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
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddDeviceOpen(false)} className="rounded-xl">Batal</Button>
            <Button onClick={handleAddDevice} className="rounded-xl bg-emerald-700 hover:bg-emerald-800">Tambah</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </FadeIn>
    </main>
  );
}
