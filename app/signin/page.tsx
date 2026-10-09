"use client";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import AuthShell from "@/components/AuthShell";
import SocialButtons from "@/components/SocialButtons";

function SignInForm() {
  const router = useRouter();
  const sp = useSearchParams();
  const rawFrom = sp.get("from") || "/";
  const from = rawFrom.startsWith("/") && !rawFrom.startsWith("//") ? rawFrom : "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // প্রোটেক্টেড পেজ থেকে ফিরিয়ে দিলে টোস্ট
  useEffect(() => {
    if (sp.get("protected")) toast.error("এই পেজ দেখতে আগে সাইন ইন করুন", { id: "protected" });
  }, [sp]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password) {
      const msg = "ইমেইল ও পাসওয়ার্ড দিন";
      setError(msg);
      toast.error(msg);
      return;
    }
    setLoading(true);
    const { error } = await authClient.signIn.email({ email: email.trim(), password });
    setLoading(false);
    if (error) {
      const msg = "ইমেইল বা পাসওয়ার্ড ভুল হয়েছে";
      setError(msg);
      toast.error(msg);
      return;
    }
    toast.success("সাইন ইন সফল হয়েছে");
    router.push(from);
    router.refresh();
  }

  return (
    <AuthShell title="সাইন ইন" subtitle="বাজারের দাম, তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।">
      <form onSubmit={onSubmit} className="space-y-3">
        <label className="form-control">
          <span className="label-text mb-1 text-sm">ইমেইল</span>
          <input type="email" className="input input-bordered input-sm sm:input-md" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </label>
        <label className="form-control">
          <span className="label-text mb-1 text-sm">পাসওয়ার্ড</span>
          <input type="password" className="input input-bordered input-sm sm:input-md" placeholder="কমপক্ষে ৮ অক্ষর" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        </label>
        {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
        <button type="submit" disabled={loading} className="btn btn-primary btn-sm sm:btn-md w-full">
          {loading ? <span className="loading loading-spinner loading-sm" /> : "সাইন ইন"}
        </button>
      </form>
      <SocialButtons callbackURL={from} />
      <p className="mt-4 text-center text-sm text-gray-600">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="font-medium text-brand hover:underline">সাইন আপ করুন</Link>
      </p>
    </AuthShell>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="skeleton mx-auto h-72 max-w-md rounded-2xl" />}>
      <SignInForm />
    </Suspense>
  );
}
