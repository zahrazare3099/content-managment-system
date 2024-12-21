function ShowPost({ post, children }) {
  return (
    <div dir="ltr">
      {post?.map(
        (post) =>
          post.original_post_id === null && (
            <div className="flex flex-col gap-y-4 text-sm" key={post.id}>
              <ShowItem label="Title" item={post.title} />
              <ShowItem label="Sub Title" item={post.pre_title} />
              <ShowItem label="Post Title" item={post.post_title} />
              <hr className="border-slate-300" />
              {children}
            </div>
          )
      )}
    </div>
  );
}
export default ShowPost;

export const ShowItem = ({ label, item }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-slate-500 px-2 font-sans">{label}</label>
      <p className="bg-slate-100 p-2 shadow-md rounded-lg">{item ?? "_ _ _"}</p>
    </div>
  );
};
