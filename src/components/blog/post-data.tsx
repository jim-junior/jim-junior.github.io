import { COMPONENTS } from "../mdx-conponents";
import Post1 from "./blogs/Test.md";

export const posts = [
  {
    title: "Post 1",
    description: "This is the first post",
    date: "2021-01-01",
    slug: "post-1",
    image: "https://source.unsplash.com/random/800x600",
    cartegory: "Tech",
    content: <Post1 components={COMPONENTS} />,
  },
];

export type Post = (typeof posts)[0];
