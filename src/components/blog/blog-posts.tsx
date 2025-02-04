import { Box } from "@mui/joy";
import LayoutGridPosts from "./grid-layout";
import BlogPostCard, { PublicationCard } from "./post-card";
import { posts } from "./post-data";

function BlogPosts() {
  return (
    <Box sx={{ py: 4 }}>
      <LayoutGridPosts>
        {posts.map((post) => {
          if (post.itemType === "post") {
            return <BlogPostCard key={post.slug} post={post} />;
          } else {
            return <PublicationCard key={post.id} publication={post} />;
          }
        })}
      </LayoutGridPosts>
    </Box>
  );
}

export default BlogPosts;
