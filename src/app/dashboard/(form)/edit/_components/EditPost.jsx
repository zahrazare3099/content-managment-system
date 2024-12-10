"use client";
import { Input } from "@/app/_components/input/Input";
import { Button } from "@/app/_components/button/Button";
import useFetch from "@/hook/useFetch";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import EditPostElement from "./EditPostElement";
import Loader from "@/app/_components/Loader";

function EditPost() {
  const [title, setTitle] = useState("");
  const [preTitle, setPreTitle] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { loading, singlePost } = useFetch({ key: id });
  //
  const handleSubmitEdited = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('pre_title', preTitle);

    // // Send the data to the API route
    // const response = await fetch('/api/form', {
    //     method: 'POST',
    //     body: formData,
    // });

    // const data = await response.json();
    // setMessage(data.message || 'Form submitted successfully!');
  };
  const handleSortedElements = (index) => {
    const newElements = [...postElements].sort((a, b) => a - b);
    newElements.map((element) => {
      if (element.original_element_id) {
        return (
          <DynamicTag key={index} tag={element.type}>
            {element.text}
          </DynamicTag>
        );
      } else {
        return null;
      }
    });
  };

  if (loading) return <Loader />;
  return (
    <>
      {singlePost.map(
        (post) =>
          post.original_post_id ?? (
            <form
              key={post.id}
              onSubmit={handleSubmitEdited}
              className="w-full flex flex-col gap-y-3"
            >
              <Input
                name="title"
                label="Title"
                value={post.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                name="pre_title"
                label="Sub Title"
                value={post.pre_title}
                onChange={(e) => setPreTitle(e.target.value)}
              />
              <Input
                name="post_title"
                label="Post Title"
                value={post.post_title}
                onChange={(e) => setPostTitle(e.target.value)}
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
