# Understanding the OCI Runtime Architecture and Lifecycle

![](/img/oci-banner.png)

"it works on my machine" is a phrase that was once common in the Software Engineering World. It often was used in situtations where teams of multiple people where working on a project and often faced incompatability issues as the software project was used across different mochine environments.

As DevOps became more standardised, it brought a necessity of having a standard way to package software applications that allowed them to be used accross different machine configurations. This led to the birth of "containers". However, for a while there where multiple continer technologies such as Docker, rkt, Warden, LXC. To solve this, a bunch of industry leaders decided to come together and decided to draft a standardized specification for containers which resulted into The Open Container Initiative.

There are currently three OCI specifications in development and use: the Runtime Specification (runtime-spec), the Image Specification (image-spec), and the Distribution Specification (distribution-spec). This article will focus on the Runtime Spec

## The OCI Runtime Specification

The OCI Runtime Specification is a set of rules and standards that define how a container should be run after its unpacked from an image. It follows the Image Spec that defines how software should be packaged into containers. The Runtime Spec is impelemented by what are called container runtimes. And each often has it own advantage over the other. Notable Container runtimes include:

- `runc`: The most popular runtime which was originally donated by Docker to serve as the industry's reference standard
- Kata Containers: Uses lightweight VMs for stronger isolation.
- gVisor: Provides a sandboxed kernel for enhanced security
- urunc: Another early stage container runtime that allows you to run unikernels as containers.

This specification focuses on three primary areas whih are the Filesystem Bundle, Configuration and Container Lifecycle.