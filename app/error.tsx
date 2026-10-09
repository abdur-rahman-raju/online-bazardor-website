"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border bg-white p-10 text-center">
      <div className="text-5xl">⚠️</div>
      <h1 className="mt-3 text-xl font-bold">ডেটা লোড করা যায়নি</h1>
      <p className="mt-2 text-gray-500">ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।</p>
      <button onClick={reset} className="btn btn-primary btn-sm sm:btn-md mt-6">
        আবার চেষ্টা করুন
      </button>
    </div>
  );
}
