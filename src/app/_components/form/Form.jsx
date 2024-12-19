"use client";
import { CustomInput } from "../input/CustomInput";
import { Button } from "../button/Button";
import { AddMoreContent } from "../AddMoreContent";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import CreatePost from "@/hook/CreatePost";

const contentItems = [
  { type: "h1", label: "H1", id: "01" },
  { type: "h2", label: "H2", id: "02" },
  { type: "h3", label: "H3", id: "03" },
  { type: "p", label: "Paragragh", id: "04" },
  { type: "Image", label: "Image", id: "05" },
  { type: "Video", label: "Video", id: "06" },
];

// Define validation schema using Zod
const PostSchema = z.object({
  title: z.string().min(1, "تیتر ضروری است"),
  pre_title: z.string().min(1, "پیشوند تیتر ضروری است"),
  post_title: z.string().min(1, "تیتر پست ضروری است"),
  author: z
    .string()
    .email("ایمیل وارد شده معتبر نیست")
    .min(1, "ایمیل ضروری است"),
});
const ElementSchema = z.object({
  type: z.string(),
  text: z.string().min(1, "وارد کردن محتوا ضروری است"),
  index: z.string(),
  id: z.string(),
  created_at: z.string(),
  data: z.any().nullable(),
});
//
export const Form = () => {
  const [postData, setPostData] = useState(null);
  const [elementData, setElementData] = useState(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(
      z.object({
        posts: PostSchema,
        elements: ElementSchema.array(),
      })
    ),
    defaultValues: {
      posts: {
        title: "",
        pre_title: "",
        post_title: "",
        author: "",
      },
      elements: [],
    },
    mode: "onChange",
  });
  const { createPost, creatElement } = CreatePost({ elementData, postData });
  console.log(postData, elementData);

  // inputs from elements
  const { fields, append, remove } = useFieldArray({
    control,
    name: "elements",
  });
  // Function to handle adding new input fields
  const handleAddContent = (type) => {
    append({
      type,
      text: "",
      index: String(fields.length),
      id: uuidv4(),
      created_at: new Date().toISOString(),
      data: null,
    });
  };
  // Combined submit handler
  const onSubmit = async (data) => {
    await onSubmitPosts(data.posts);
    await onSubmitElements(data.elements);
    reset();
  };
  // handle submit posts
  const onSubmitPosts = async (data) => {
    const newPost = {
      ...data,
      created_at: new Date().toISOString(),
      reviewed: false,
      published: false,
    };
    setPostData(newPost);
    await createPost(newPost);
  };
  // handle submit elements
  const onSubmitElements = async (data) => {
    setElementData(data);
    await creatElement(data);
  };

  //
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="w-full flex flex-col gap-y-4" dir="rtl">
      <AddMoreContent>
        {contentItems.map((item) => (
          <button
            type="button"
            onClick={() => handleAddContent(item.type)}
            key={item.id}
            className="bg-slate-300 py-1 px-2 rounded-xl text-sm hover:outline-2 hover:outline hover:outline-indigo-400 "
          >
            {item.label}
          </button>
        ))}
      </AddMoreContent>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-9/12 flex flex-col justify-center gap-4"
      >
        <Controller
          name="posts.title"
          control={control}
          render={({ field }) => (
            <CustomInput {...field} label="تیتر" error={errors.posts?.title} />
          )}
        />
        <Controller
          name="posts.pre_title"
          control={control}
          render={({ field }) => (
            <CustomInput
              {...field}
              label="پیشوند تیتر"
              error={errors.posts?.pre_title}
            />
          )}
        />
        <Controller
          name="posts.post_title"
          control={control}
          render={({ field }) => (
            <CustomInput
              {...field}
              label="تیتر پست"
              error={errors.posts?.post_title}
            />
          )}
        />
        <Controller
          name="posts.author"
          control={control}
          render={({ field }) => (
            <CustomInput
              {...field}
              label="ایمیل نویسنده پست"
              error={errors.posts?.author}
            />
          )}
          rules={{ required: true }}
        />
        {fields.map((item, index) => (
          <div key={item.id} className="flex flex-col gap-y-2">
            <Controller
              name={`elements.${index}.text`}
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  name={`elements.${index}.text`}
                  label={`محتوا برای تگ ${item.type}`}
                  error={errors.elements?.[index]?.text}
                />
              )}
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-red-500 text-white rounded-xl p-1 max-w-16 text-xs"
            >
              Remove
            </button>
          </div>
        ))}
        <Button
          type="submit"
          name={isSubmitting ? "Submitting..." : "Submit"}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};
