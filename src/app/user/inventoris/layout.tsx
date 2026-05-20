import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gadget Saya",
  description:
    "Daftarkan dan kelola perangkat Anda — pantau status kesehatan gadget, riwayat servis, dan daftarkan perangkat baru.",
};

export default function UserInventorisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
