import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pengaturan",
  description:
    "Konfigurasi akun teknisi Anda — atur preferensi notifikasi, keamanan, dan pengaturan akun lainnya.",
};

export default function AppPengaturanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
