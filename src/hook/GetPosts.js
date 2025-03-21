import Layout from "@/app/dashboard/layout";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const secret =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvd3ZvanRpaWVlbnR1d2VseGtnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTE1NjA5NCwiZXhwIjoyMDQ2NzMyMDk0fQ.Ak0z3Yth8fvqeI-elW-zh906yVgujmryIsWuCUZItoE";

const headers = {
  Authorization: "Bearer " + secret,
  apiKey: secret,
  "Content-Type": "application/json",
};

const BASE_URL = "https://vowvojtiieentuwelxkg.supabase.co/rest/v1/";

export default async function GetPosts() {
  const response = await fetch(`${BASE_URL}posts`, { headers });
  if (response.ok) {
    const posts = await response.json();
    return posts;
  } else {
    revalidatePath("/", Layout);
    redirect("/error");
  }
}
