"use client";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";
const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Enter title" />
      <input type="text" name="slug" placeholder="Enter slug" />
      <textarea
        rows={10}
        type="text"
        name="desc"
        placeholder="Enter description"
      />
      <input type="text" name="img" placeholder="Enter img link" />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
