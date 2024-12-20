export default function Card({
  title,
  post_title,
  pre_title,
  original_post_id,
  id,
}) {
  const cardStyle =
    "p-3 flex flex-col justify-between gap-y-1 bg-slate-100 border border-slate-300 shadow-md rounded-lg text-sm";

  return (
    <div
      className={`${cardStyle} min-h-32 h-full ${
        original_post_id == null ? null : "text-end items-end"
      }
        ${
          id && original_post_id == null
            ? "cursor-pointer"
            : "cursor-not-allowed"
        }
      `}
    >
      <h1 className="text-slate-600 font-bold">{post_title ?? "--"}</h1>
      <div
        className={`text-zinc-500 font-thin ${
          original_post_id !== null ? "" : null
        }`}
      >
        <p className="font-bold">
          {original_post_id
            ? pre_title
              ? `: ${pre_title?.slice(0, -1)}`
              : null
            : pre_title}
        </p>
        <p>{title ?? "--"}</p>
      </div>
    </div>
  );
}
