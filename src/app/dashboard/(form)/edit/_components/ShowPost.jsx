"use client";
import { useSearchParams } from "next/navigation";
import ShowPostElements from "./ShowPostElements";
import useFetch from "@/hook/useFetch";
import Loader from "@/app/_components/Loader";

function ShowPost() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { loading, singlePost } = useFetch({ key: id });

  if (loading) return <Loader />;
  return (
    <div className="flex flex-col gap-y-2 text-sm">
      {singlePost.map(
        (post) =>
          post.original_post_id === null && (
            <div
              key={post.id}
              className="flex flex-col gap-3 bg-slate-100 p-2 shadow-md rounded-lg"
            >
              <div>
                <label className="text-slate-500">Title</label>
                <p>{post.title ?? "_ _ _"}</p>
              </div>
              <hr />
              <div>
                <label className="text-slate-500">Sub Title</label>
                <p>{post.pre_title ?? "_ _ _"}</p>
              </div>
              <hr />
              <div>
                <label className="text-slate-500">Post Title</label>
                <p>{post.post_title ?? "_ _ _"}</p>
              </div>
              <hr />
              <ShowPostElements />
            </div>
          )
      )}
    </div>
  );
}
export default ShowPost;
