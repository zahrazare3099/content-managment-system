"use client";

import { useEffect, useRef } from "react";

export const Input = ({ name, label, value, onChange, type = "text" }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${Math.max(
        10,
        inputRef.current.scrollHeight
      )}px`;
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-1 justify-center w-full">
      <label htmlFor={name} className="px-2 font-serif text-slate-800">
        {label}
      </label>
      <textarea
        ref={inputRef}
        type={type}
        value={value || ""}
        name={name}
        onChange={onChange}
        className="px-2 py-1 outline-none rounded-xl resize-none"
      />
      {/* <p className="error">{errors.name && errors.name.message}</p> */}
    </div>
  );
};
