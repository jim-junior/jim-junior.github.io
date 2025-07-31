import { Container } from "@mui/joy";
import Header from "@/components/header";

export const metadata = {
  title: "Beingana Jim Junior | About Me",
  description:
    "Welcome to my personal corner on the web! I'm Beingana Jim Junior, a software engineer with a passion for building innovative solutions. Here, you'll find insights into my projects, thoughts on technology, and glimpses of my journey in the tech world.",
};

const Home = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default Home;
