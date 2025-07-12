import Navbar from "../components/navbar";
import { Container } from "@mui/joy";
import Header from "../components/tv/header";
import { Helmet } from "react-helmet-async";
import Projects from "../components/tv/grid";

const TVCartlogPage = () => {
  return (
    <>
      <Helmet>
        <title>TV Catarlog</title>
      </Helmet>
      <Navbar />
      <Container>
        <Header />
        <Projects />
      </Container>
    </>
  );
};

export default TVCartlogPage;
