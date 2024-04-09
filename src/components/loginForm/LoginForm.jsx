"use client";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  // useEffect(() => {
  //     state?.success && router.push('/')
  // },[state, router])
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="Enter username" />
      <input type="password" name="password" placeholder="Enter password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">Don't have an account?</Link>
    </form>
  );
};

export default LoginPage;
