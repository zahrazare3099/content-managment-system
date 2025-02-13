import Link from "next/link";
import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="border border-slate-100 rounded-xl shadow-xl w-9/12 sm:w-8/12 md:w-6/12 lg:w-5/12 p-6 flex flex-col gap-y-4">
      <h1 className="text-center font-bold py-10">ورود به حساب کاربری</h1>
      <LoginForm />
      <div className="text-sm flex flex-col gap-y-2">
        <p>
          ساخت حساب کاربری؟ &nbsp;
          <Link href="/register" className="text-blue-600">
            ریجیستر
          </Link>
        </p>
        <p>
          فراموشی رمز عبور؟ &nbsp;
          <Link href="/forgot-password" className="text-blue-600">
            دریافت رمز جدید
          </Link>
        </p>
      </div>
    </div>
  );
}
