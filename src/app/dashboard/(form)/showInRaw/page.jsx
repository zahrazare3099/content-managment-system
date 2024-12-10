"use client";
import Card from "@/app/_components/card/Card";
import Loader from "@/app/_components/Loader";
import useFetch from "@/hook/useFetch";

const ShowInRaw = () => {
  const { data: posts, loading } = useFetch({ key: "" });

  if (loading) return <Loader />;
  return (
    <div className="p-5 grid grid-cols-2 gap-4">
      {posts?.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
};

export default ShowInRaw;
