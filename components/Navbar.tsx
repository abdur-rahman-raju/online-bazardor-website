import Link from "next/link";
import { getCategories } from "@/lib/api";
import BanglaDate from "./BanglaDate";
import NavLinks from "./NavLinks";
import AuthMenu from "./AuthMenu";

export default async function Navbar() {
  const categories = await getCategories().catch(() => []);
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icon.png" alt="বাজার দর লোগো" className="h-9 w-9 rounded-lg object-contain" />
          <span className="leading-tight">
            <b className="block">বাজার দর</b>
            <BanglaDate className="block text-[11px] text-gray-500" />
          </span>
        </Link>
        <AuthMenu />
      </div>
      <NavLinks categories={categories} />
    </header>
  );
}

export function NavbarSkeleton() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="skeleton h-9 w-36" />
        <div className="skeleton h-9 w-32" />
      </div>
      <div className="h-9" />
    </header>
  );
}
