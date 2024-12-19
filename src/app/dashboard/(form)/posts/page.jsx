import Card from "@/app/_components/card/Card";
import useGetPosts from "@/hook/useGetPosts";
import Link from "next/link";

const ShowInRaw = async () => {
  let posts = await useGetPosts();

  return (
    <div className="p-5 grid grid-cols-2 gap-4">
      {posts?.map((post) => (
        <Link href={`posts/${post.id}`} key={post.id}>
          <Card {...post} />
        </Link>
      ))}
    </div>
  );
};

export default ShowInRaw;
