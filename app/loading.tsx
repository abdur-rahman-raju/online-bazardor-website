import { GridSkeleton } from "@/components/Skeletons";

export default function Loading() {
  return (
    <div className="space-y-8" aria-busy="true">
      <div className="skeleton h-64 w-full rounded-2xl" />
      <div className="space-y-3">
        <div className="skeleton h-6 w-40" />
        <GridSkeleton />
      </div>
      <div className="space-y-3">
        <div className="skeleton h-6 w-40" />
        <GridSkeleton />
      </div>
    </div>
  );
}
