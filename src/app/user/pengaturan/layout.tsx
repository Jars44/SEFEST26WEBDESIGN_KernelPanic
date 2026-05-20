import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pengaturan",
  description:
    "Konfigurasi akun pengguna Anda — atur preferensi notifikasi, keamanan, dan pengaturan akun lainnya.",
};

export default function UserPengaturanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
