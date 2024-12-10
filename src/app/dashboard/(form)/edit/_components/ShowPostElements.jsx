"use client";
import useFetch from "@/hook/useFetch";
import DynamicTag from "./DynamicTag";
import { useSearchParams } from "next/navigation";

const ShowPostElements = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { englishPostElements } = useFetch({ key: id });

  return englishPostElements.flat().map((element, index) =>
    element.original_element_id == null ? (
      <DynamicTag key={element.id + index} type={element.type}>
        {element.text}
      </DynamicTag>
    ) : null
  );
};

export default ShowPostElements;
