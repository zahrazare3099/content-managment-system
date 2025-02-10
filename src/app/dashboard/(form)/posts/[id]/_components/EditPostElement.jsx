"use client";
import { EditorComponent } from "@/components/Editor";

const EditPostElement = ({ elements }) => {
  return elements.map(
    (element, index) =>
      element.original_element_id && (
        <EditorComponent content={element.text} key={element.id + index} />
      )
  );
};

export default EditPostElement;
