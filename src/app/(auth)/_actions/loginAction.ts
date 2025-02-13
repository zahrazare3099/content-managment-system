"use server";

import { createClient } from "@/utiles/supabase/server";
import { revalidatePath } from "next/cache";

export default async function loginAction(formData: FormData) {
  const supabase = await createClient();

  const credentials = {
    password: formData.get("password") as string,
    email: formData.get("email") as string,
  };

  const { error, data } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    return {
      status: error?.message,
      user: null,
    };
  }

  // TODO: create a user instance in user_profiles tabel

  revalidatePath("/", "layout");
  return { status: "success", user: data.user };
}
