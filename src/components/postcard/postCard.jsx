import Link from "next/link";
import styles from "./postcard.module.css";
import Image from "next/image";

const PostCard = ({ post }) => {
  // console.log(post.slug);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="post" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>2024/01/01</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`blog/${post.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
