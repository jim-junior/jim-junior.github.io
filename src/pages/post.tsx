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
      <Container
        sx={{
          mt: 10,
          mb: 10,
          p: 5,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
          width: "100%",
        }}
      >
        {post.content}
      </Container>
    </>
  );
};

export default BlogPostPage;
