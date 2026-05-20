import Link from "next/link";
import { Globe, Mail, BadgeCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, { label: string; href: string }[]> = {
    Layanan: [
      { label: "iPhone Repair", href: "#" },
      { label: "MacBook Repair", href: "#" },
      { label: "Android Service", href: "#" },
      { label: "Data Recovery", href: "#" },
    ],
    Perusahaan: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "E-Waste Inisiatif", href: "/ewaste" },
      { label: "Panduan", href: "/panduan" },
    ],
    "Legal & Dukungan": [
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
      { label: "Kontak", href: "/hubungi-kami" },
    ],
  };

  return (
    <footer className="bg-[#f9f9f9] pt-16 pb-8 px-6 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="font-bold text-slate-900 text-lg">ReparasiHub</h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Solusi perbaikan perangkat yang memberdayakan talenta lokal dan
            menjaga bumi kita.
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-slate-100 rounded-full py-2 px-4 shadow-sm">
            <BadgeCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-[11px] font-bold text-slate-700 tracking-tight whitespace-nowrap">
              100% Teknisi SMK & Vokasi Lokal
            </span>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="space-y-6">
            <h4 className="font-bold text-slate-900 text-[15px]">{title}</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs">
          © {currentYear} ReparasiHub. Crafting Restoration.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-slate-400 hover:text-emerald-600 transition-colors"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-emerald-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
