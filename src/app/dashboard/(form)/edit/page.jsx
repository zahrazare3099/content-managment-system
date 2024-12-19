import Link from "next/link";

const EditPage = () => {
  return (
    <div dir="rtl" className="flex flex-wrap justify-center gap-x-3 p-5">
      <h2 className="text-xl font-bold">ابتدا پستی را برای ادیت انتخاب کنید</h2>
      👈
      <h3 className="text-lg text-blue-600 font-sans">
        <Link className="underline underline-offset-4" href="/dashboard/posts">
          مشاهده پست ها
        </Link>
      </h3>
    </div>
  );
};

export default EditPage;
