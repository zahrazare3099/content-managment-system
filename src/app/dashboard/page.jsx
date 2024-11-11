"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/create");
  }, [router]);

  return <div>Redirecting...</div>;
};

export default DashboardIndex;
