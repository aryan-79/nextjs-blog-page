import { handleGithubLogin } from "@/lib/action";
import { login } from "@/lib/action";
import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./login.module.css";
const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin} className={styles.form}>
          <button className={styles.button}>Login with github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
