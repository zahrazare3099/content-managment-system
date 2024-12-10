import Loader from "../Loader";

export const Button = ({ name, type = "submit", clickButtonHandler }) => {
  return (
    <button
      type={type}
      className={` ${
        type == "submit"
          ? "bg-indigo-700 w-9/12 my-4 py-2 text-white font-bold rounded-xl"
          : type == "edit"
          ? "bg-blue-600 w-9/12 my-4 py-2 text-white font-bold rounded-xl"
          : type == "delete"
          ? "bg-red-600 w-9/12 my-4 py-2 text-white font-bold rounded-xl"
          : type == "loading"
          ? "bg-orange-400  w-9/12 my-4 py-2 text-white font-bold rounded-xl"
          : type == "editor"
          ? "text-slate-700 text-xs font-thin p-1 min-w-6 flex justify-center items-center hover:bg-slate-300 rounded-lg"
          : null
      }    `}
      onClick={clickButtonHandler}
    >
      {type == "loading" ? <Loader /> : null} {name}
    </button>
  );
};
