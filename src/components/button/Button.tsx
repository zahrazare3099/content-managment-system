import Loader from "@/components/loader/Loader";

type ButtonPropsType = {
  name: string;
  styleType: "submit" | "edit" | "loading" | "delete";
  clickButtonHandler?: () => void;
  loading?: boolean;
};
export const Button = ({
  name,
  clickButtonHandler,
  loading,
  styleType = "submit",
}: ButtonPropsType) => {
  return (
    <button
      disabled={loading}
      type="submit"
      className={`w-full mt-2 text-sm text-nowrap h-10 ${
        styleType == "submit"
          ? "bg-indigo-700 w-9/12 py-2 text-white font-bold rounded-xl"
          : styleType == "edit"
          ? "bg-blue-600 w-9/12 py-2 text-white font-bold rounded-xl"
          : styleType == "delete"
          ? "bg-red-600 w-9/12 py-2 text-white font-bold rounded-xl"
          : styleType == "loading"
          ? "bg-orange-400  w-9/12 py-2 text-white font-bold rounded-xl"
          : styleType == "editor"
          ? "text-slate-700 text-xs font-thin p-1 min-w-6 flex justify-center items-center hover:bg-slate-300 rounded-lg"
          : null
      }    `}
      onClick={clickButtonHandler}
    >
      {loading ? <Loader /> : name}
    </button>
  );
};
