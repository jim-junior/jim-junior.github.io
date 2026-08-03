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
    <div className="relative left-1/2 w-[calc(100vw-3rem)] max-w-6xl -translate-x-1/2 [font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <Header />
      <BlogPosts />
    </div>
  );
}
