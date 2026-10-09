import Link from "next/link";

export default function NotFoundCard({
  title = "৪০৪ — পেজটি পাওয়া যায়নি",
  message = "আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরিয়ে নেওয়া হয়েছে।",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border bg-white p-10 text-center">
      <div className="text-5xl">🧺</div>
      <h1 className="mt-3 text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-500">{message}</p>
      <Link href="/" className="btn btn-primary btn-sm sm:btn-md mt-6">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
