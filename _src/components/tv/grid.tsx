import { Box } from "@mui/joy";
import LayoutGridPosts from "../blog/grid-layout";
import TVShowCard from "./tvcard";
import { showsList } from "./list";

function TVShowList() {
  return (
    <Box sx={{ py: 4 }}>
      <LayoutGridPosts>
        {showsList.map((post) => {
          return <TVShowCard key={post.title} show={post} />;
        })}
      </LayoutGridPosts>
    </Box>
  );
}

export default TVShowList;
