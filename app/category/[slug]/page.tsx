import { notFound } from "next/navigation";
import { getCategories, getProducts } from "@/lib/api";
import CategoryList from "@/components/CategoryList";
import NotFoundCard from "@/components/NotFoundCard";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const items = products.filter((p) => p.category === slug);
  if (items.length === 0) {
    return <NotFoundCard title="কোনো পণ্য নেই" message="এই ক্যাটাগরিতে এখন কোনো পণ্য পাওয়া যায়নি।" />;
  }
  return <CategoryList category={category} products={items} />;
}
