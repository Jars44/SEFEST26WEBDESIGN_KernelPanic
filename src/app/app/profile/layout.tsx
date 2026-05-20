import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Teknisi",
  description:
    "Profil teknisi Anda — kelola informasi pribadi, lihat statistik dampak lingkungan, dan atur preferensi akun.",
};

export default function AppProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
