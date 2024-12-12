"use client";
import React from "react";

export const CustomInput = React.forwardRef(
  ({ error, label, onChange, value }, ref) => (
    <div className="flex flex-col gap-1 justify-center w-full">
      <label htmlFor={label} className="px-2 font-serif text-slate-800">
        {label}
      </label>
      <textarea
        ref={ref}
        onChange={onChange}
        value={value}
        rows={1}
        className={`px-2 py-1 outline-none rounded-xl border overflow-clip resize-none  ${
          error ? "border-red-500" : "border-gray-300 focus:border-indigo-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  )
);
