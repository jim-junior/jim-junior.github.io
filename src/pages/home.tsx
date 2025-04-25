import { Container } from "@mui/joy";
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet-async";
import LockedIn from "../components/homepage/LockedIn";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Beingana Jim Junior | About Me</title>
      </Helmet>
      <Navbar />
      <Container>
        <LockedIn />
      </Container>
    </>
  );
};

export default Home;
