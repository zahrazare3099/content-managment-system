"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="w-full text-red-500 flex flex-col justify-center items-center gap-y-4">
      <p>Sorry, something went wrong</p>
      <p>{error?.message}</p>
    </div>
  );
}
