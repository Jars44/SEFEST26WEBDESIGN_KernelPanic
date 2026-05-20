import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lacak Pesanan",
  description:
    "Lacak status perbaikan perangkat Anda secara real-time. Lihat posisi teknisi, tahap servis, dan estimasi waktu selesai.",
};

export default function TrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
