"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const HEADER_EXCLUDED = ["/app", "/user", "/servis", "/tracking"];
const FOOTER_EXCLUDED = ["/app", "/user", "/servis", "/tracking", "/login", "/register"];

export default function ConditionalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeader = HEADER_EXCLUDED.some((p) => pathname.startsWith(p));
  const hideFooter = FOOTER_EXCLUDED.some((p) => pathname.startsWith(p));

  return (
    <>
      {!hideHeader && <Header />}
      <div className="flex-1 flex flex-col">{children}</div>
      {!hideFooter && <Footer />}
    </>
  );
}
