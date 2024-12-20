import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="p-5 grid grid-cols-2 gap-4">
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className="p-3 min-h-32 h-full w-full flex flex-col justify-between gap-y-1 bg-slate-100 border border-slate-300 shadow-md rounded-lg"
        >
          <Skeleton className="bg-slate-400 w-10" />
          <div className="flex flex-col gap-y-2">
            <Skeleton className="bg-slate-400 w-full" />
            <Skeleton className="bg-slate-400 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
