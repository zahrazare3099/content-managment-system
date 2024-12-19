function ShowPost({ post, children }) {
  return (
    <div className="flex flex-col gap-y-2 text-sm">
      {post?.map(
        (post) =>
          post.original_post_id === null && (
            <div
              key={post.id}
              className="flex flex-col gap-3 bg-slate-100 p-2 shadow-md rounded-lg"
            >
              <div>
                <label className="text-slate-500">Title</label>
                <p>{post.title ?? "_ _ _"}</p>
              </div>
              <hr />
              <div>
                <label className="text-slate-500">Sub Title</label>
                <p>{post.pre_title ?? "_ _ _"}</p>
              </div>
              <hr />
              <div>
                <label className="text-slate-500">Post Title</label>
                <p>{post.post_title ?? "_ _ _"}</p>
              </div>
              <hr />
              {children}
            </div>
          )
      )}
    </div>
  );
}
export default ShowPost;
