"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { name: "Create New Post", id: 1, path: "/dashboard" },
  { name: "Edit Post", id: 5, path: "/dashboard/edit" },
  { name: "Raw Posts", id: 2, path: "/dashboard/posts" },
  { name: "Published Posts", id: 3, path: "/dashboard/publishedPosts" },
  { name: "Processing", id: 4, path: "/dashboard/processing" },
];
export const SelectedTab = () => {
  const path = usePathname();

  return (
    <div className="flex flex-wrap justify-end gap-x-2 gap-y-2">
      {items.map((item) => {
        const isActive =
          path === item.path ||
          (item.path === "/dashboard/edit" &&
            path.startsWith("/dashboard/posts/"));
        return (
          <Link
            className={`px-2 py-1 text-sm rounded-lg bg-slate-300 ${
              isActive ? "outline outline-indigo-400" : null
            }  `}
            key={item.id}
            href={`${item.path}`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};
