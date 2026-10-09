"use client";
import { useEffect, useState } from "react";


export default function BanglaDate({ className = "" }: { className?: string }) {
  const [e, setD] = useState("");
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
  return <span className={className}>{e || "\u00A0"}</span>;
}
