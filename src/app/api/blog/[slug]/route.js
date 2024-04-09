import { Post } from "@/lib/model";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectDB();
    const post = await Post.findOne(slug);
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    await Post.deleteOne(slug);
    return NextResponse.json("post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post");
  }
};
