"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Avatar from "./Avatar";

export default function AuthMenu() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const closeMenu = () => (document.activeElement as HTMLElement | null)?.blur();

  async function onSignOut() {
    closeMenu();
    await authClient.signOut();
    toast.success("সাইন আউট সফল হয়েছে");
    router.push("/");
    router.refresh();
  }

  if (isPending) return <div className="skeleton h-9 w-32 rounded-lg" />;

  if (!session) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
          সাইন ইন
        </Link>
        <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
          সাইন আপ
        </Link>
      </div>
    );
  }

  const user = session.user;
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="flex cursor-pointer items-center gap-2">
        <Avatar name={user.name} image={user.image} />
        <span className="hidden text-sm font-medium sm:inline">{user.name}</span>
        <span className="text-xs text-gray-400">▾</span>
      </div>
      <div tabIndex={0} className="dropdown-content z-50 mt-2 w-60 rounded-xl border bg-white p-3 shadow-lg">
        <p className="font-semibold">{user.name}</p>
        <p className="truncate text-xs text-gray-500">{user.email}</p>
        <div className="my-2 border-t" />
        <Link href="/profile" onClick={closeMenu} className="block rounded-md px-2 py-1.5 text-sm hover:bg-gray-100">
          👤 আমার প্রোফাইল
        </Link>
        <button onClick={onSignOut} className="block w-full rounded-md px-2 py-1.5 text-left text-sm text-red-600 hover:bg-red-50">
          ↩ সাইন আউট
        </button>
      </div>
    </div>
  );
}
