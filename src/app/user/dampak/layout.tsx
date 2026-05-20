import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jejak Hijau",
  description:
    "Lihat dampak lingkungan Anda — jumlah CO2 yang dicegah, e-waste yang dikurangi, dan level Pahlawan Bumi Anda.",
};

export default function UserDampakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
