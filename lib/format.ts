const nf = (max: number, min = 0) =>
  new Intl.NumberFormat("bn-BD", { minimumFractionDigits: min, maximumFractionDigits: max });

/** ইংরেজি সংখ্যা -> বাংলা সংখ্যা (১,৮৫০) */
export const bn = (n: number, max = 2) => nf(max).format(n);
/** শতাংশ: সবসময় ১ দশমিক ঘর (২.১) */
export const bnPct = (n: number) => nf(1, 1).format(Math.abs(n));
export const taka = (n: number, max = 2) => `${bn(n, max)} টাকা`;

const UNIT_BN: Record<string, string> = { kg: "কেজি", litre: "লিটার", dozen: "ডজন", piece: "পিস" };
export const unitBn = (u: string) => UNIT_BN[u] ?? u;
