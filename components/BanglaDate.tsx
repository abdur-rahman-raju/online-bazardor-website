"use client";
import { useEffect, useState } from "react";

// তারিখ ব্রাউজারে বসে, তাই পেজ ক্যাশ হলেও পুরনো তারিখ দেখাবে না
export default function BanglaDate({ className = "" }: { className?: string }) {
  const [d, setD] = useState("");
  useEffect(() => {
    setD(
      new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
      }).format(new Date())
    );
  }, []);
  return <span className={className}>{d || "\u00A0"}</span>;
}
