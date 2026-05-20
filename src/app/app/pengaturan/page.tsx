import PengaturanContent from "@/components/settings/PengaturanContent";

export default function PengaturanPage() {
  return (
    <main className="p-8 font-sans">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1d1d1f]">Pengaturan</h1>
        <p className="text-sm text-[#86868b] mt-1">Konfigurasi preferensi Anda.</p>
      </div>
      <PengaturanContent />
    </main>
  );
}
