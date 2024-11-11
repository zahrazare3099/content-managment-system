import Link from "next/link";

const items = [
  { name: "Create New Post", id: 1, path: "/dashboard/create" },
  { name: "Edit Post", id: 5, path: "/dashboard/edit" },
  { name: "Raw Posts", id: 2, path: "/dashboard/showInRaw" },
  { name: "Published Posts", id: 3, path: "/dashboard/publishedPosts" },
  { name: "Processing", id: 4, path: "/dashboard/processing" },
];
export const SelectedTab = () => {
  return (
    <div className="p-1 flex flex-wrap gap-x-2 gap-y-1">
      {items.map((item) => (
        <Link
          className="border px-1 text-sm"
          key={item.id}
          href={`${item.path}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
