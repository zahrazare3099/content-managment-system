import ItemOfSidbar from "./ItemOfSidbar";
import { Logo } from "../logo/index";

const items = [
  { name: "خانه", id: 1, href: "/" },
  { name: "داشبورد", id: 2, href: "/dashboard" },
  { name: "تنظیمات", id: 3, href: "/setting" },
];
export const Sidebar = async () => {
  return (
    <aside className="bg-slate-300 text-slate-700 p-5 w-4/12 sm:w-4/12 md:w-3/12 lg:w-3/12 xl:w-3/12 flex flex-col ">
      <Logo />
      <ul className="space-y-2 py-4">
        {items.map((item) => (
          <ItemOfSidbar {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
};
