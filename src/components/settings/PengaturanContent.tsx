"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Globe, Bell, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PengaturanContent() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("id");
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("reparasihub-theme");
    if (savedTheme) setTheme(savedTheme);
    const savedLang = localStorage.getItem("reparasihub-language");
    if (savedLang) setLanguage(savedLang);
    const savedEmail = localStorage.getItem("reparasihub-notif-email");
    if (savedEmail !== null) setEmailNotif(savedEmail === "true");
    const savedPush = localStorage.getItem("reparasihub-notif-push");
    if (savedPush !== null) setPushNotif(savedPush === "true");
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("reparasihub-theme", theme);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("reparasihub-language", language);
    }
  }, [language, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("reparasihub-notif-email", String(emailNotif));
    }
  }, [emailNotif, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("reparasihub-notif-push", String(pushNotif));
    }
  }, [pushNotif, mounted]);

  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="h-32 bg-white rounded-2xl border border-[#e6e6ea]" />
        <div className="h-24 bg-white rounded-2xl border border-[#e6e6ea]" />
        <div className="h-32 bg-white rounded-2xl border border-[#e6e6ea]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-1">
            <Sun className="w-5 h-5 text-[#86868b]" />
            <h2 className="text-base font-bold text-[#1d1d1f]">
              Tampilan
            </h2>
          </div>
          <p className="text-sm text-[#86868b] mb-5 ml-8">
            Pilih tema tampilan yang Anda inginkan.
          </p>
          <div className="flex gap-2 ml-8">
            {[
              { value: "light", label: "Terang", icon: Sun },
              { value: "dark", label: "Gelap", icon: Moon },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setTheme(opt.value)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                  theme === opt.value
                    ? "bg-[#2e8b57] text-white shadow-sm"
                    : "bg-[#f2f3f5] text-[#3f4941] hover:bg-[#e6e6ea]",
                )}
              >
                <opt.icon className="w-4 h-4" />
                {opt.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-1">
            <Globe className="w-5 h-5 text-[#86868b]" />
            <h2 className="text-base font-bold text-[#1d1d1f]">
              Bahasa
            </h2>
          </div>
          <p className="text-sm text-[#86868b] mb-5 ml-8">
            Pilih bahasa untuk antarmuka aplikasi.
          </p>
          <div className="flex gap-2 ml-8">
            {[
              { value: "id", label: "Indonesia", flag: "🇮🇩" },
              { value: "en", label: "English", flag: "🇬🇧" },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setLanguage(opt.value)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                  language === opt.value
                    ? "bg-[#2e8b57] text-white shadow-sm"
                    : "bg-[#f2f3f5] text-[#3f4941] hover:bg-[#e6e6ea]",
                )}
              >
                <span className="text-base">{opt.flag}</span>
                {opt.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-2xl bg-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-1">
            <Bell className="w-5 h-5 text-[#86868b]" />
            <h2 className="text-base font-bold text-[#1d1d1f]">
              Notifikasi
            </h2>
          </div>
          <p className="text-sm text-[#86868b] mb-5 ml-8">
            Atur preferensi notifikasi Anda.
          </p>
          <div className="space-y-4 ml-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#86868b]" />
                <div>
                  <p className="text-sm font-medium text-[#1d1d1f]">
                    Notifikasi Email
                  </p>
                  <p className="text-xs text-[#86868b]">
                    Terima pemberitahuan melalui email.
                  </p>
                </div>
              </div>
              <Switch
                checked={emailNotif}
                onCheckedChange={setEmailNotif}
              />
            </div>
            <div className="w-full h-px bg-[#f2f3f5]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-[#86868b]" />
                <div>
                  <p className="text-sm font-medium text-[#1d1d1f]">
                    Push Notification
                  </p>
                  <p className="text-xs text-[#86868b]">
                    Terima pemberitahuan langsung di perangkat.
                  </p>
                </div>
              </div>
              <Switch
                checked={pushNotif}
                onCheckedChange={setPushNotif}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
