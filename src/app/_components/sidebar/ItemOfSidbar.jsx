"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ItemOfSidbar = ({ name, href }) => {
  const pathname = usePathname();
  const activePath = "bg-slate-500 text-white font-bold";

  return (
    <li>
      <Link
        className={`${
          pathname === href ? activePath : ""
        } hover:bg-slate-400 focus:bg-slate-400 flex p-2 rounded-xl text-sm`}
        href={href}
      >
        {name}
      </Link>
    </li>
  );
};

export default ItemOfSidbar;
