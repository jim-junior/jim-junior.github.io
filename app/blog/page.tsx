import { Container, Divider } from "@mui/joy";
import Header from "./header";
import BlogPosts from "./blog-posts";

export const metadata = {
  title: "Blog | Beingana Jim Junior",
  description:
    "Explore my blog for insights on software development, technology trends, and personal projects. Join me on a journey of learning and innovation.",
};

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
