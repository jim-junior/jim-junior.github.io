import Navbar from "../components/navbar";
import { Box, Container, IconButton, Tooltip } from "@mui/joy";
import { Post } from "../components/blog/post-data";
import { Helmet } from "react-helmet-async";
import { FaDev, FaMedium, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const BlogPostPage = ({ post }: { post: Post }) => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  return (
    <>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <Navbar />
      <Box
        sx={{
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Tooltip placement="bottom" title="Print/Save PDF">
          <IconButton
            sx={{
              mx: 1,
              fontSize: "2rem",
            }}
            onClick={() => {
              reactToPrintFn();
            }}
          >
            <FaPrint />
          </IconButton>
        </Tooltip>
        <Tooltip placement="bottom" title="Read Post on Dev.to">
          <IconButton
            sx={{
              mx: 1,
              fontSize: "2rem",
            }}
          >
            <FaDev />
          </IconButton>
        </Tooltip>
        <Tooltip placement="bottom" title="Read Post on Medium">
          <IconButton
            sx={{
              mx: 1,
              fontSize: "2rem",
            }}
          >
            <FaMedium />
          </IconButton>
        </Tooltip>
      </Box>
      <Container
        sx={{
          mt: 5,
          mb: 10,
          p: 5,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
          width: "100%",
          textAlign: post.centered ? "center" : "inherit",
        }}
        ref={contentRef}
      >
        {post.content}
      </Container>
    </>
  );
};

export default BlogPostPage;
