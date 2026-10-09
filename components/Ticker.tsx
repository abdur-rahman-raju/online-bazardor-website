import { getProducts } from "@/lib/api";
import { bn, unitBn } from "@/lib/format";
import { ARROW, TEXT_TONE } from "./ChangeBadge";
import { bnPct } from "@/lib/format";

export default async function Ticker() {
  const products = await getProducts().catch(() => []);
  if (!products.length) return null;
  const items = [...products, ...products]; // দুইবার, যাতে অসীম লুপ মসৃণ হয়
  return (
    <div className="overflow-hidden border-b bg-white" aria-label="আজকের দামের স্ক্রলিং তালিকা">
      <div className="ticker-track flex w-max py-2 text-xs">
        {items.map((p, i) => (
          <span key={`${p.id}-${i}`} className="flex items-center gap-1.5 whitespace-nowrap pr-8">
            <span>{p.image}</span>
            <span className="font-medium">{p.nameBn}</span>
            <span className="text-gray-600">
              {bn(p.today)} টাকা/{unitBn(p.unit)}
            </span>
            <span className={`font-medium ${TEXT_TONE[p.change.dir]}`}>
              {ARROW[p.change.dir]} {bnPct(p.change.pct)}%
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function TickerSkeleton() {
  return <div className="skeleton h-9 w-full rounded-none" />;
}
