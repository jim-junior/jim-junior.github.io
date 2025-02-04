import Navbar from "../components/navbar";
import { Container, Divider } from "@mui/joy";
import Header from "../components/blog/header";
import BlogPosts from "../components/blog/blog-posts";
import { Helmet } from "react-helmet-async";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
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
