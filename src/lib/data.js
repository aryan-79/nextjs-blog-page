import { Post, User } from "./model";
import { connectDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
// const posts = [
//   { id: 1, title: "Post1", desc: ".....", userId: 1 },
//   { id: 2, title: "Post2", desc: ".....", userId: 1 },
//   { id: 3, title: "Post3", desc: ".....", userId: 2 },
//   { id: 4, title: "Post4", desc: ".....", userId: 2 },
// ];
export const getPosts = async () => {
  try {
    connectDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts");
  }
};
export const getPost = async (slug) => {
  noStore();
  try {
    connectDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch post");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch user");
  }
};
export const getUsers = async () => {
  try {
    connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch users");
  }
};
