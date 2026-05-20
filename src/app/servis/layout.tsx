import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servis Perangkat",
  description:
    "Servis perangkat Anda dalam 3 langkah mudah — pilih perangkat, tentukan masalah, dan dapatkan teknisi SMK bersertifikat. Garansi terjamin.",
};

export default function ServisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
