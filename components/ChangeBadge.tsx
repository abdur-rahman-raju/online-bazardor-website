import type { Dir } from "@/lib/types";
import { bnPct } from "@/lib/format";


export const TEXT_TONE: Record<Dir, string> = {
  up: "text-red-600",
  down: "text-green-700",
  flat: "text-gray-500",
};
const BG_TONE: Record<Dir, string> = {
  up: "bg-red-50",
  down: "bg-green-50",
  flat: "bg-gray-100",
};
export const ARROW: Record<Dir, string> = { up: "▲", down: "▼", flat: "—" };

export default function ChangeBadge({ dir, value }: { dir: Dir; value: number }) {
  return (
    <span className={`rounded-md px-2 py-1 text-xs font-medium ${TEXT_TONE[dir]} ${BG_TONE[dir]}`}>
      {ARROW[dir]} {bnPct(value)}%
    </span>
  );
}
