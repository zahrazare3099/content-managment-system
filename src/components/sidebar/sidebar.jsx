import ItemOfSidbar from "./ItemOfSidbar";
import { Logo } from "../logo/index";
import { createClient } from "@/utiles/supabase/server";

const items = [
  { name: "خانه", id: 1, href: "/" },
  { name: "داشبورد", id: 2, href: "/dashboard" },
  { name: "تنظیمات", id: 3, href: "/setting" },
];
export const Sidebar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <aside className="bg-slate-300 text-slate-700 p-5 w-4/12 sm:w-4/12 md:w-3/12 lg:w-3/12 xl:w-3/12 flex flex-col ">
      <Logo />
      <>
        {user ? (
          <section className="flex flex-col gap-y-2 pt-2 justify-start text-xs text-nowrap">
            <p>کاربر {user?.email.split("@")[0]} ، خوش آمدی</p>
          </section>
        ) : null}
      </>
      <ul className="space-y-2 py-4">
        {items.map((item) => (
          <ItemOfSidbar {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
};
