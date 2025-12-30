import { Divider } from "@mui/joy";
import PublicationDetailPage from "@/components/publication";
import { DistributedSystemsPublication } from "../../post-data";

export const metadata = {
  title: DistributedSystemsPublication.title + " | Beingana Jim Junior",
  description:
    "Personal Notes curated as i study deep learning via the Understanding Deep Learning Book. ",
};

const PublicationPage = () => {
  return (
    <>
      <Divider />
      <PublicationDetailPage publication={DistributedSystemsPublication} />
    </>
  );
};

export default PublicationPage;
