export const AddMoreContent = ({ children }) => {
  return (
    <div className="flex ">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="Content" className="px-1 font-serif text-slate-800">
          Content
        </label>
        <span className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {children}
        </span>
      </div>
    </div>
  );
};
