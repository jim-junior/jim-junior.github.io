import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { Link as RouterLink } from "react-router-dom";
import { FaBookmark, FaChevronRight, FaHome, FaShare } from "react-icons/fa";
import { Post } from "../blog/post-data";

interface Publication {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  author: {
    name: string;
    avatar: string;
  };
  posts: Post[];
  tags: string[];
  updatedAt: string;
}

export const PublicationDetailPage = () => {
  // In a real app, you would fetch the publication data based on the id
  const publication: Publication = {
    id: "1",
    title: "JavaScript Fundamentals",
    description:
      "A comprehensive guide to mastering JavaScript from basics to advanced concepts. Perfect for beginners and intermediate developers looking to strengthen their foundation.",
    coverImage: "/images/cover.jpg",
    author: {
      name: "John Doe",
      avatar: "/images/avatar.jpg",
    },
    posts: [
      {
        id: "1",
        title: "Variables and Data Types",
        description:
          "Understanding JavaScript variables, data types, and their usage in modern web development.",
        image: "/images/post1.jpg",
        date: "2024-02-01",
        readTime: "5 min read",
        category: "Basics",
      },
      // Add more posts as needed
    ],
    tags: ["JavaScript", "Web Development", "Programming"],
    updatedAt: "2024-02-01",
  };

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", p: 3 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs size="sm" separator={<FaChevronRight />} sx={{ mb: 2 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          color="neutral"
          startDecorator={<FaHome />}
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/blog"
          underline="none"
          color="neutral"
        >
          Blog
        </Link>
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
          <Box sx={{ mb: 2 }}>
            {publication.tags.map((tag) => (
              <Chip
                key={tag}
                size="sm"
                variant="soft"
                color="primary"
                sx={{ mr: 1 }}
              >
                {tag}
              </Chip>
            ))}
          </Box>

          <Typography level="h1" sx={{ mb: 2 }}>
            {publication.title}
          </Typography>

          <Typography level="body-lg" sx={{ mb: 3 }}>
            {publication.description}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Box
              component="img"
              src={publication.author.avatar}
              alt={publication.author.name}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography level="body-sm" fontWeight="lg">
                {publication.author.name}
              </Typography>
              <Typography level="body-xs">
                Last updated:{" "}
                {new Date(publication.updatedAt).toLocaleDateString()}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              color="neutral"
              startDecorator={<FaBookmark />}
            >
              Save for later
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              startDecorator={<FaShare />}
            >
              Share
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Posts Grid */}
      <Typography level="h2" sx={{ mb: 3 }}>
        Posts in this series
      </Typography>

      <Grid container spacing={2}>
        {publication.posts.map((post) => (
          <Grid key={post.id} xs={12} md={6} lg={4}>
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
                <Box sx={{ mb: 1 }}>
                  <Chip size="sm" variant="soft" color="primary">
                    {post.category}
                  </Chip>
                </Box>

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
                  <Typography level="body-xs">{post.readTime}</Typography>
                </Box>

                <Link
                  component={RouterLink}
                  to={`/blog/${post.id}`}
                  overlay
                  underline="none"
                  sx={{ mt: 2 }}
                >
                  Read post →
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PublicationDetailPage;
