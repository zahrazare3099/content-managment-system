"use client";
import { useSearchParams } from "next/navigation";
import EditPost from "./_components/EditPost";
import ShowPost from "./_components/ShowPost";
import useFetch from "@/hook/useFetch";
import Loader from "@/app/_components/Loader";

const Layout = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { loading, singlePost } = useFetch({ key: id });

  if (loading && !singlePost.length) return <Loader />;
  if (!singlePost.length)
    return (
      <div className="m-6 border border-red-600 bg-red-200 rounded-2xl text-red-600 text-sm py-1 text-center">
        <p>🔴 Go back to Raw Posts and click one of them FIRST !</p>
      </div>
    );
  if (singlePost)
    return (
      <div className="grid grid-cols-2 gap-4 px-2 py-3">
        <ShowPost />
        <EditPost />
      </div>
    );
};

export default Layout;
