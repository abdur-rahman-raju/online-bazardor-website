import Link from "next/link";
import type { Product } from "@/lib/types";
import { taka, unitBn } from "@/lib/format";
import ChangeBadge from "./ChangeBadge";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="block rounded-xl border bg-white p-4 transition hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border bg-gray-50 text-xl">
          {p.image}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-semibold">{p.nameBn}</h3>
          <p className="text-xs text-gray-500">প্রতি {unitBn(p.unit)}</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-gray-500">আজকের দাম</p>
      <div className="mt-1 flex items-center justify-between gap-2">
        <span className="text-lg font-bold">{taka(p.today)}</span>
        <ChangeBadge dir={p.change.dir} value={p.change.pct} />
      </div>
    </Link>
  );
}
