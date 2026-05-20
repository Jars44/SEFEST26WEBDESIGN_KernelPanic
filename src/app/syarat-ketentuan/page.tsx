import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan - ReparasiHub",
  description: "Syarat dan ketentuan penggunaan layanan ReparasiHub.",
};

const sections = [
  {
    id: "pendahuluan",
    title: "1. Pendahuluan",
    content: (
      <>
        <p className="text-[#3f4941] leading-relaxed mb-4">
          Selamat datang di ReparasiHub. Syarat dan ketentuan ini mengatur
          penggunaan layanan perbaikan perangkat elektronik yang disediakan oleh
          ReparasiHub. Dengan mengakses atau menggunakan layanan kami, Anda
          menyetujui untuk terikat oleh syarat dan ketentuan ini secara
          keseluruhan.
        </p>
        <p className="text-[#3f4941] leading-relaxed">
          Harap membaca dengan seksama sebelum mengajukan permintaan layanan.
          Jika Anda tidak menyetujui bagian mana pun dari syarat ini, Anda tidak
          diperkenankan untuk menggunakan layanan kami.
        </p>
      </>
    ),
  },
  {
    id: "layanan-reparasi",
    title: "2. Layanan Reparasi",
    content: (
      <>
        <p className="text-[#3f4941] leading-relaxed mb-4">
          ReparasiHub menyediakan layanan perbaikan untuk berbagai perangkat
          elektronik termasuk namun tidak terbatas pada smartphone, tablet,
          laptop, dan konsol game. Estimasi waktu dan biaya perbaikan akan
          diberikan setelah teknisi kami melakukan diagnosis awal.
        </p>
        <ul className="space-y-3">
          {[
            "Diagnosis awal mungkin dikenakan biaya standar yang akan diinformasikan sebelumnya.",
            "Kami berhak menolak perbaikan jika perangkat dinilai rusak secara permanen atau telah dimodifikasi oleh pihak ketiga yang tidak sah.",
            "Suku cadang yang digunakan adalah kualitas original atau OEM terbaik yang tersedia.",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-2 text-[#3f4941] text-sm leading-relaxed"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "garansi-jaminan",
    title: "3. Garansi & Jaminan",
    content: (
      <>
        <p className="text-[#3f4941] leading-relaxed mb-4">
          Kami memberikan garansi terbatas pada setiap perbaikan yang berhasil
          diselesaikan. Jangka waktu garansi bervariasi tergantung pada jenis
          perbaikan dan suku cadang yang diganti, umumnya berkisar antara 30
          hingga 90 hari.
        </p>
        <p className="text-[#3f4941] leading-relaxed font-semibold text-[#1d1d1f] mb-3">
          Garansi tidak berlaku jika:
        </p>
        <ul className="space-y-3">
          {[
            "Terjadi kerusakan akibat kelalaian pengguna (jatuh, terkena air, dll) setelah perbaikan.",
            "Segel garansi ReparasiHub rusak atau hilang.",
            "Perangkat dibuka atau diperbaiki oleh pihak lain selain teknisi ReparasiHub selama masa garansi.",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-2 text-[#3f4941] text-sm leading-relaxed"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "pembayaran",
    title: "4. Pembayaran",
    content: (
      <p className="text-[#3f4941] leading-relaxed">
        Pembayaran penuh wajib dilakukan setelah perbaikan selesai dan sebelum
        perangkat diserahkan kembali kepada pelanggan. Kami menerima berbagai
        metode pembayaran termasuk transfer bank, kartu kredit/debit, dan dompet
        digital yang didukung.
      </p>
    ),
  },
  {
    id: "batasan-tanggung-jawab",
    title: "5. Batasan Tanggung Jawab",
    content: (
      <p className="text-[#3f4941] leading-relaxed">
        Pelanggan bertanggung jawab untuk mencadangkan (backup) seluruh data
        sebelum menyerahkan perangkat. ReparasiHub tidak bertanggung jawab atas
        kehilangan data, aplikasi, atau informasi yang tersimpan dalam perangkat
        selama proses perbaikan berlangsung.
      </p>
    ),
  },
];

export default function SyaratKetentuanPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen font-sans">
      <section className="pt-20 pb-12 px-6 text-center space-y-3 border-b border-[#e6e6ea]">
        <h1 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">
          Syarat &amp; Ketentuan
        </h1>
        <p className="text-sm text-[#86868b]">
          Terakhir Diperbarui: 1 Mei 2026
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 items-start">
        <aside className="hidden md:block sticky top-24 self-start">
          <p className="text-xs font-bold text-[#86868b] tracking-widest uppercase mb-4">
            Daftar Isi
          </p>
          <nav className="space-y-1">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-sm text-[#3f4941] hover:text-emerald-600 py-1 transition-colors"
              >
                {i + 1}. {s.title.replace(/^\d+\.\s/, "")}
              </a>
            ))}
          </nav>
        </aside>

        <article className="space-y-2">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white rounded-2xl border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-8 md:p-10 scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-5">
                {section.title}
              </h2>
              {section.content}
            </div>
          ))}
        </article>
      </div>
    </main>
  );
}
