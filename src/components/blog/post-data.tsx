import { COMPONENTS } from "../mdx-conponents";
import CraneOperatorPost from "./blogs/simplifiying-kubernetes.md";

export const posts = [
  {
    title:
      "Deploy Kubernetes Applications Effortlessly: One YAML file to Rule Them All",
    description:
      "In this article we talk about Crane Operator, A Kubernetes Operator for deploying applications on Kubernetes. It defines an Intuitive specification that makes it easy for any application developer regardless of their Kubernetes expertise to deploy applications on Kubernetes. It can work as a building block for a platform team to build a self-service platform for their developers.",
    date: "2024-10-02",
    slug: "deploy-kubernetes-applications-effortlessly",
    image:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cartegory: "CLOUD NATIVE",
    content: <CraneOperatorPost components={COMPONENTS} />,
  },
];

export type Post = (typeof posts)[0];
