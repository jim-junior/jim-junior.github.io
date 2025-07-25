import { createHashRouter } from "react-router-dom";
import Home from "./pages/home";
import BlogPage from "./pages/blog";
import { posts } from "./components/blog/post-data";
import BlogPostPage from "./pages/post";
import ProjectsPage from "./pages/projects";
import ResumePage from "./pages/resume";
import PublicationPage from "./pages/publication";
import TVCartlogPage from "./pages/tv";

function getBlogPostRotes() {
  const publicationRoutes: {
    element: JSX.Element;
    path: string;
  }[] = [];

  const routes = posts.map((post) => {
    if (post.itemType == "post") {
      return {
        element: <BlogPostPage post={post} key={post.slug} />,
        path: `/blog/${post.slug}`,
      };
    } else {
      const pubroutes = post.posts.map((p) => {
        return {
          element: <BlogPostPage post={p} key={p.slug} />,
          path: `/blog/publication/${post.id}/${p.slug}`,
        };
      });
      publicationRoutes.push(...pubroutes);
      return {
        element: <PublicationPage publication={post} key={post.id} />,
        path: `/blog/publication/${post.id}`,
      };
    }
  });

  routes.push(...publicationRoutes);
  return routes;
}

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/cv",
    element: <ResumePage />,
  },
  {
    path: "/tv",
    element: <TVCartlogPage />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
  ...getBlogPostRotes(),
]);
