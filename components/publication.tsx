import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Grid from "@mui/joy/Grid";
import { Link as JoyLink } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import { FaChevronRight, FaHome } from "react-icons/fa";
import Link from "next/link";

export const PublicationDetailPage = ({
  publication,
}: {
  publication: any;
}) => {
  // In a real app, you would fetch the publication data based on the id

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", p: 3 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs size="sm" separator={<FaChevronRight />} sx={{ mb: 2 }}>
        <JoyLink
          component={Link}
          href="/"
          underline="none"
          color="neutral"
          startDecorator={<FaHome />}
        >
          Home
        </JoyLink>
        <JoyLink component={Link} href="/blog" underline="none" color="neutral">
          Blog
        </JoyLink>
        <Typography color="primary">{publication.title}</Typography>
      </Breadcrumbs>

      {/* Publication Header */}
      <Card
        variant="outlined"
        sx={{
          mb: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardContent sx={{ position: "relative", zIndex: 1 }}>
          <Typography level="h1" sx={{ mb: 2 }}>
            {publication.title}
          </Typography>

          <Typography level="body-lg" sx={{ mb: 3 }}>
            {publication.description}
          </Typography>
          <Typography level="body-md" sx={{ mb: 3 }}>
            {publication.longdescription}
          </Typography>
        </CardContent>
      </Card>

      {/* Posts Grid */}
      <Typography level="h2" sx={{ mb: 3 }}>
        Posts in this series
      </Typography>

      <Grid container spacing={2}>
        {publication.posts.map((post: any) => (
          <Grid key={post.slug} xs={12} md={6} lg={4}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                "&:hover": {
                  borderColor: "primary.500",
                  boxShadow: "sm",
                },
              }}
            >
              {post.image && (
                <CardOverflow>
                  <AspectRatio ratio="16/9">
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ objectFit: "cover" }}
                    />
                  </AspectRatio>
                </CardOverflow>
              )}

              <CardContent>
                <Typography level="title-md" sx={{ mb: 1 }}>
                  {post.title}
                </Typography>

                <Typography level="body-sm" sx={{ mb: 2 }}>
                  {post.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography level="body-xs">
                    {new Date(post.date).toLocaleDateString()}
                  </Typography>
                </Box>

                <JoyLink
                  component={Link}
                  href={`/blog/publication/${publication.id}/${post.slug}`}
                  overlay
                  underline="none"
                  sx={{ mt: 2 }}
                >
                  Read post →
                </JoyLink>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PublicationDetailPage;
