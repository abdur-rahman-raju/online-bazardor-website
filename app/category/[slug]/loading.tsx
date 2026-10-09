import { GridSkeleton } from "@/components/Skeletons";

export default function Loading() {
  return (
    <div className="space-y-4" aria-busy="true">
      <div className="skeleton h-20 w-full rounded-xl" />
      <div className="skeleton h-14 w-full rounded-xl" />
      <GridSkeleton n={6} />
    </div>
  );
}
