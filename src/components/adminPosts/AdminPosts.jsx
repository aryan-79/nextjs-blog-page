import { getPosts } from "@/lib/data";
import styles from "./adminPost.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPost = async () => {
  const posts = await getPosts();
  // const deltePostWithId =async (id) => {
  //   "use server"
  //   return deletePost(id);
  // };
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noavatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{post.title}</span>
          </div>
          {/* <form action={() => deltePostWithId(post.id)}> */}
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.delButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPost;
