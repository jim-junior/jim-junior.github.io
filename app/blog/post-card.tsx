import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { Box, Link as JoyLink, Stack } from "@mui/joy";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";
import { format } from "date-fns";
import { Post, Publication } from "./post-data";
import Link from "next/link";

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
        href={`/blog/${post.slug}`}
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

export const PublicationCard = ({
  publication,
}: {
  publication: Publication;
}) => {
  // Display at most 3 posts in the stack
  const displayPosts = publication.posts?.slice(0, 3) || [];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      {/* Background overlay effect */}
      <Box
        sx={{
          position: "absolute",
          top: -10,
          left: -10,
          right: -10,
          bottom: -10,
          background:
            "linear-gradient(45deg, var(--joy-palette-primary-softBg), var(--joy-palette-primary-200))",
          opacity: 0.1,
          borderRadius: "xl",
          zIndex: 0,
        }}
      />

      {/* Main publication card */}
      <Card
        variant="outlined"
        sx={{
          position: "relative",
          zIndex: 3,
          backgroundColor: "background.surface",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%)",
            zIndex: -1,
          },
        }}
      >
        <CardContent>
          <Typography level="title-lg" sx={{ mb: 1 }}>
            {publication.title}
          </Typography>
          <Typography level="body-sm" sx={{ mb: 2 }}>
            {publication.description}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography level="body-xs">{displayPosts.length} posts</Typography>
            <JoyLink
              component={Link}
              href={`/blog/publication/${publication.id}`}
              endDecorator={
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
              Explore Series
            </JoyLink>
          </Stack>
        </CardContent>
      </Card>

      {/* Stacked blog post previews */}
      {displayPosts.map((post, index) => (
        <Card
          key={post.slug}
          variant="outlined"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 2 - index,
            transform: `translate(${index * 8}px, ${index * 8}px)`,
            opacity: 1 - index * 0.15,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              transform: `translate(${index * 8}px, ${index * 8 - 4}px)`,
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(180deg, 
                rgba(255,255,255,${0.9 - index * 0.2}) 0%, 
                rgba(255,255,255,${0.7 - index * 0.2}) 100%)`,
              zIndex: -1,
            },
          }}
        >
          <CardContent>
            <Typography level="title-sm" sx={{ mb: 0.5 }}>
              {post.title}
            </Typography>
            <Typography
              level="body-xs"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
