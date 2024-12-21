import React from "react";

const DynamicTag = ({ type, children }) => {
  const Tag = type;

  // Check if Tag is a valid function or string
  if (typeof Tag !== "string" && typeof Tag !== "function") {
    console.error(`Invalid tag type: ${type}`);
    return null;
  }
  return (
    <Tag className="bg-slate-100 p-2 shadow-md rounded-lg">{children}</Tag>
  );
};

export default DynamicTag;
