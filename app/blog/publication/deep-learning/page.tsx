import PublicationDetailPage from "@/components/publication";
import { DeepLearningPublication } from "../../post-data";

export const metadata = {
  title: "Understanding Deep Learning | Beingana Jim Junior",
  description:
    "Personal Notes curated as i study deep learning via the Understanding Deep Learning Book. ",
};

const PublicationPage = () => {
  return <PublicationDetailPage publication={DeepLearningPublication} />;
};

export default PublicationPage;
