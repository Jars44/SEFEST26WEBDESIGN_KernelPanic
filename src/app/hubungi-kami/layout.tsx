import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi tim ReparasiHub melalui WhatsApp, email, atau kunjungi kantor kami di Malang, Jawa Timur. Kami siap membantu Anda.",
};

export default function HubungiKamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
