import { About } from "./bio";
import { Contact } from "./contact";
import Hero from "./hero";
import { Hobbies } from "./hobbies";
import { ProjectSpotlight } from "./spotlight";

export const metadata = {
  title: "Beingana Jim Junior | About Me",
  description:
    "Welcome to my personal corner on the web! I'm Beingana Jim Junior, a software engineer with a passion for building innovative solutions. Here, you'll find insights into my projects, thoughts on technology, and glimpses of my journey in the tech world.",
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ProjectSpotlight />
      <Hobbies />
      <Contact />
    </>
  );
};

export default Home;
