export default function Card({
  title,
  post_title,
  pre_title,
  original_post_id,
  id,
}) {
  const cardStyle =
    "p-3 flex flex-col gap-y-2 bg-slate-100 border border-slate-300 shadow-md rounded-lg text-sm";
  // const router = useRouter();

  return (
    <div
      className={`${cardStyle} ${
        original_post_id == null ? null : "text-end items-end"
      }
        ${
          id && original_post_id == null
            ? "cursor-pointer"
            : "cursor-not-allowed"
        }
      `}
      // onClick={() =>
      //   id && original_post_id == null
      //     ? router.push(`edit?${new URLSearchParams({ id }).toString()}`)
      //     : null
      // }
    >
      <h1 className="text-zinc-500 font-thin">{post_title}</h1>
      <div
        className={`text-slate-600 font-bold ${
          original_post_id !== null ? "" : null
        }`}
      >
        <p>
          {original_post_id
            ? pre_title
              ? `: ${pre_title?.slice(0, -1)}`
              : null
            : pre_title}
        </p>
        <p>{title}</p>
      </div>
    </div>
  );
}
