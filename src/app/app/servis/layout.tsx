import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proses Servis",
  description:
    "Kelola pesanan servis masuk — lihat permintaan menunggu, proses perbaikan, dan riwayat servis selesai di papan Kanban.",
};

export default function AppServisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
