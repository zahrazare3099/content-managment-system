import Link from "next/link";
import { Logo } from "../logo/index";
export const Sidebar = () => {
  return (
    <aside className="bg-slate-700 p-5 w-2/5 flex flex-col ">
      <Logo />
      <ul className="space-y-2 py-4">
        <li>
          <Link
            className="hover:bg-slate-400 focus:bg-slate-400 flex p-2 font-bold rounded-xl"
            href={"/"}
          >
            خانه
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-slate-400 focus:bg-slate-400 flex p-2 font-bold rounded-xl"
            href={"/dashboard"}
          >
            داشبورد
          </Link>
        </li>

        <li>
          <Link
            className="hover:bg-slate-400 focus:bg-slate-400 flex p-2 font-bold rounded-xl"
            href={"/setting"}
          >
            تنظیمات
          </Link>
        </li>
      </ul>
    </aside>
  );
};
