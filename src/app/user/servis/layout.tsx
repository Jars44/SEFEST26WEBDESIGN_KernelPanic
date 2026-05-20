import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riwayat Servis",
  description:
    "Riwayat transaksi perbaikan Anda — lihat pesanan selesai, unduh invoice, dan hitung total penghematan Anda.",
};

export default function UserServisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
