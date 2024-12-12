"use client";
import { Input } from "@/app/_components/input/Input";
import { Button } from "@/app/_components/button/Button";
import useFetch from "@/hook/useFetch";
import { useSearchParams } from "next/navigation";
import EditPostElement from "./EditPostElement";
import Loader from "@/app/_components/Loader";

function EditPost() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { loading, singlePost } = useFetch({ key: id });

  if (loading) return <Loader />;
  return (
    <>
      {singlePost.map(
        (post) =>
          post.original_post_id ?? (
            <form
              key={post.id}
              onSubmit={() => console.log("not fix yet")}
              className="w-full flex flex-col gap-y-3"
            >
              <Input
                name="title"
                label="Title"
                value={post.title}
                onChange={() => console.log("not fix yet")}
              />
              <Input
                name="pre_title"
                label="Sub Title"
                value={post.pre_title}
                onChange={() => console.log("not fix yet")}
              />
              <Input
                name="post_title"
                label="Post Title"
                value={post.post_title}
                onChange={() => console.log("not fix yet")}
              />
              <EditPostElement />
              <hr />
              <div className="flex justify-center">
                <Button type="edit" name="ویرایش" />
              </div>
            </form>
          )
      )}
    </>
  );
}
export default EditPost;
