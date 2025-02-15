"use client";
import { Button } from "@/components/button/Button";
import { useState } from "react";
import forgetpasswordAction from "../_actions/forgetpasswordAction";
import toast from "react-hot-toast";

export default function ForgetpasswordForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleForgetpassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    setErrorMessage(null);
    try {
      const result = await forgetpasswordAction(formData);
      if (result.status == "success") {
        return toast.success("لینک بازیابی پسورد برای ایمیل شما ارسال شد");
      } else {
        return setErrorMessage(result.status);
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={(e) => handleForgetpassword(e)}
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
          id="emailForForgetpassword"
          placeholder="example@gmail.com"
        />
      </div>

      <Button styleType="submit" name="تایید" loading={loading} />
      {errorMessage !== null ? (
        <span className="text-red-500 font-bold text-sm">{errorMessage}*</span>
      ) : null}
    </form>
  );
}
