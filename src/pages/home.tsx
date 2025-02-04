import { Container } from "@mui/joy";
import Header from "../components/homepage/header";
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet-async";

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
