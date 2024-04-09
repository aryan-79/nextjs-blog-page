"use client";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="password" />
      <input type="password" name="passwordRe" placeholder="confirm password" />
      <button>Register</button>
      {state?.error}
      <Link href="/login">Have an account?</Link>
    </form>
  );
};

export default RegisterForm;
