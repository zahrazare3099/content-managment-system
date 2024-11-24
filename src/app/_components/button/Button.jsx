import Loader from "../Loader";

export const Button = ({ name, type = "submit" }) => {
  return (
    <button
      type={type}
      className={`w-9/12 py-2 my-4 rounded-xl text-sm font-bold text-white ${
        type == "submit"
          ? "bg-indigo-700"
          : type == "edit"
          ? "bg-sky-600"
          : type == "delete"
          ? "bg-red-600"
          : type == "loading"
          ? "bg-orange-400"
          : null
      }`}
    >
      {type == "loading" ? <Loader /> : null} {name}
    </button>
  );
};
