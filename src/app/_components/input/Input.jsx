export const Input = ({
  name,
  label,
  value,
  onChange,
  errors = "",
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-1 justify-center w-9/12">
      <label htmlFor={name} className="px-2 font-serif text-slate-800">
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="px-2 py-1 outline-none rounded-xl"
      />
      {/* <p className="error">{errors.name && errors.name.message}</p> */}
    </div>
  );
};
