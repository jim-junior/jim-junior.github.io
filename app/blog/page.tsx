"use client";
import { Container, Divider } from "@mui/joy";
import Header from "./header";
import BlogPosts from "./blog-posts";

const BlogPage = () => {
  return (
    <>
      <Header />
      <Divider />
      <BlogPosts />
    </>
  );
};

export default BlogPage;
