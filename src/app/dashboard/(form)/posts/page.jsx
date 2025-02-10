import Card from "@/components/card/Card";
import GetPosts from "@/hook/GetPosts";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/components/loader/Loader";

export default async function ShowInRaw() {
  let posts = await GetPosts();

  return (
    <div dir="ltr" className="p-5 grid grid-cols-2 gap-4">
      {posts?.map((post) => (
        <Link href={`posts/${post.id}`} key={post.id}>
          <Suspense fallback={<Loading />}>
            <Card {...post} />
          </Suspense>
        </Link>
      ))}
    </div>
  );
}
