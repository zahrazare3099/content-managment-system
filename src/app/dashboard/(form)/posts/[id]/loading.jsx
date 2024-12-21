import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <>
      {Array.from({ length: 2 }, (_, i) => (
        <div
          key={i}
          className="p-3 h-full w-full flex flex-col justify-between gap-y-3"
        >
          <div className="p-3 flex flex-col justify-between gap-y-3">
            <Skeleton className="bg-slate-400 w-10" />
            <Skeleton className="bg-slate-300 w-full" />
            <Skeleton className="bg-slate-300 w-full" />
            <Skeleton className="bg-slate-300 w-full" />
          </div>
          <div className="p-3 flex flex-col justify-between gap-y-3">
            <Skeleton className="bg-slate-400 w-10" />
            <Skeleton className="bg-slate-300 w-full" />
            <Skeleton className="bg-slate-300 w-full" />
            <Skeleton className="bg-slate-300 w-full" />
          </div>
          <div className="p-3 flex flex-col justify-between gap-y-3">
            <Skeleton className="bg-slate-400 w-10" />
            <Skeleton className="bg-slate-300 w-full" />
            <Skeleton className="bg-slate-300 w-full" />
            <Skeleton className="bg-slate-300 w-full" />
          </div>
          <div className="p-3 flex flex-col justify-between gap-y-3">
            <Skeleton className="bg-slate-400 w-10" />
            <Skeleton className="bg-slate-300 w-full" />
            <Skeleton className="bg-slate-300 w-full" />
            <Skeleton className="bg-slate-300 w-full" />
          </div>
        </div>
      ))}
    </>
  );
}
