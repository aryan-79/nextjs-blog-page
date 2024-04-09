import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
import PostCard from "@/components/postcard/postCard";
export const metadata = {
  title: "Blog",
  description: "Blog page",
};

// fetch data with an API
const getData = async () => {
  const res = await fetch("https://nextjs-blog-page-two.vercel.app//api/blog", {
    next: { revalidate: 2000 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
// const deletePost = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", {method: "DELETE"
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const BlogPage = async () => {
  // fetch with an api
  const posts = await getData();
  // fetch without api
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
