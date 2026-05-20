import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Waste",
  description:
    "Pelajari dampak limbah elektronik dan hitung jejak karbon Anda. ReparasiHub membantu mengurangi e-waste melalui perbaikan perangkat.",
};

export default function EwasteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
