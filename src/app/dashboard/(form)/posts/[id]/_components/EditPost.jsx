"use client";
import { Input } from "@/app/_components/input/Input";
import { Button } from "@/app/_components/button/Button";
import Loader from "@/app/_components/Loader";

function EditPost({ post, children }) {
  if (!post) return <Loader />;
  return (
    <>
      {post.map(
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
              {children}
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
