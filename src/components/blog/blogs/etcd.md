# A Complete Guide to etcd: The Distributed Key-Value Store Powering Cloud Infrastructure

![etcd](https://abdelouahabmbarki.com/content/images/size/w2000/2023/06/Screenshot-from-2023-06-11-12-32-10.png)

[etcd](https://etcd.io/) is a distributed key-value store designed for reliability, high availability, and consistency. It is a [Cloud Native project](https://www.cncf.io/) that powers much of the tools utilized in the Cloud Ecosystem today. It is used projects like Kubernetes, CoreOS, OpenShift, Cloud Foundry any many more. It is primarily used to store configuration, state and metadata in Cloud Systems. This article will take you through a complete guide to understanding etcd to the point of being able to integrate it into your project. We shall cover how to install it, setup a cluster, store and query etcd, operating and managing etcd and many more concepts. By the end of this blog article, you will have a solid understanding of etcd.

This article is accompanied with a GitHub repository containing reference code and config files. I would recommend cloning the repository so you can use it to follow along. You can find the code on this repo [https://github.com/jim-junior/etcd-guide.git](https://github.com/jim-junior/etcd-guide.git). That being said, this is a long article so let's get started.

## Installation

To use `etcd` you will need to first install it on your system or have an install of it running somewhere. There are multiple ways to install etcd and each method can vary depending on your use-case. This tutorial will try to provide an exhaustive list depending on common use cases.

### Installing on a host machine

This is one of the most common ways you will install software if you want to use it on your workspace. When installing etcd, it comes with two important binaries, the `etcd` server binary and `etcdctl` CLI tool for interacting with your etcd cluster or instance.

To install these tools you can head over to the [Github Realeses page](https://github.com/etcd-io/etcd/releases/) and download the archive for your platform OR

#### For Linux & MacOS

To install on linux, In the Github repository, I provide a custom installation script that will install the latest version for you. Just clone and run the [`etcd-install.sh`](https://github.com/jim-junior/etcd-guide/blob/main/etcd-install.sh) file

You can also install it via Homebrew if you have it installed on your system via `brew install etcd`

#### For Windows

To install on WIndows, In the Github repository, I also provide a custom Powershell installation script that will install the latest version for you. Just clone and run the [`Install-Etcd.ps1`](https://github.com/jim-junior/etcd-guide/blob/main/Install-Etcd.ps1) file

Once you have `etcd` installed, you can verify by running the etcd command:

```sh
$ etcd
{"level":"warn","ts":"2025-07-24T16:58:58.804311+0300","caller":"embed/config.go:1209","msg":"Running http and grpc server on single port. This is not recommended for production."}
```

### Installing as a Container

You can also install and run etcd via Docker. The `etcd` team provides an official container image that can be downloaded from `quay.io/coreos/etcd`. However, there is another image provided by bitnami and you can pull it from the `bitnami/etcd` repository.

```sh
docker run  -p 4001:4001 -p 2380:2380 -p 2379:2379 --name etcd quay.io/coreos/etcd:v2.3.8
# OR
docker run -it -p 4001:4001 -p 2380:2380 -p 2379:2379 --name etcd bitnami/etcd:latest
```

If you are using Kubernetes, you can also Install and run it on Kubernetes as a Statefull set, follow the [official Tutorial](https://etcd.io/docs/v3.6/op-guide/kubernetes/) on the `etcd` documentation

## Setting up an etcd cluster

As mentioned earlier, `etcd` is a distributed KV store. So by nature it can operate in a cluster whereby you have multiple instances running on different nodes. This makes `etcd` highly fault tolerant. This distributed nature is powered by [The Raft Consensus Algorithm](https://raft.github.io/) and the `etcd` team actually provides a really good [Raft golang implementation](https://github.com/etcd-io/raft). To set up a cluster you need around 3 to 5 instances for high availability and quorum.

Let's go through how you can set up an `etcd` cluster.

An `etcd` cluster is composed of multiple instances running and each instances requires an few requirements which include:

- **Name**: A string to identify each instance and it must be unique across instances.
- **Peer URL**: This is a URL used by peer instances to communicate among each other in the cluster. (Usually listens on Port `2380`)
- **Client URL**: This is a URL used by external services to interact with your `etcd` instance. (Usually listens on Port `2379`)

With that, your cluster also has a few requirements and these are:

- **Cluster string**: This is a string of Comma-separated list of all cluster members in the format of `name=peerURL`. eg `node1=10.10.10.0:2380,node2=10.10.10.0:2380`
- **Cluster Token**: This is a unique string to identify the cluster. It prevents instances from joining the wrong cluster.

Lets show an example of how to run a simple cluster. We shall run a cluster with 3 nodes having the following configuration:

| Name   | IP       | Peer URL                                       | Client URL                                     |
| ------ | -------- | ---------------------------------------------- | ---------------------------------------------- |
| etcd-1 | 10.0.0.1 | [https://10.0.0.1:2380](https://10.0.0.1:2380) | [https://10.0.0.1:2379](https://10.0.0.1:2379) |
| etcd-2 | 10.0.0.2 | [https://10.0.0.2:2380](https://10.0.0.2:2380) | [https://10.0.0.2:2379](https://10.0.0.2:2379) |
| etcd-3 | 10.0.0.3 | [https://10.0.0.3:2380](https://10.0.0.3:2380) | [https://10.0.0.3:2379](https://10.0.0.3:2379) |

With the above instance settings, we can extract a cluster string and also generate a custom cluster token.

```sh
# Cluster String
etcd-1=https://10.0.0.1:2380,etcd-2=https://10.0.0.2:2380,etcd-3=https://10.0.0.3:2380


# Cluster token
my-cluster-token
```

Once last thing is that when you are initiating a cluster, there is another configuration you pass to `etcd` called the cluster initial state, this can either be `new` or `existing`.

Now since we have all the major configurations, we can then initiate our cluster by running each instance.

```sh
$ etcd \
 --name etcd-1 \
 --initial-advertise-peer-urls https://10.0.0.1:2380 \
 --listen-peer-urls https://10.0.0.1:2380 \
 --listen-client-urls https://10.0.0.1:2379,http://127.0.0.1:2379 \
 --advertise-client-urls https://10.0.0.1:2379 \
 --initial-cluster-token etcd-cluster-1 \
 --initial-cluster etcd-1=https://10.0.0.1:2380,etcd-2=https://10.0.0.2:2380,etcd-3=https://10.0.0.3:2380 \
 --initial-cluster-state new \
 --data-dir /var/lib/etcd \
```

You can run the same command another 2 times but adjusting the flags to match the settings of the other instances. Once that's done. You now have a running cluster.

## Working with etcd

Now that we have installed `etcd`. We can move on to working storing and querying `etcd`

### Interacting with `etcd`

When you install `etcd`, it comes with another binary called `etcdctl`. This is a CLI tool that helps you interact with the `etcd` API Server. However, there are other ways to interact with `etcd` and all include:

- `etcdctl`: The official command line tool for interacting with `etcd`
- HTTP API:  `etcd` provides HTTP endpoints that you can make requests to.
- gRPC Endpoints: Alternatively, there is also a gRPC API that you can interact with and its API reference can be found [here](https://etcd.io/docs/v3.6/dev-guide/api_reference_v3/)
- Client Libraries: Multiple SDKs, both official and unofficial exist and you can use these to interact with the API server.

Here is a list of client libraries for different languages that you can use in your project.

| Language                 | Library          | Maintainer         | API Support | gRPC | Link                                                                                         |
| ------------------------ | ---------------- | ------------------ | ----------- | ---- | -------------------------------------------------------------------------------------------- |
| **Go**                   | `clientv3`       | etcd-io (official) | v3          | Yes  | [github.com/etcd-io/etcd/client/v3](https://github.com/etcd-io/etcd/tree/main/client/v3)     |
| **Python**               | `python-etcd3`   | Community          | v3          | Yes  | [github.com/kragniz/python-etcd3](https://github.com/kragniz/python-etcd3)                   |
| **Java**                 | `jetcd`          | Community          | v3          | Yes  | [github.com/etcd-io/jetcd](https://github.com/etcd-io/jetcd)                                 |
| **JavaScript / Node.js** | `etcd3`          | Community          | v3          | Yes  | [github.com/mixer/etcd3](https://github.com/mixer/etcd3)                                     |
| **C++**                  | `etcd-cpp-apiv3` | Community          | v3          | Yes  | [github.com/etcd-cpp-apiv3/etcd-cpp-apiv3](https://github.com/etcd-cpp-apiv3/etcd-cpp-apiv3) |
| **Rust**                 | `rust-etcd`      | Community          | v3          | Yes  | [github.com/jimmycuadra/rust-etcd](https://github.com/jimmycuadra/rust-etcd)                 |
| **C# / .NET**            | `dotnet-etcd`    | Community          | v3          | Yes  | [github.com/shubhamranjan/dotnet-etcd](https://github.com/shubhamranjan/dotnet-etcd)         |

### Querying etcd

Fetching and storing data in etcd is really simple. Partly because `etcd` is just a key value store. Lets go through the ways to query `etcd`

#### Storing data to etcd

Since `etcd` is a key value store, data is stored in keys and values, kind of similarity to dictionaries in python or objects in Javascript.

To store data, you just have to provide a key and the value of data you want to store.

```sh
etcdctl --endpoints=$ENDPOINTS put mykey "Hello World!"
```

That will store `"Hello world!"` into the `mykey` key. It will create a new key if the provided one does not exist in the database otherwise it will update the existing one.

#### Reading data

```sh
etcdctl --endpoints=$ENDPOINTS get mykey
>> Hello World!
```

#### Deleting data

```sh
etcdctl --endpoints=$ENDPOINTS del mykey
```

As I mentioned above `etcd` has language bindings(SDKs) for different programming languages. They provide utility functions to carry out these actions and manipulate your data. You can find out more operations that can be performed on data in the [official documentation](https://etcd.io/docs/v3.6/tasks/developer/)

Lastly, if you are building a golang application, you can embed  the`etcd` server into your application.

### How data is stored in etcd

When working with `etcd`, it is better to know how it works and how data is stored internally. This will help you in deciding how to store your data in etcd.

`etcd` uses a flat key-value data model, meaning there are no native hierarchical or nested data structures like JSON trees or SQL tables. Developers tend to use keys that represent some kind of hierarchy e.g. `users/staff/jim`. It might look like the data is stored in a hierarchy but it's not. A sample of how it might be stored internally looks like this.

```json
{
 "/services/db/user": "admin",
 "/services/db/pass": "secret"
}
```

These keys look hierarchical, but etcd stores them as flat keys.

When data is stored, it is encoded in what is called **protocol buffers** on the disk. This is usually in the data directory which can be specified via the `--data-dir` flag when starting an `etcd` instance.

Internally, `etcd` uses a storage backend called BoltDB which is a fast embedded key-value store also written in Go, when data is stored in Bolt, it can be indexed using B-tree, which is a self-balancing tree data structure that maintains sorted data and allows fast lookups, insertions, and deletions. Each time data is mutated, it triggers an increment in an internal global revision. This means with etcd, you can read data at different revisions.

## Operating etcd

Once you have an `etcd` cluster up and running, you will need to manage it to ensure maximum uptime, backups in case of node failures, debugging etc. As an operator you need to be familiar with the different tools and workflows required to manage `etcd`. Let's go through the common ones.

### Cluster health

When running any system, you need to be able to observe the system health and status. `etcdctl` provides commands that can help you view cluster health. Simple run:

```sh
etcdctl --endpoints=$ENDPOINTS endpoint health


# You can add --write-out=table to have a table like output
```

Example

```sh
etcdctl --endpoints=$ENDPOINTS endpoint health


10.240.0.17:2379 is healthy: successfully committed proposal: took = 4.384885ms
10.240.0.19:2379 is healthy: successfully committed proposal: took = 3.938284ms
10.240.0.18:2379 is healthy: successfully committed proposal: took = 3.112832ms
```

or

```
etcdctl --write-out=table --endpoints=$ENDPOINTS endpoint status


+------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
|    ENDPOINT      |        ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFT APPLIED INDEX | ERRORS |
+------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
| 10.240.0.17:2379 | 4917a7ab173fabe7 |  3.5.0  |   45 kB |      true |      false |         4 |      16726 |              16726 |        |
| 10.240.0.18:2379 | 59796ba9cd1bcd72 |  3.5.0  |   45 kB |     false |      false |         4 |      16726 |              16726 |        |
| 10.240.0.19:2379 | 94df724b66343e6c |  3.5.0  |   45 kB |     false |      false |         4 |      16726 |              16726 |        |
+------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------|
```

### Snapshots

Snapshots are helpful in case of cluster failure, they enable you to be able to restore your data in case of an issue. Each snapshot can only work on one etcd instance at a time, not the whole cluster. So when creating a snapshot, ensure that you set the `--endpoints` flag to the endpoint of only one instance.

```sh
etcdctl --endpoints=10.240.0.17:2379 snapshot save backup.db


>> Snapshot saved at backup.db
```

### Monitoring etcd

`etcd` is designed to be easily monitored and it follows industry standards.

#### Metrics

`etcd` exposes Prometheus compatible metrics that can be pulled in realtime. However these metrics are not persisted across node restarts, so once a node restarts, the metrics counters also restart.

`etcd` exposes its metrics to the `/metrics` endpoint and you can spin up a Prometheus server and configure it to pull metrics from that endpoint.

#### Logging

`etcd` uses standard logging formats, it internally uses zap for logging. THis means all logs contain metadata about the log levels to understand what each line is about. It provides 5 logging levels. Error(for errors that occur), Warning(for temporary but important conditions that may cause errors), Notice(for important information), Info(for normal logs in the program flow) and Debug.

An etcd log can look something like this.

```json
{"level":"warn","ts":"2025-07-24T16:58:58.804311+0300","caller":"embed/config.go:1209","msg":"Running http and grpc server on single port. This is not recommended for production."}
```

## Conclusion

Hopefully this article has given you a good understanding of `etcd` and you can setup, interact and operate a simple etcd cluster. However, you learn by doing so i would suggest you set up your own cluster and play around with it. Etcd has a wide range of use case scenarios and to even gain the full power of this system, I would recommend trying to use a programming client, preferably the official Go client to interact and use `etcd`. That being said, that's all I had for today. Thanks for reading.
