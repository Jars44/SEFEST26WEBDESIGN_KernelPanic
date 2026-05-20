import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil",
  description:
    "Profil pengguna Anda — kelola informasi pribadi, lihat daftar perangkat, dan atur preferensi akun ReparasiHub.",
};

export default function UserProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
