import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import BlogPage from "./pages/blog";
import { posts } from "./components/blog/post-data";
import BlogPostPage from "./pages/post";

function getBlogPostRotes() {
  const routes = posts.map((post) => {
    return {
      element: <BlogPostPage post={post} key={post.slug} />,
      path: `/blog/${post.slug}`,
    };
  });
  return routes;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
  ...getBlogPostRotes(),
]);
