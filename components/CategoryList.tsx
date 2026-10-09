"use client";
import { useMemo, useState } from "react";
import type { Category, Product } from "@/lib/types";
import { bn } from "@/lib/format";
import ProductCard from "./ProductCard";

type Sort = "default" | "asc" | "desc";

export default function CategoryList({ category, products }: { category: Category; products: Product[] }) {
  const [sort, setSort] = useState<Sort>("default");

  // price একটা সংখ্যা (number), তাই বাংলা সংখ্যায় দেখালেও সর্টিং সংখ্যার মান ধরেই হয়
  const list = useMemo(() => {
    const l = [...products];
    if (sort === "asc") l.sort((a, b) => a.today - b.today);
    if (sort === "desc") l.sort((a, b) => b.today - a.today);
    return l;
  }, [products, sort]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-xl border bg-white p-5">
        <span className="grid h-12 w-12 place-items-center rounded-xl border bg-gray-50 text-2xl">{category.icon}</span>
        <div>
          <h1 className="text-2xl font-bold">{category.nameBn}</h1>
          <p className="text-sm text-gray-500">এই ক্যাটাগরির পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 rounded-xl border bg-white p-3">
        <label htmlFor="sort" className="text-sm text-gray-600">
          সাজান
        </label>
        <select
          id="sort"
          className="select select-bordered select-sm sm:select-md"
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
        >
          <option value="default">ডিফল্ট</option>
          <option value="asc">দাম: কম থেকে বেশি</option>
          <option value="desc">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <p className="text-sm text-gray-500">মোট {bn(list.length)}টি পণ্য দেখানো হচ্ছে</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
