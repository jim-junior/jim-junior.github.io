import type { Metadata } from "next";
import Header from "./header";
import BlogPosts from "./blog-posts";

export const metadata: Metadata = {
  title: "Blog | Beingana Jim Junior",
  description:
    "Long-form writing about software engineering, cloud-native systems, AI, Linux, and lessons learned while building.",
};

export default function BlogPage() {
  return (
    <div className="w-full text-[#1a1c1d]">
      <Header />
      <BlogPosts />
    </div>
  );
}
