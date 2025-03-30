import Navbar from "../components/navbar";
import {
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,
  Button,
} from "@mui/joy";
import { Post } from "../components/blog/post-data";
import { Helmet } from "react-helmet-async";
import { FaDev, FaFilePdf, FaMedium, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Audio } from "reactjs-media";
import { MdOutlineOpenInNew } from "react-icons/md";

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
      {post.audio && (
        <Box
          sx={{
            mx: "auto",
            textAlign: "center",
            mt: 5,
          }}
        >
          <Typography>Listen to this article</Typography>
          <Audio src={post.audio} />
        </Box>
      )}
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

const PremiumBlogPostPage = ({ post }: { post: Post }) => {
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
            <FaFilePdf />
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
      {post.audio && (
        <Box
          sx={{
            mx: "auto",
            textAlign: "center",
            mt: 5,
          }}
        >
          <Typography>Listen to this article</Typography>
          <Audio src={post.audio} />
        </Box>
      )}
      <Container
        sx={{
          mt: 5,
          mb: 10,
          p: 5,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
          width: "100%",
          height: "200vh",
          textAlign: post.centered ? "center" : "inherit",
          position: "relative",
          overflow: "hidden",
        }}
        ref={contentRef}
      >
        {post.content}
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100%",
          position: "fixed",
          top: "50%",
          background:
            "linear-gradient(to top, #fff, #fff, #fff, #fff,#fff, #ffffff69, #ffffff00)",
          borderRadius: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Full article is published on <Typography>Medium</Typography>
        </Typography>
        <Button
          variant="solid"
          color="primary"
          sx={{
            mt: 2,
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          component="a"
          href={post.medium}
          target="_blank"
          startDecorator={<FaMedium />}
          endDecorator={<MdOutlineOpenInNew />}
        >
          Open Medium
        </Button>
      </Box>
    </>
  );
};

export default function BlogPost({ post }: { post: Post }) {
  if (post.premium) {
    return <PremiumBlogPostPage post={post} />;
  } else {
    return <BlogPostPage post={post} />;
  }
}
