import { cache } from "react";
import type { Category, Product } from "./types";

// প্রথমটা কাজ না করলে দ্বিতীয় (alternative) API ব্যবহার হবে
const BASES = [
  process.env.NEXT_PUBLIC_API_URL || "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

async function get<T>(path: string): Promise<T> {
  let lastErr: unknown;
  for (const base of BASES) {
    try {
      const res = await fetch(`${base}${path}`, { next: { revalidate: 300 } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return (await res.json()) as T;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

export const getProducts = cache(() => get<Product[]>("/products"));
export const getCategories = cache(() => get<Category[]>("/categories"));

export async function getProductBySlug(slug: string) {
  const all = await getProducts();
  return all.find((p) => p.slug === slug) ?? null;
}
