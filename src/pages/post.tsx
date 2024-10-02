import Navbar from "../components/navbar";
import { Container } from "@mui/joy";
import { Post } from "../components/blog/post-data";
import { Helmet } from "react-helmet-async";

const BlogPostPage = ({ post }: { post: Post }) => {
  return (
    <>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <Navbar />
      <Container>{post.content}</Container>
    </>
  );
};

export default BlogPostPage;
