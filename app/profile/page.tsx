"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Avatar from "@/components/Avatar";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  async function onSignOut() {
    await authClient.signOut();
    toast.success("সাইন আউট সফল হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div>
        <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
        <p className="text-sm text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </div>

      {isPending || !session ? (
        <div className="skeleton h-24 w-full rounded-xl" />
      ) : (
        <div className="flex flex-col gap-4 rounded-xl border bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar name={session.user.name} image={session.user.image} size={56} />
            <div className="min-w-0">
              <p className="font-semibold">{session.user.name}</p>
              <p className="truncate text-sm text-gray-500">{session.user.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/profile/update" className="btn btn-primary btn-sm sm:btn-md">
              তথ্য আপডেট করুন
            </Link>
            <button onClick={onSignOut} className="btn btn-outline btn-error btn-sm sm:btn-md">
              ↩ সাইন আউট
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
