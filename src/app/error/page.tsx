"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="w-full flex flex-col justify-center  gap-y-4">
      <p>Sorry, something went wrong</p>
      <p className="text-red-500 font-bold">{error.message}</p>
    </div>
  );
}
