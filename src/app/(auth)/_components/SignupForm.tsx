"use client";
import { Button } from "@/components/button/Button";
import { useState } from "react";
import signupAction from "../_actions/signupAction";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleSubmitSignupForm = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    try {
      const formData = new FormData(e.currentTarget);
      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");

      if (!username || !password || !email) {
        return setErrorMessage("پر کردن تمامی فیلد ها الزامی است");
      } else {
        const result = await signupAction(formData);
        if (result.status !== "success") {
          toast.error(result.status);
          throw new Error(result.status);
        }
        toast.success("برای ساخت حساب کاربری، ایمیل خود را چک فرمایید");
        router.push("/login");
      }
    } catch (error: any) {
      setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmitSignupForm(e)}
      className=" flex flex-col justify-center gap-y-4"
    >
      <div className="flex flex-col gap-y-2 text-sm">
        <label className="px-2" htmlFor="username">
          نام کاربری خود را وارد نمایید
        </label>
        <input
          type="text"
          name="username"
          className="px-2 rounded-xl py-1 w-full border border-indigo-700 focus:outline focus:outline-indigo-700 focus:outline-1"
          id="usernameForLogin"
          placeholder="user name"
          autoComplete="false"
        />
      </div>
      <div className="flex flex-col gap-y-2 text-sm">
        <label className="px-2" htmlFor="email">
          ایمیل خود را وارد نمایید
        </label>
        <input
          type="email"
          name="email"
          className="px-2 rounded-xl py-1 w-full border border-indigo-700 focus:outline focus:outline-indigo-700 focus:outline-1"
          id="emailForLogin"
          placeholder="example@gmail.com"
          autoComplete="false"
        />
      </div>
      <div className="flex flex-col gap-y-2 text-sm">
        <label className="px-2" htmlFor="password">
          پسورد خود را وارد نمایید
        </label>
        <input
          type="password"
          name="password"
          className="px-2 rounded-xl py-1 w-full border border-indigo-700 focus:outline focus:outline-indigo-700 focus:outline-1"
          id="passwordForLogin"
          placeholder="1234"
          autoComplete="false"
        />
      </div>

      <Button styleType="submit" name="ورود" loading={loading} />

      {errorMessage !== null ? (
        <span className="text-red-500 font-bold text-sm pb-3">
          {errorMessage}*
        </span>
      ) : null}
    </form>
  );
}
