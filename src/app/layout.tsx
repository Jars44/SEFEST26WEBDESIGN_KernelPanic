import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ConditionalShell from "@/components/layouts/ConditionalShell";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ReparasiHub",
    default: "ReparasiHub",
  },
  description:
    "Platform perbaikan perangkat yang menghubungkan Anda dengan teknisi SMK bersertifikat. Servis transparan, harga terjangkau, garansi terjamin.",
  keywords: [
    "servis perangkat",
    "perbaikan gadget",
    "teknisi SMK",
    "e-waste",
    "ReparasiHub",
  ],
  openGraph: {
    title: "ReparasiHub",
    description:
      "Jangan dibuang, mari perbaiki. Hubungkan dengan teknisi SMK bersertifikat untuk servis perangkat transparan dan terjangkau.",
    siteName: "ReparasiHub",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ConditionalShell>
          {children}
        </ConditionalShell>
        <Toaster />
      </body>
    </html>
  );
}
