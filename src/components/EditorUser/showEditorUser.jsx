import Image from "next/image";

export const ShowEditorUser = () => {
  return (
    <div className="flex items-center p-1">
      <div className="relative w-7 h-7 p-1">
        <Image
          src="/images/user.png"
          alt="Picture of the author"
          fill
          sizes=""
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col py-1 px-2">
        <span className="text-sm text-slate-600 flex w-24">محمد پور</span>
        <span className="text-xs text-slate-500">ادیتور</span>
      </div>
    </div>
  );
};
