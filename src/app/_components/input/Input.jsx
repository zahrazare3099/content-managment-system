export const Input = ({
  name,
  title,
  value,
  setValue,
  errors = "",
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="px-2 font-serif text-slate-800">
        {title}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={setValue}
        className="px-2 py-1 outline-none rounded-xl"
      />
      {/* <p className="error">{errors.name && errors.name.message}</p> */}
    </div>
  );
};
