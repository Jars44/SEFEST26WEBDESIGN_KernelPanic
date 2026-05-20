import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi ReparasiHub — pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
};

export default function KebijakanPrivasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
