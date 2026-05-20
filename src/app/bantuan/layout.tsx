import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bantuan",
  description:
    "Pusat bantuan ReparasiHub — temukan jawaban untuk pertanyaan seputar akun, servis, pembayaran, garansi, dan layanan e-waste.",
};

export default function BantuanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
