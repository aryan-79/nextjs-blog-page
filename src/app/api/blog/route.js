import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";
import { Post } from "@/lib/model";
export const GET = async (request) => {
  try {
    connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch posts");
  }
};
