import React from "react";

type AuthInputPropsType = {
  inputType: "email" | "password";
  inputName: string;
  inputID?: string | number;
  placeHolder: string;
  inputStyle?: string;
  label: string;
};

export default function AuthInput({
  inputID,
  inputName,
  inputType,
  placeHolder,
  inputStyle,
  label,
}: AuthInputPropsType) {
  return (
    <div className="flex flex-col gap-y-2 text-sm">
      <label className="px-2" htmlFor={inputName}>
        {label}
      </label>
      <input
        className={`${inputStyle} px-2 rounded-xl py-1 w-full`}
        type={inputType}
        name={inputName}
        id={`${Math.random()}${inputID}`}
        placeholder={placeHolder}
        required
      />
    </div>
  );
}
