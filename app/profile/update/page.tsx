"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user?.name) setName(session.user.name);
  }, [session?.user?.name]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return toast.error("নাম খালি রাখা যাবে না");
    setLoading(true);
    const { error } = await authClient.updateUser({ name: name.trim() });
    setLoading(false);
    if (error) return toast.error(error.message || "তথ্য আপডেট করা যায়নি");
    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div>
        <h1 className="text-2xl font-bold">তথ্য আপডেট করুন</h1>
        <p className="text-sm text-gray-500">আপনার নাম বদলান।</p>
      </div>
      <div className="rounded-xl border bg-white p-5">
        {isPending ? (
          <div className="skeleton h-28 w-full" />
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <label className="form-control">
              <span className="label-text mb-1 text-sm">নাম</span>
              <input className="input input-bordered input-sm sm:input-md" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button type="submit" disabled={loading} className="btn btn-primary btn-sm sm:btn-md w-full">
              {loading ? <span className="loading loading-spinner loading-sm" /> : "তথ্য আপডেট করুন"}
            </button>
          </form>
        )}
      </div>
      <Link href="/profile" className="text-sm text-gray-500 hover:underline">← প্রোফাইলে ফিরে যান</Link>
    </div>
  );
}
