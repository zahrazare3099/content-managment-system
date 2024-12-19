import useGetPost from "@/hook/useGetPost";
import Loader from "@/app/_components/Loader";

const Layout = async ({ params, children }) => {
  const { id } = await params;
  const post = await useGetPost(id);

  if (!post.length) return <Loader />;
  return <div className="grid grid-cols-2 gap-4 px-2 py-3">{children}</div>;
};

export default Layout;