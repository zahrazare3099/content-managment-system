"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { name: "Create New Post", id: 1, path: "/dashboard" },
  { name: "Edit Post", id: 5, path: "/dashboard/edit" },
  { name: "Raw Posts", id: 2, path: "/dashboard/showInRaw" },
  { name: "Published Posts", id: 3, path: "/dashboard/publishedPosts" },
  { name: "Processing", id: 4, path: "/dashboard/processing" },
];
export const SelectedTab = () => {
  const path = usePathname();

  return (
    <div className="flex flex-wrap justify-end gap-x-2 gap-y-1">
      {items.map((item) => (
        <Link
          className={`px-2 py-1 text-sm rounded-lg ${
            path == item.path ? "bg-indigo-400" : "bg-slate-300"
          }`}
          key={item.id}
          href={`${item.path}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
