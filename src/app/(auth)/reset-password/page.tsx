import Link from "next/link";
import ResetPasswordForm from "../_components/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="border border-slate-100 rounded-xl shadow-xl w-9/12 sm:w-8/12 md:w-6/12 lg:w-5/12 p-6 flex flex-col gap-y-2">
      <h1 className="text-center font-bold py-10">فراموشی رمز عبور</h1>
      <ResetPasswordForm />
      <div className="text-sm px-3 flex flex-col gap-y-2 pt-2">
        <p>
          ورود به حساب کاربری؟ &nbsp;
          <Link href="/login" className="text-blue-600">
            لاگین
          </Link>
        </p>
        <p>
          ساخت حساب کاربری؟ &nbsp;
          <Link href="/register" className="text-blue-600">
            ریجیستر
          </Link>
        </p>
      </div>
    </div>
  );
}
