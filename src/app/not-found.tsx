import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] font-sans flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <p className="text-8xl font-bold text-emerald-600 tracking-tighter">404</p>
          <h1 className="text-2xl font-bold text-[#1d1d1f]">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-[#86868b] leading-relaxed">
            Sepertinya halaman yang Anda cari sudah dipindahkan atau tidak tersedia.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            className="rounded-xl h-11 px-5 border-[#e6e6ea] text-[#3f4941] font-semibold gap-2"
            asChild
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              Beranda
            </Link>
          </Button>
          <Button
            className="rounded-xl h-11 px-5 bg-emerald-700 hover:bg-emerald-800 font-semibold gap-2"
            asChild
          >
            <Link href="/bantuan">
              Butuh Bantuan?
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
