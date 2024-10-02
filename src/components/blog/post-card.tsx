import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { Link as JoyLink } from "@mui/joy";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";
import { format } from "date-fns";
import { Post } from "./post-data";
import { Link } from "react-router-dom";

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <Card sx={{ borderRadius: 0 }}>
      <CardOverflow>
        <AspectRatio>
          <img src={post.image} />
          <Typography
            sx={{
              position: "absolute",
              zIndex: 1,
              fontWeight: "xl",
              left: "1rem",
              top: "1rem",
              color: "white",
              textShadow: "0 0.05em 0.2em rgba(0,0,0,0.5)",
            }}
          >
            {post.cartegory}
          </Typography>
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ gap: 1 }}>
        <Typography level="body-xs">
          {format(new Date(post.date), "MMMM dd, yyyy")}
        </Typography>
        <Typography level="title-lg">{post.title}</Typography>
        <Typography level="body-sm">{post.description}</Typography>
      </CardContent>
      <JoyLink
        overlay
        level="body-sm"
        fontWeight="lg"
        component={Link}
        to={`/blog/${post.slug}`}
        startDecorator={
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </SvgIcon>
        }
      >
        Read more
      </JoyLink>
    </Card>
  );
}
