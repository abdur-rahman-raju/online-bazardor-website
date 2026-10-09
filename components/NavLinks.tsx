"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/lib/types";

export default function NavLinks({ categories }: { categories: Category[] }) {
  const pathname = usePathname();
  return (
    <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-2">
      {categories.map((c) => {
        const href = `/category/${c.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={c.id}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-sm transition ${
              active ? "bg-brand text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>{c.icon}</span>
            {c.nameBn}
          </Link>
        );
      })}
    </nav>
  );
}
