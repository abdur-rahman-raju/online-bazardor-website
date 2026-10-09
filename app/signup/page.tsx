"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import AuthShell from "@/components/AuthShell";
import SocialButtons from "@/components/SocialButtons";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fail(msg: string) {
    setError(msg);
    toast.error(msg);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim()) return fail("আপনার নাম দিন");
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return fail("সঠিক ইমেইল দিন");
    if (password.length < 8) return fail("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
    if (password !== confirm) return fail("দুই জায়গার পাসওয়ার্ড মিলছে না");

    setLoading(true);
    const { error } = await authClient.signUp.email({ name: name.trim(), email: email.trim(), password });
    setLoading(false);
    if (error) return fail(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি");

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এবার সাইন ইন করুন");
    router.push("/signin");
  }

  return (
    <AuthShell title="অ্যাকাউন্ট তৈরি করুন" subtitle="বিনা খরচে সাইন আপ করে বাজারের দাম দেখুন।">
      <form onSubmit={onSubmit} className="space-y-3">
        <label className="form-control">
          <span className="label-text mb-1 text-sm">নাম</span>
          <input className="input input-bordered input-sm sm:input-md" placeholder="যেমন: রহিম উদ্দিন" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label className="form-control">
          <span className="label-text mb-1 text-sm">ইমেইল</span>
          <input type="email" className="input input-bordered input-sm sm:input-md" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </label>
        <label className="form-control">
          <span className="label-text mb-1 text-sm">পাসওয়ার্ড</span>
          <input type="password" className="input input-bordered input-sm sm:input-md" placeholder="কমপক্ষে ৮ অক্ষর" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
        </label>
        <label className="form-control">
          <span className="label-text mb-1 text-sm">পাসওয়ার্ড নিশ্চিত করুন</span>
          <input type="password" className="input input-bordered input-sm sm:input-md" placeholder="আবার লিখুন" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" />
        </label>
        {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
        <button type="submit" disabled={loading} className="btn btn-primary btn-sm sm:btn-md w-full">
          {loading ? <span className="loading loading-spinner loading-sm" /> : "অ্যাকাউন্ট তৈরি করুন"}
        </button>
      </form>
      <SocialButtons callbackURL="/" />
      <p className="mt-4 text-center text-sm text-gray-600">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="font-medium text-brand hover:underline">সাইন ইন করুন</Link>
      </p>
    </AuthShell>
  );
}
