export function CardSkeleton() {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="skeleton h-10 w-10 rounded-lg" />
        <div className="space-y-2">
          <div className="skeleton h-4 w-28" />
          <div className="skeleton h-3 w-16" />
        </div>
      </div>
      <div className="skeleton mt-4 h-3 w-16" />
      <div className="mt-2 flex justify-between">
        <div className="skeleton h-5 w-20" />
        <div className="skeleton h-5 w-14" />
      </div>
    </div>
  );
}

export function GridSkeleton({ n = 6, cols = "lg:grid-cols-3" }: { n?: number; cols?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${cols}`}>
      {Array.from({ length: n }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
