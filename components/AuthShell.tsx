import Link from "next/link";

export default function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-md py-6">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <p className="mt-1 text-center text-sm text-gray-500">{subtitle}</p>
      <div className="mt-5 rounded-2xl border bg-white p-6">{children}</div>
      <p className="mt-5 text-center text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
}
