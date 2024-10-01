import Navbar from "../components/navbar";
import { Container } from "@mui/joy";
import { Post } from "../components/blog/post-data";

const BlogPostPage = ({ post }: { post: Post }) => {
  return (
    <>
      <Navbar />
      <Container>{post.content}</Container>
    </>
  );
};

export default BlogPostPage;
