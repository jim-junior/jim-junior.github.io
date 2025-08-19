import { Divider } from "@mui/joy";
import PublicationDetailPage from "@/components/publication";

const DeepLearningPublication = {
  id: "deep-learning",
  itemType: "publication",
  title: "Understanding Deep Learning",
  description:
    "A series of blog post explaining Different deep learning concepts",
  longdescritpion:
    "Personal Notes curated as I study deep learning via the Understanding Deep Learning Book.",
  posts: [
    {
      title: "An Introduction to Supervised Learning",
      description:
        "In this article we shall take a look at Supervised Learning models, how they work and different concepts associated with it.",
      date: "2025-03-08",
      slug: "an-introduction-to-supervised-learning",
      image: "/sl.png",
      cartegory: "DEEP LEARNING",
      centered: false,
      itemType: "post",
    },
    {
      title: "Shallow Neural Networks",
      description:
        "In this article we shall take a look at Shallow Neural Networks",
      date: "2025-07-22",
      slug: "shallow-neural-networks",
      image: "https://scipython.com/media/old_blog/shallow-neural-net/snn.png",
      cartegory: "DEEP LEARNING",
      centered: false,
      itemType: "post",
    },
  ],
};

export const metadata = {
  title: "Understanding Deep Learning | Beingana Jim Junior",
  description:
    "Personal Notes curated as i study deep learning via the Understanding Deep Learning Book. ",
};

const PublicationPage = () => {
  return (
    <>
      <Divider />
      <PublicationDetailPage publication={DeepLearningPublication} />
    </>
  );
};

export default PublicationPage;
