import Link from "next/link";
import SignupForm from "../_components/SignupForm";

export default function RegisterPage() {
  return (
    <div className="border border-slate-100 rounded-xl shadow-xl w-9/12 sm:w-8/12 md:w-6/12 lg:w-5/12 p-6 flex flex-col gap-y-4">
      <h1 className="text-center font-bold py-10">ساخت حساب کاربری</h1>
      <SignupForm />
      <div className="text-sm flex flex-col gap-y-2">
        <span>
          ورود به حساب کاربری؟ &nbsp;
          <Link href="/login" className="text-blue-600">
            لاگین
          </Link>
        </span>
        <span>
          فراموشی رمز عبور؟ &nbsp;
          <Link href="/forgot-password" className="text-blue-600">
            دریافت رمز جدید
          </Link>
        </span>
      </div>
    </div>
  );
}
