import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventaris",
  description:
    "Kelola inventaris suku cadang — pantau stok komponen, harga, dan dapatkan peringatan stok rendah untuk suku cadang perbaikan.",
};

export default function AppInventorisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
