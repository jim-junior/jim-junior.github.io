import { COMPONENTS } from "../mdx-conponents";
import BuildingKubernetesOperator from "./blogs/building-a-kubernetes-operator.md";
import ALetterToHer from "./blogs/a-letter-to-her.md";
import CognitiveModeling from "./blogs/cognitive-modeling.md";
import SupervisedLearning from "./blogs/deep-learning/supervised-learning.md";
import JavaScriptProxies from "./blogs/javascript-proxies-a-beginners-guide.md";
import OrbitonJSBlog from "./blogs/3-minutes-to-orbiton-js-the-ultimate-javascript-ui-library.md";
import ReactLibrary from "./blogs/how-to-create-an-npm-library-from-react-components.md";
import ReactJSMedia from "./blogs/how-to-create-a-responsive-custom-video-player-in-react.md";
import URLShortner from "./blogs/url-shortner.md";
import EventDrivenArchitecture from "./blogs/event-driven-architecture.mdx";
import React from "react";
import her from "../../assets/her.jpg";

export type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  content: React.ReactElement;
  cartegory: string;
  centered?: boolean;
  audio?: string;
  itemType: "post";
  hidden?: boolean;
};

export type Publication = {
  id: string;
  itemType: "publication";
  title: string;
  description: string;
  posts: Array<Post>;
  hidden?: boolean;
};

export const DeepLearningPublication: Publication = {
  id: "deep-learning",
  itemType: "publication",
  title: "Understanding Deep Learning",
  description:
    "A series of blog post explaining Different deep learning concepts",
  posts: [
    {
      title: "An Introduction to Supervised Learning",
      description:
        "In this article we shall take a look at Supervised Learning models, how they work and different concepts associated with it.",
      date: "2025-01-19",
      slug: "an-introduction-to-supervised-learning",
      image:
        "https://infiniticube.com/wp-content/uploads/2024/05/20-Key-Elements-for-Real-Life-Applications-of-Cognitive-Models-2.webp",
      cartegory: "DEEP LEARNING",
      content: <SupervisedLearning components={COMPONENTS} />,
      centered: false,
      itemType: "post",
    },
  ],
};

export const posts: Array<Post | Publication> = [
  DeepLearningPublication,
  {
    title: "An Introduction to Supervised Learning",
    description:
      "In this article we shall take a look at Supervised Learning models, how they work and different concepts associated with it.",
    date: "2025-01-19",
    slug: "an-introduction-to-supervised-learning",
    image: "/sl.png",
    cartegory: "DEEP LEARNING",
    content: <SupervisedLearning components={COMPONENTS} />,
    centered: false,
    itemType: "post",
  },
  {
    title:
      "From Frustration to Flow: How Cognitive Modeling Shapes Better Developer Tools, Libraries, and Frameworks",
    description:
      "In this article. We shall have explore how Cognitive Modeling can be used to shape better developer tools, libraries and frameworks. We shall look at different real world examples where it has played a key role in the success of certain tools.",
    date: "2025-01-19",
    slug: "cognitive-modeling-for-better-developer-tools",
    image:
      "https://infiniticube.com/wp-content/uploads/2024/05/20-Key-Elements-for-Real-Life-Applications-of-Cognitive-Models-2.webp",
    cartegory: "SOFTWARE DESIGN",
    content: <CognitiveModeling components={COMPONENTS} />,
    centered: false,
    itemType: "post",
  },
  {
    title: "A Practical Introduction to The Event Driven Architecture",
    description:
      "In this article. We shall have an Introductory guide to the Event Driven Architecture using the Redis. We shall explore different concepts with practical examples.",
    date: "2025-01-18",
    slug: "a-practical-guide-to-the-event-driven-architecture",
    image:
      "https://www.cncf.io/wp-content/uploads/2023/10/Screenshot-2023-10-27-at-16.36.16.png",
    cartegory: "SOFTWARE ARCHITECTURE",
    itemType: "post",
    content: <EventDrivenArchitecture components={COMPONENTS} />,
    centered: false,
    audio:
      "https://res.cloudinary.com/blurify-ml/video/upload/v1737739518/Event-Driven_Architecture__A_Practical_Introduction_mvky8r.wav",
  },
  {
    title: "Building a Kubernetes Operator. A Practical Guide",
    description:
      "In this article. We shall go through a guide to get started building your own Custom kubernetes Operator. We shall cover different topics like Custom Resource Definitions, Controllers and look at the Kubernetes Controller Runtime.",
    date: "2024-12-28",
    slug: "building-a-kubernetes-operator-a-practical-guide",
    image:
      "https://www.epsglobal.com/Media-Library/EPSGlobal/Blog/kubernets2.jpg",
    cartegory: "CLOUD NATIVE",
    content: <BuildingKubernetesOperator components={COMPONENTS} />,
    centered: false,
    itemType: "post",
  },
  {
    title: "How to create a responsive custom video player in React",
    description:
      "In this article, we'll guide you through creating a responsive custom video player using a library I built called reactjs-media. This approach lets you avoid the limitations of the default HTML5 player and the complexity of building a video player from scratch. The reactjs-media library provides more react approach to building your custom player with a wide range of features and customization options.",
    date: "2024-05-04",
    slug: "how-to-create-a-responsive-custom-video-player-in-react",
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/se424m2u3q6cs4hs01x6.png",
    cartegory: "REACT JS",
    content: <ReactJSMedia components={COMPONENTS} />,
    itemType: "post",
  },
  {
    title: "Creating a URL Shortener service in Python Django",
    description:
      "URL shorteners have become a popular service on the web. Companies like bitly are making great fortunes from them. But sometimes when you want a custom URL you get to pay for the service. So in this tutorial I am going to show you how to build a URL shortener service in Django",
    date: "2022-08-08",
    slug: "creating-a-url-shortener-service-in-python-django",
    image:
      "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzqnl7ongem2tduxe49s7.png",
    cartegory: "PYTHON DJANGO",
    content: <URLShortner components={COMPONENTS} />,
    itemType: "post",
  },
  {
    title: "JavaScript Proxies | A beginners Guide",
    description:
      "Proxies in JavaScript are one of the hidden gems in the language that most JavaScript beginner and intermediate developers do not know of......",
    date: "2022-03-12",
    slug: "javascript-proxies-a-beginners-guide",
    image:
      "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fj1uhtplbinmdsfaoeymn.png",
    cartegory: "JAVASCRIPT",
    content: <JavaScriptProxies components={COMPONENTS} />,
    itemType: "post",
  },
  {
    title: "3 Minutes to Orbiton JS | The Ultimate JavaScript UI library",
    description:
      "Proxies in JavaScript are one of the hidden gems in the language that most JavaScript beginner and intermediate developers do not know of......",
    date: "2022-03-09",
    slug: "3-minutes-to-orbiton-js-the-ultimate-javascript-ui-library",
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f4o5sini57do8wxonqgk.png",
    cartegory: "JAVASCRIPT",
    content: <OrbitonJSBlog components={COMPONENTS} />,
    itemType: "post",
  },
  {
    title: "How to Create an NPM Library from React Components",
    description:
      "In this tutorial I will be showing you how to create an npm library that is composed of react component. This will definitely help you incase you want to reuse code in multiple projects or if you just want to create your own library.",
    date: "2021-02-28",
    slug: "how-to-create-an-npm-library-from-react-components",
    image:
      "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9g61nl2hsvczgjgdx4ta.png",
    cartegory: "REACT JS",
    content: <ReactLibrary components={COMPONENTS} />,
    itemType: "post",
  },
  {
    title: "A letter to her",
    description:
      "This is a letter to the one who unknowingly shaped my world. It's a reflection on love that grew gradually, memories that transcend time, and the impact of a person who changed me forever. Though life had other plans, the feelings remain as vivid as ever. This is my way of holding on, of saying what was left unsaid. It's you. It's always been you.",
    date: "2024-12-16",
    slug: "a-letter-to-her",
    image: her,
    cartegory: "PERSONAL",
    content: <ALetterToHer components={COMPONENTS} />,
    centered: true,
    itemType: "post",
    hidden: true,
  },
];
