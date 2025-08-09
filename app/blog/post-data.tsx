import React from "react";

export type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  cartegory: string;
  centered?: boolean;
  audio?: string;
  itemType: "post";
  hidden?: boolean;
  medium?: string;
  dev?: string;
  premium?: boolean;
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
      date: "2025-03-08",
      slug: "an-introduction-to-supervised-learning",
      image: "/sl.png",
      cartegory: "DEEP LEARNING",
      centered: false,
      itemType: "post",
    },
    {
      title: "Shallow Neural Networks",
      description:
        "In this article we shall take a look at Shallow Neural Networks",
      date: "2025-07-22",
      slug: "shallow-neural-networks",
      image: "https://scipython.com/media/old_blog/shallow-neural-net/snn.png",
      cartegory: "DEEP LEARNING",
      centered: false,
      itemType: "post",
    },
  ],
};

export const posts: Array<Post | Publication> = [
  DeepLearningPublication,
  {
    title: "Implementing Resource Versioning in Conveyor CI",
    description: "This article.",
    date: "2025-08-10",
    slug: "resource-versioning-in-conveyor",
    image: "/img/conveyor-ci.png",
    cartegory: "CLOUD NATIVE",
    centered: false,
    itemType: "post",
  },
  {
    title:
      "A Complete Guide to etcd: The Distributed Key-Value Store Powering Cloud Infrastructure",
    description:
      "In this article, we will explore etcd, a distributed key-value store that is widely used in cloud-native applications and microservices architectures.",
    date: "2025-07-25",
    slug: "a-complete-guide-to-etcd",
    image:
      "https://abdelouahabmbarki.com/content/images/size/w2000/2023/06/Screenshot-from-2023-06-11-12-32-10.png",
    cartegory: "CLOUD NATIVE",
    centered: false,
    itemType: "post",
  },
  {
    title: "Designing The Conveyor CI Pipeline Workflow",
    description:
      "This article explains how Conveyor CI is adding pipeline functionality to enable ordered driver execution, inspired by conveyor belt systems, using Go routines, NATS Jetstream, and ETCD for efficient, predictable CI/CD workflows.",
    date: "2025-07-21",
    slug: "conveyor-pipelines-design",
    image: "/img/conveyor-ci.png",
    cartegory: "CLOUD NATIVE",
    centered: false,
    itemType: "post",
  },
  {
    title: "A Guide to contributing to the Conveyor CI Driver Runtime",
    description:
      "In this article, we will explore how to contribute to the Conveyor CI Driver Runtime (CDR). We will cover the basics of the CDR, how to set up your development environment, and how to contribute to the project.",
    date: "2025-06-20",
    slug: "contributing-to-conveyor-ci-driver-runtime",
    image: "/img/conveyor-ci.png",
    cartegory: "CLOUD NATIVE",
    centered: false,
    itemType: "post",
  },
  {
    title: "Designing the Conveyor CI Scheduling Mechanism",
    description:
      "In this article, we will explore the Conveyor Scheduling Mechanism.",
    date: "2025-05-15",
    slug: "conveyor-scheduling-algorithm",
    image:
      "https://fulcrum.rocks/blog/wp-content/uploads/2022/04/ci-cd-pipeline-7.png",
    cartegory: "CLOUD NATIVE",
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
    centered: false,
    itemType: "post",
  },
  {
    title: "How to deploy a website on the Dark Web",
    description:
      "In this article we shall look at how you can deploy your site on the Tor network, which is a Dark web that allows clients and Servers to navigate and exist on the Internet Anonymously.",
    date: "2025-03-19",
    slug: "how-to-deploy-a-website-on-the-dark-web",
    image: "https://cdn.mos.cms.futurecdn.net/hK9M3qPnakKGmDP9cDwPTh.jpg",
    cartegory: "NETWORKING",
    centered: false,
    itemType: "post",
    medium:
      "https://medium.com/devops-dev/how-to-deploy-an-anonymous-website-on-the-dark-web-3c357129b245",
    premium: true,
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
    itemType: "post",
  },
  {
    title: "To be continued",
    description: "Coming of age.....",
    date: "2025-07-26",
    slug: "to-be-continued",
    image: "/IMG_20191221_153252.jpg",
    cartegory: "a mí",
    centered: true,
    itemType: "post",
  },
  /*{
    title: "Institution, Hierarchy and the myth of Individualism",
    description: "World View...",
    date: "2021-01-28",
    slug: "institution-hierarchy-and-the-myth-of-individualism",
    image:
      "https://images.newscientist.com/wp-content/uploads/2021/11/12153123/four_main_theories_consciousnesspri205909083.jpg",
    cartegory: "THOUGHTS",
    content: <Thoughts components={COMPONENTS} />,
    itemType: "post",
  },*/
];
