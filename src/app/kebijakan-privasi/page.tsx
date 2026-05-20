import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - ReparasiHub",
  description: "Kebijakan privasi dan perlindungan data pengguna ReparasiHub.",
};

const sections = [
  {
    id: "pengumpulan-data",
    title: "1. Pengumpulan Data",
    content: (
      <>
        <p className="text-[#3f4941] leading-relaxed mb-4">
          Kami mengumpulkan informasi yang Anda berikan secara langsung kepada
          kami saat Anda membuat akun, meminta layanan perbaikan, atau
          berkomunikasi dengan tim dukungan kami. Ini termasuk tetapi tidak
          terbatas pada:
        </p>
        <ul className="space-y-3">
          {[
            {
              label: "Informasi Kontak:",
              desc: "Nama lengkap, alamat email, dan nomor telepon.",
            },
            {
              label: "Detail Perangkat:",
              desc: "Nomor seri, riwayat perbaikan, dan spesifikasi teknis perangkat yang Anda serahkan.",
            },
            {
              label: "Data Diagnostik:",
              desc: "Log sistem dasar yang diperlukan untuk mengenali kerusakan perangkat keras.",
            },
          ].map((item) => (
            <li key={item.label} className="flex gap-2 text-[#3f4941] text-sm leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <span>
                <span className="font-semibold text-[#1d1d1f]">{item.label}</span>{" "}
                {item.desc}
              </span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "penggunaan-informasi",
    title: "2. Penggunaan Informasi",
    content: (
      <>
        <p className="text-[#3f4941] leading-relaxed mb-4">
          Informasi yang kami kumpulkan digunakan secara eksklusif untuk tujuan
          operasional yang terkait dengan layanan kami:
        </p>
        <ul className="space-y-3">
          {[
            "Menyediakan layanan perbaikan yang presisi dan pembaruan status waktu nyata.",
            "Memproses transaksi pembayaran dengan aman melalui gateway bersertifikasi.",
            "Meningkatkan algoritma diagnostik internal kami (secara anonim).",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-[#3f4941] text-sm leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "berbagi-informasi",
    title: "3. Berbagi Informasi",
    content: (
      <p className="text-[#3f4941] leading-relaxed">
        Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda
        kepada pihak ketiga untuk tujuan pemasaran. Data Anda hanya dapat
        dibagikan kepada teknisi yang ditugaskan untuk menangani perangkat Anda,
        atau kepada penyedia layanan pembayaran yang terikat perjanjian
        kerahasiaan ketat dengan kami.
      </p>
    ),
  },
  {
    id: "keamanan-data",
    title: "4. Keamanan Data",
    content: (
      <p className="text-[#3f4941] leading-relaxed">
        Kami menerapkan infrastruktur keamanan tingkat lanjut untuk melindungi
        data Anda. Semua komunikasi dienkripsi menggunakan protokol industri
        standar. Kami membatasi akses ke data pribadi Anda hanya kepada teknisi
        dan personel yang membutuhkan informasi tersebut untuk memproses
        perbaikan Anda.
      </p>
    ),
  },
  {
    id: "hak-anda",
    title: "5. Hak Anda",
    content: (
      <>
        <p className="text-[#3f4941] leading-relaxed mb-4">
          Anda memiliki kendali penuh atas informasi pribadi Anda. Berdasarkan
          hukum yang berlaku, Anda berhak untuk:
        </p>
        <ul className="space-y-3">
          {[
            "Mengakses dan meminta salinan data pribadi yang kami simpan.",
            "Meminta koreksi atau pembaruan informasi yang tidak akurat.",
            "Meminta penghapusan permanen data Anda dari sistem kami (Right to be Forgotten).",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-[#3f4941] text-sm leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "hubungi-kami",
    title: "6. Hubungi Kami",
    content: (
      <p className="text-[#3f4941] leading-relaxed">
        Jika Anda memiliki pertanyaan atau kekhawatiran mengenai kebijakan
        privasi ini, silakan hubungi tim privasi kami melalui email di{" "}
        <a
          href="mailto:privasi@reparasihub.id"
          className="text-emerald-600 font-medium hover:underline"
        >
          privasi@reparasihub.id
        </a>
        . Kami berkomitmen untuk merespons setiap permintaan dalam waktu 3 hari
        kerja.
      </p>
    ),
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen font-sans">
      <section className="pt-20 pb-12 px-6 text-center space-y-3 border-b border-[#e6e6ea]">
        <h1 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">
          Kebijakan Privasi
        </h1>
        <p className="text-sm text-[#86868b]">Terakhir Diperbarui: 1 Mei 2026</p>
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
          <div className="bg-white rounded-2xl border border-[#e6e6ea] shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-8 md:p-10 mb-8">
            <p className="text-[#3f4941] leading-relaxed">
              Selamat datang di Kebijakan Privasi ReparasiHub. Kami berkomitmen
              untuk melindungi privasi dan keamanan data Anda dengan tingkat
              ketelitian yang sama seperti yang kami terapkan dalam perbaikan
              perangkat elektronik Anda. Dokumen ini menjelaskan bagaimana kami
              mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda
              saat menggunakan layanan kami.
            </p>
          </div>

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
