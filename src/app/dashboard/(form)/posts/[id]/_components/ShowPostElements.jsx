import DynamicTag from "./DynamicTag";

const ShowPostElements = ({ elements }) => {
  return elements.map((element, index) =>
    element.original_element_id == null ? (
      <DynamicTag key={element.id + index} type={element.type}>
        {element.text}
      </DynamicTag>
    ) : null
  );
};

export default ShowPostElements;
