import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar",
  description:
    "Daftar akun ReparasiHub — daftar sebagai pengguna untuk memperbaiki perangkat atau sebagai teknisi SMK untuk menerima pesanan servis.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
