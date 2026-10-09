import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/api";
import { bn, taka, unitBn } from "@/lib/format";
import ChangeBadge from "@/components/ChangeBadge";

function Stat({ label, value, note, tone }: { label: string; value: string; note: string; tone?: string }) {
  return (
    <div className="rounded-xl border p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`mt-1 text-xl font-bold ${tone ?? ""}`}>{value}</p>
      <p className="mt-1 text-xs text-gray-500">{note}</p>
    </div>
  );
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getProductBySlug(slug);
  if (!p) notFound();

  const rows = p.markets.map((m) => ({ ...m, avg: (m.min + m.max) / 2 })).sort((a, b) => a.avg - b.avg);
  const minRow = p.markets.reduce((a, b) => (b.min < a.min ? b : a));
  const maxRow = p.markets.reduce((a, b) => (b.max > a.max ? b : a));
  const avg = rows.reduce((s, r) => s + r.avg, 0) / rows.length;
  const diff = p.today - p.yesterday;
  const diffText =
    diff > 0
      ? `গতকালের তুলনায় আজকে দাম বেড়েছে - ${taka(diff)}`
      : diff < 0
        ? `গতকালের তুলনায় আজকে দাম কমেছে - ${taka(-diff)}`
        : "গতকালের তুলনায় আজকে দাম অপরিবর্তিত";

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <nav className="text-xs text-gray-500">
        <Link href="/" className="hover:underline">হোম</Link> ›{" "}
        <Link href={`/category/${p.category}`} className="hover:underline">{p.categoryNameBn}</Link> › {p.nameBn}
      </nav>

      <section className="flex flex-col gap-4 rounded-xl border bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border bg-gray-50 text-3xl">{p.image}</span>
          <div>
            <h1 className="text-2xl font-bold">{p.nameBn}</h1>
            <p className="text-sm text-gray-500">প্রতি {unitBn(p.unit)}</p>
            <p className="mt-1 text-sm text-gray-600">{diffText}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Link href={`/category/${p.category}`} className="badge badge-outline">
                {p.categoryIcon} {p.categoryNameBn}
              </Link>
              <span className="badge badge-outline">প্রতি {unitBn(p.unit)}</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-gray-50 px-5 py-3 text-center">
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="text-3xl font-bold">{bn(p.today)}</p>
          <p className="text-xs text-gray-500">টাকা / {unitBn(p.unit)}</p>
          <div className="mt-1"><ChangeBadge dir={p.change.dir} value={p.change.pct} /></div>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5">
        <h2 className="mb-3 font-bold">দামের সারসংক্ষেপ</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label="সর্বনিম্ন দাম" value={taka(minRow.min)} note={`${minRow.market}-এ সবচেয়ে কম`} tone="text-green-700" />
          <Stat label="সর্বোচ্চ দাম" value={taka(maxRow.max)} note={`${maxRow.market}-এ সবচেয়ে বেশি`} tone="text-red-600" />
          <Stat label="গড় দাম" value={taka(avg)} note={`প্রতি ${unitBn(p.unit)}-এর হিসাবে, ${bn(rows.length)}টি বাজারের গড়`} />
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5">
        <h2 className="mb-3 font-bold">বাজারভিত্তিক আজকের দাম</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra table-sm w-full sm:table-md">
            <thead>
              <tr className="text-gray-500">
                <th>বাজার</th>
                <th>বিভাগ</th>
                <th className="text-right">সর্বনিম্ন</th>
                <th className="text-right">সর্বোচ্চ</th>
                <th className="text-right">গড়</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.market}>
                  <td>{r.market}</td>
                  <td>{r.division}</td>
                  <td className="text-right">{taka(r.min)}</td>
                  <td className="text-right">{taka(r.max)}</td>
                  <td className="text-right font-bold">{taka(r.avg)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
