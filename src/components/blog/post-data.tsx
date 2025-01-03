import { COMPONENTS } from "../mdx-conponents";
import BuildingKubernetesOperator from "./blogs/building-a-kubernetes-operator.md";
//import ALetterToHer from "./blogs/a-letter-to-her.md";
//import CraneOperatorPost from "./blogs/simplifiying-kubernetes.md";
//import CraneOperatorSpecPost from "./blogs/crane-operator-spec.md";
import JavaScriptProxies from "./blogs/javascript-proxies-a-beginners-guide.md";
import OrbitonJSBlog from "./blogs/3-minutes-to-orbiton-js-the-ultimate-javascript-ui-library.md";
import ReactLibrary from "./blogs/how-to-create-an-npm-library-from-react-components.md";
import ReactJSMedia from "./blogs/how-to-create-a-responsive-custom-video-player-in-react.md";
import URLShortner from "./blogs/url-shortner.md";
//import her from "../../assets/her.jpg";

export const posts = [
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
  },
  {
    title: "Creating a URL Shortener service in Python Django",
    description:
      "URL shorteners have become a popular service on the web. Companies like bitly are making great fortunes from them. But sometimes when you want a custom URL you get to pay for the service. So in this tutorial I am going to show you how to build a URL shortener service in Django",
    date: "2022-08-08",
    slug: "creating-a-url-shortener-service-in-python-django",
    image:
      "https://cdn-images-1.medium.com/max/1024/1*xSLFY9zJvUIZLMgeZL8vng.png",
    cartegory: "PYTHON DJANGO",
    content: <URLShortner components={COMPONENTS} />,
  },
  {
    title: "JavaScript Proxies | A beginners Guide",
    description:
      "Proxies in JavaScript are one of the hidden gems in the language that most JavaScript beginner and intermediate developers do not know of......",
    date: "2022-03-12",
    slug: "javascript-proxies-a-beginners-guide",
    image:
      "https://cdn-images-1.medium.com/max/1024/1*QPgIerxoNPJbe6A1ZE5GRQ.png",
    cartegory: "JAVASCRIPT",
    content: <JavaScriptProxies components={COMPONENTS} />,
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
  },
];

export type Post = (typeof posts)[0];
