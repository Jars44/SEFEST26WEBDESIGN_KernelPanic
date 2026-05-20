import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pendapatan",
  description:
    "Pantau pendapatan servis Anda — grafik harian, saldo tersedia, riwayat penarikan, dan transaksi terbaru.",
};

export default function AppPendapatanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
