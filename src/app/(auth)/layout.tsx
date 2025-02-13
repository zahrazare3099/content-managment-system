import React from "react";

type FormLayoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: FormLayoutProps) {
  return (
    <div className="w-full h-screen flex justify-center items-start mt-12">
      {children}
    </div>
  );
}
