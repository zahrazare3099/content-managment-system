import LogoutButton from "@/app/(auth)/_components/LogoutButton";
import { createClient } from "@/utiles/supabase/server";
import Link from "next/link";

export async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="bg-slate-300 w-full p-3 px-5 flex flex-row-reverse">
      <span>
        {user ? (
          <LogoutButton />
        ) : (
          <Link href="/login" className="hover:text-blue-500">
            👤 ورود به حساب کاربری
          </Link>
        )}
      </span>
    </div>
  );
}
