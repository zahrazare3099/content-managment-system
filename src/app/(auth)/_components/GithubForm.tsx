"use client";
import { useTransition } from "react";
import loginGithub from "../_actions/loginGithub";

export default function GithubForm() {
  const [isPending, startTransition] = useTransition();

  const githubLoginHandler = async () => {
    startTransition(async () => {
      await loginGithub();
    });
  };

  return (
    <button
      className="bg-black text-white font-bold text-sm rounded-xl py-2"
      type="submit"
      disabled={isPending}
      onClick={githubLoginHandler}
    >
      {isPending ? "در حال انتقال..." : "ورود با اکانت گیت هاب"}
    </button>
  );
}
