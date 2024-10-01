import { Box } from "@mui/joy";
import LayoutGridPosts from "./grid-layout";
import BlogPostCard from "./post-card";
import { posts } from "./post-data";

function BlogPosts() {
  return (
    <Box sx={{ py: 4 }}>
      <LayoutGridPosts>
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </LayoutGridPosts>
    </Box>
  );
}

export default BlogPosts;
