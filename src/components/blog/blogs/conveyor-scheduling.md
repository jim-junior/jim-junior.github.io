# Designing the Conveyor CI Scheduling Algorithm

![](https://fulcrum.rocks/blog/wp-content/uploads/2022/04/ci-cd-pipeline-7.png)

Recently a team that uses Conveyor CI as a dependency had an inquiry on how a CI Driver in conveyor can handle multiple instances of running CI processes without overloading the host node. This is a really, important consideration i had not thought of, and for a system that runs multiple tasks in concurency, being concious of system resources is a really important consideration.

This got me thinking, how best can one approach such an issue. I thought of multiple solutions to this, i had considered introducing a concencus algorith like raft, how ever this wasn't really an effective solution. Looking into how the Kubernetes Kube Scheduler efficiently allocates Pods to run on different nodes taking into considerations or the resource constraints of both the Pod to be allocated and the nodes its to be allocated to gave me an inspiration of having to design a custom [scheduling algorithm](https://en.wikipedia.org/wiki/Scheduling_(computing)) that had to to take into consideration of the multiple, use case sennarios of CI/CD tools and waht constraints they operate under.

I had to first come up with the high level requirements and problem statements for the CI Drivers inorder to tackle this issue.

> **The Problem**: In large production grade CI/CD Pipelines, multiple requests can initiated at the same time and due to the underlying concurrent and instant execution of CI tasks by Conveyor CI Drivers, this introduces an issue of possible node crashed or driver process termination by the Operating system due to the host node running out of system resources. Also currently, drivers dont support horizontal scalability, something that is really important for CI/CD tools that are expected to run multiple workloads at a certain point in time considering vertical scalability tends to be finite and also costs tend to increase exponentialy the more you scale verticaly.

From that problem statement i managed to identify two high level requirements.

1. Drivers should support horizontal scaling
2. The Driver runtime should take into consideration available node resources before executed a task

After a long night of insightful research, I came up with a bunch of solutions for this, these would assist me in designing the scheduling algorithm. I would call the **functional or technical requirements** if thats the right term to use.

The algorithm was to take inspiration and be a combination of multiple OS scheduling alorithms, with a help of a concensus algorithm to handle support the distributed properties of the Driver instances.

To solve the issue of the possibility of overloading the server with tasks that require system resources than available, First i had to remove the instant execution of tasks and introduce a task queue, this would enable me to be able to incorprate a [FIFO-like](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)) architecture as the base algorithm for scheduling tasks in a normal flow. Taking into considerationn that in certain organisations, CI/CD tools are design with the concept of having some tasks prioritized due to multiple factors, say if they would like to prioritize tasks from paying users. I also decided to incorprate a [Priority Scheduling Algorithm](https://en.wikipedia.org/wiki/Dynamic_priority_scheduling) as the second level algorithm. Lastly i hard to introduce a [constraint based scheduling](https://www.sciencedirect.com/science/article/pii/S1474667017377388) algorithm as the last determining algorithm, these contraints can be the available system resources etc. To support such a complex algorithm, i had to introduce [heuristics](https://en.wikipedia.org/wiki/Heuristic) that are computed by the Driver from a resource specification or defined directly in the resource specification. These can be 

