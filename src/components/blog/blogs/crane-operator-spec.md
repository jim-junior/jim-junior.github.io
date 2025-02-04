# Building a Kubernetes Operator. A Beginner's Guide

![](https://www.epsglobal.com/Media-Library/EPSGlobal/Blog/kubernets2.jpg)

One of those great revolutionary technologies that have transformed how developers think of and Interact with cloud infrastructure is Kubernetes. Personally I would rank Kubernetes and Docker among the Top 10 revolutionary Software of the Internet Age. Initially Developed at Google, Kubernetes, also known as K8s, is an open source system for automating deployment, scaling, and management of containerized applications. It is Designed on the same principles that allow Google to run billions of containers a week, Kubernetes can scale without increasing your operations team.

But however Amazing and Powerful kubernetes might be, It remains just a container Orchestration technology at the core and will never solve all problems that Software engineers face in the complex world of Software development and Deployment or DevOps. To Solve this Kubernetes provides ways it can be Extended and customized to meet your team's needs. It Provides Client Libraries in many languages. But even better are Kubernetes Operators.

A formal definition of a kubernetes operator can be:

> A Kubernetes Operator is a method of automating the management of complex applications on Kubernetes. It extends Kubernetes' capabilities by using custom resources and controllers to manage the lifecycle of an application, automating tasks such as deployment, scaling, and updates. Operators encode the operational knowledge of an application into Kubernetes, making it easier to manage stateful or complex workloads with less manual intervention.

In this article. We shall go through a guide to get started building your own Custom kubernetes Operator. We shall cover different topics like Custom Resource Definitions, Controllers and look at the Kubernetes Controller Runtime.

## Prerequisites

There are a few thing we need to know and have before continuing with this tutorial

- A good understanding of Kubernetes and how to use it.
- Programming Knowledge in GoLang
- Access to a Kubernetes Cluster ( You can try it locally using Minikube or Kind)

## Setting your Environment

To setup your environment you will first need to have Go installed. The Kubernetes Golang Client usually requires a specific Go version so depending on your time of reading this article it might have changed but for now i will use go1.21.6. You know what version you are using, run 

```bash
go version
```

Next you will need to have access to a Kubernetes cluster but for development purposes I would advise you use a local cluster from tools like Minikube or Kind. You can visit their websites for the installation steps.

We shall then have to initialize our module that we will use for development. Run

```bash
go mod init https://github.com/jim-junior/crane-operator
```

Before we dive right into code. There are certain key concepts you will need to know so lets look at those first.

## Concepts



## References


Brandon Philips, (November 3, 2016). Introducing Operators: Putting Operational Knowledge into Software. Internet Archive Wayback Machine. [https://web.archive.org/web/20170129131616/https://coreos.com/blog/introducing-operators.html](https://web.archive.org/web/20170129131616/https://coreos.com/blog/introducing-operators.html)


CNCF TAG App-Delivery Operator Working Group, CNCF Operator White Paper - Final Version. Github. [https://github.com/cncf/tag-app-delivery/blob/163962c4b1cd70d085107fc579e3e04c2e14d59c/operator-wg/whitepaper/Operator-WhitePaper_v1-0.md](https://github.com/cncf/tag-app-delivery/blob/163962c4b1cd70d085107fc579e3e04c2e14d59c/operator-wg/whitepaper/Operator-WhitePaper_v1-0.md)
