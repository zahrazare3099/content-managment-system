"use client";
import useFetch from "@/hook/useFetch";
import { useSearchParams } from "next/navigation";
import { EditorComponent } from "@/app/_components/Editor";

const EditPostElement = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { persianPostElements } = useFetch({ key: id });

  return persianPostElements.map(
    (element, index) =>
      element.original_element_id && (
        <EditorComponent content={element.text} key={element.id + index} />
      )
  );
};

export default EditPostElement;
