import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSessionStorage } from "../helper/sessionStorage";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const user = getSessionStorage("user");
    if (!user) {
      router.push("/"); // Chuyển hướng nếu chưa đăng nhập
    }
  }, []);
};

export default useAuth;
