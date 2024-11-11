import Image from "next/image";

export const ShowEditorUser = () => {
  return (
    <div className="flex flex-row-reverse items-center p-1">
      <div className="relative w-7 h-7 p-1">
        <Image
          src="/images/user.png"
          alt="Picture of the author"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col text-end items-end py-1 px-2">
        <span className="text-sm text-slate-600">Nikol kidman</span>
        <span className="text-xs text-slate-500">Editor</span>
      </div>
    </div>
  );
};
