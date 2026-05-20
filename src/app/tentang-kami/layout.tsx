import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali ReparasiHub — misi kami memperpanjang umur perangkat, mengurangi e-waste, dan memberdayakan bakat teknisi SMK bersertifikat di seluruh Indonesia.",
};

export default function TentangKamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
