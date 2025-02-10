"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ItemOfSidbar = ({ name, href }) => {
  const pathname = usePathname();
  const activePath = "bg-indigo-400 text-white font-bold";

  return (
    <li>
      <Link
        className={`${
          href.split("/")[1] == pathname.split("/")[1] || pathname === href
            ? activePath
            : ""
        } hover:bg-indigo-300 flex p-2 rounded-xl text-sm`}
        href={href}
      >
        {name}
      </Link>
    </li>
  );
};

export default ItemOfSidbar;
