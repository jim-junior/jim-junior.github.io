import Navbar from "../components/navbar";
import { Container, Divider } from "@mui/joy";
import BlogPosts from "../components/blog/blog-posts";
import { Helmet } from "react-helmet-async";
import PublicationDetailPage from "../components/publication/page";

const PublicationPage = ({ publication }) => {
  return (
    <>
      <Helmet>
        <title>Publication</title>
      </Helmet>
      <Navbar />
      <Container>
        <Divider />
        <PublicationDetailPage />
      </Container>
    </>
  );
};

export default PublicationPage;
