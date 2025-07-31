import { Container } from "@mui/joy";
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet-async";
import Header from "../components/homepage/header";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Beingana Jim Junior | About Me</title>
      </Helmet>
      <Navbar />
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default Home;
