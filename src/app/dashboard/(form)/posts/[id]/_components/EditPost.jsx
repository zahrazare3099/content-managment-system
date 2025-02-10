"use client";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/button/Button";

function EditPost({ post, children }) {
  return (
    <>
      {post.map((post) =>
        post.original_post_id !== null ? (
          <form
            key={post.id}
            onSubmit={() => console.log("not fix yet")}
            className="w-full flex flex-col gap-y-3"
          >
            <Input
              name="title"
              label="تیتر"
              value={post.title}
              onChange={() => console.log("not fix yet")}
            />
            <Input
              name="pre_title"
              label="پیشوند تیتر"
              value={post.pre_title}
              onChange={() => console.log("not fix yet")}
            />
            <Input
              name="post_title"
              label="تیتر پست"
              value={post.post_title}
              onChange={() => console.log("not fix yet")}
            />
            {children}
            <hr />
            <div className="flex justify-center">
              <Button type="edit" name="ویرایش" />
            </div>
          </form>
        ) : null
      )}
    </>
  );
}
export default EditPost;
