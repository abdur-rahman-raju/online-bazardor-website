import BanglaDate from "./BanglaDate";

export default function Hero() {
  return (
    <section className="grid items-center gap-6 rounded-2xl border bg-white p-6 md:grid-cols-2 md:p-8">
      <div>
        <BanglaDate className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand" />
        <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">আজকের বাজারের দাম এক নজরে</h1>
        <p className="mt-3 max-w-md text-sm text-gray-600">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিশ্লেষণ, গড় ও দামের সর্বশেষ পরিবর্তন এক জায়গায়।
        </p>
      
        <a href="#সব-পণ্য" className="btn btn-primary btn-sm sm:btn-md mt-5">
          সব পণ্য দেখুন
        </a>
      </div>
      <div className="flex justify-center md:justify-end">

        <img src="/bazar-hero.png" alt="সবজির ঝুড়ি" className="h-auto w-full max-w-xs md:max-w-sm" />
      </div>
    </section>
  );
}
