"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const SHELL_EXCLUDED = ["/app", "/user", "/servis", "/tracking"];

export default function ConditionalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const excluded = SHELL_EXCLUDED.some((p) => pathname.startsWith(p));
  if (excluded) return <div className="flex-1 flex flex-col">{children}</div>;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
