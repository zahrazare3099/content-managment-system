import React from "react";

const DynamicTag = ({ type, children }) => {
  const Tag = type;

  // Check if Tag is a valid function or string
  if (typeof Tag !== "string" && typeof Tag !== "function") {
    console.error(`Invalid tag type: ${type}`);
    return null;
  }
  return <Tag>{children}</Tag>;
};

export default DynamicTag;
