import styles from "./singlepost.module.css";
import Image from "next/image";
import { getPost, getUser } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const single_page = async ({ params }) => {
  const { slug } = params;
  // console.log(slug);
  const post = await getPost(slug);
  // console.log(post);
  const user = await getUser(post.userId);
  console.log("user  ", user);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} fill alt="post image" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src={user.img}
            alt="avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>{user.username}</div>
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>
              {post.createdAt.toISOString().split("T")[0]}
            </div>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default single_page;
