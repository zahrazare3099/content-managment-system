import ItemOfSidbar from "./ItemOfSidbar";
import { Logo } from "../logo/index";

const items = [
  { name: "Home", id: 1, href: "/home" },
  { name: "Dashboard", id: 2, href: "/dashboard" },
  { name: "Setting", id: 3, href: "/setting" },
];
export const Sidebar = () => {
  return (
    <aside className="bg-slate-300 text-slate-700 p-5 w-2/5 md:w-1/5 flex flex-col ">
      <Logo />
      <ul className="space-y-2 py-4">
        {items.map((item) => (
          <ItemOfSidbar {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
};
