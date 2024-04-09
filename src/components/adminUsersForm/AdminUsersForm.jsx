"use client";
import styles from "./adminUsersForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";
const AdminUsersForm = ({ userId }) => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Users</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="Enter email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <label htmlFor="role">Select Role</label>
      <select>
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUsersForm;
