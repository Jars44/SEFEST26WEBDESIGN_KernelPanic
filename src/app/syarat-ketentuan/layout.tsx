import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan ReparasiHub — ketentuan layanan servis, garansi, pembayaran, dan batasan tanggung jawab.",
};

export default function SyaratKetentuanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
