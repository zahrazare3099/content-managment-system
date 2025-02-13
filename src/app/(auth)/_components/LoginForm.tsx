"use client";

import { Button } from "@/components/button/Button";
import { useState } from "react";
import loginAction from "../_actions/loginAction";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// TODO: fix bug in invalid credential
export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleSubmitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      if (!password || !email) {
        return setErrorMessage("پر کردن تمامی فیلد ها الزامی است");
      } else {
        const result = await loginAction(formData);
        if (result.status !== "success") {
          throw new Error(result.status);
        }
        toast.success("شما با موفقیت وارد حساب کاربری خود شدید.");
        router.push("/");
      }
    } catch (error: any) {
      setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmitLoginForm(e)}
      className=" flex flex-col justify-center gap-y-4"
    >
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
