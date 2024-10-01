import Navbar from "../components/navbar";
import { Container, Divider } from "@mui/joy";
import Header from "../components/blog/header";
import BlogPosts from "../components/blog/blog-posts";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <Divider />
        <BlogPosts />
      </Container>
    </>
  );
};

export default BlogPage;
