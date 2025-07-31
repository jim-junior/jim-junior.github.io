import Navbar from "../components/navbar";
import { Container, Divider } from "@mui/joy";
import { Helmet } from "react-helmet-async";
import PublicationDetailPage from "../components/publication/page";
import { Publication } from "../components/blog/post-data";

const PublicationPage = ({ publication }: { publication: Publication }) => {
  return (
    <>
      <Helmet>
        <title>Publication</title>
      </Helmet>
      <Navbar />
      <Container>
        <Divider />
        <PublicationDetailPage publication={publication} />
      </Container>
    </>
  );
};

export default PublicationPage;
