# Understanding OCI Runtimes: containerd, Shims, and the Container Lifecycle

![](/img/oci-banner.png)

"it works on my machine" is a phrase that was once common in the Software Engineering World. It often was used in situtations where teams of multiple people were working on a project and often faced incompatability issues as the software project was used across different machine environments.

As DevOps became more standardised, it brought a necessity of having a standard way to package software applications that allowed them to be used accross different machine configurations. This led to the birth of "containers". However, for a while there where multiple continer technologies such as Docker, rkt, Warden, LXC. To solve this, a bunch of industry leaders decided to come together and decided to draft a standardized specification for containers which resulted into [The Open Container Initiative](https://opencontainers.org/).

There are currently three OCI specifications in development and use: the Runtime Specification (runtime-spec), the Image Specification (image-spec), and the Distribution Specification (distribution-spec). This article will focus on the Runtime Spec

## The OCI Runtime Specification

The OCI Runtime Specification is a set of rules and standards that define how a container should be run after it is unpacked from an image. It follows the Image Spec that defines how software should be packaged into containers. The Runtime Spec is implemented by what are called **OCI runtimes**. And each often has it own advantage over the other. Notable OCI runtimes include:

- `runc`: The most popular runtime which was originally donated by Docker to serve as the industry's reference standard
- Kata Containers: Uses lightweight VMs for stronger isolation.
- gVisor: Provides a sandboxed kernel for enhanced security
- urunc: Another early stage OCI runtime that allows you to run unikernels as containers.

This specification focuses on three primary areas which are the Filesystem Bundle, Configuration and Container Lifecycle.

### Filesystem Bundle

The filesystem bundle is the unpacked container data and configuration. The specification defines a standard format that should be followed when storing a container and its data on disk. The spec expects you to have a configuration file `config.json` and the containers root file system `rootfs` in a single directory at the top level. The root file system directory is referenced within the `config.json` file via the `root.path` configuration variable. The final bubdle structure is expected to look similar to this:

```sh
my-bundle/
├── config.json
└── rootfs/
    ├── bin/
    ├── lib/
    └── ...
```

### Configuration

The configuration is stored in the erlier mentioned `config.json` and it consists of metadata that defines how the OCI runtime will run the container. It is stored in json format and detailed JSON schema can be found in the [official schema config](https://github.com/opencontainers/runtime-spec/blob/main/schema/config-schema.json). However we shall look at the common important configuration fields. These include:

1. Specification version

This is a required field that defines what OCI Runtime specification version is being used. denoted by `ociVersion` and accepts a SemVer format value.

2. Root

The `root` field as metioned above is used to specifiy the path to the root file system of the container. It is an object has two values, `path` and `readonly`. Path specifies the path to the path to the root file system and can be either absolute or relative to `config.json`. The `readonly` field is used to specify whether the filesystem should be readonly in the container, THis field is not required in windows containers.

3. Process

The next important field is the `process` field. This is an object that contains configurations about the runtime process of the container and how it will be triggered and run. It contains child values that include `env` that tores an array of environment variables that will be used when running the container process. `cwd` this specifies the current working directory that the process will be run in. `args` stores and array of the process command and its arguments that will be run eg `python manage.py runserver` will be `["python", "manage.py", "runserver"]`. Another important one is the `user` object that contains the configuration values of the user and group that will be used to run the process in the container.

4. Hooks

Hooks are one other important configuration value that is stored in the `config.json`. It contains definitions of standard hooks that will be run at the different stages of the Runtime lifecycle(We shall look at it below). The list of hooks that are used include that following, `prestart`, `createRuntime`, `createContainer`, `startContainer`, `poststart` and `poststop`. We shall look at when each is triggered in the Runtime Lifecycle section.

Other fields such as Annotaions, Hostname, Domainnamme and mounts also exist, you can check them out in the [OCI Runtime Specification Document](https://github.com/opencontainers/runtime-spec/blob/main/config.md)

A `config.json` file is expected to look something similar to this:

```json
{
    "ociVersion": "1.0.1",
    "process": {
        "terminal": true,
        "user": {
            "uid": 1,
            "gid": 1,
            "additionalGids": [
                5,
                6
            ]
        },
        "args": [
            "sh"
        ],
        "env": [
            "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
            "TERM=xterm"
        ],
        "cwd": "/",
    },
    "root": {
        "path": "rootfs",
        "readonly": true
    },
    "hostname": "slartibartfast",
    "hooks": {
        "prestart": [
            {
                "path": "/usr/bin/fix-mounts",
                "args": [
                    "fix-mounts",
                    "arg1",
                    "arg2"
                ],
                "env": [
                    "key1=value1"
                ]
            },
            {
                "path": "/usr/bin/setup-network"
            }
        ],
        "poststart": [
            {
                "path": "/usr/bin/notify-start",
                "timeout": 5
            }
        ],
        "poststop": [
            {
                "path": "/usr/sbin/cleanup.sh",
                "args": [
                    "cleanup.sh",
                    "-f"
                ]
            }
        ]
    },

  // other fields too
}
```

### Lifecycle and Standard Operations

The Specification defines a standard lifecycle that containers are supposed to follow though out their existance and execution by the OCI runtime.

At the core, the container has state that defines different properties of the container at a certain point in the lifecycle. This state defines properties like the container ID, status, Process ID, Bundle Path and annotations. It will often look like this

```json
{
    "ociVersion": "0.2.0", // the OCI spec version
    "id": "oci-container1", // this has to be unique across containers
    "status": "running", // it can be either creating, created, running, stopped
    "pid": 4422, // the process ID
    "bundle": "/containers/redis", // the path to the bundle
    "annotations": { // extra annotations
        "myKey": "myValue"
    }
}
```

#### Standard Operations

The program that implements the OCI runtime(eg. runc) must expose certain standard operations that are expected. These are used my the High level manager. The commands are also associated with the container lifecycle. The include the following:

1. Create

This command is responsible for creating the container, it can be denoted by `create <container-id> <path-to-bundle>` since it takes in a unique container id and the bundle path for the container that is to be created, these are all required paramenter. And the command is expected to fail if either of the paramentes is not provided.

2. Start

Once the container is created, it can then be started by running the start command denoted by `start <container-id>` using the container id specified when creating the container.

3. Kill

It can then be killed or stop the container using the kill command that is denoted by `kill <container-id> <signal>` with signal being a type of kill signal that is to be sent to the container.

4. Query

Another command to be exposed it the query command for fetching container state, it is denotd by `state <container-id>`.

5. Destroy

This command is meant to delete the container once its killed i.e the state is `stopped`. its is denoted by `delete <container-id>`

#### Lifecycle

Below is the standard container lifecyle that is followed and by the runtime. It indicates when which hooks should be run. In this article we have pasted it as is in the OCI Runtime Specification.

The lifecycle describes the timeline of events that happen from when a container is created to when it ceases to exist.

1. OCI compliant runtime's `create` command is invoked with a reference to the location of the bundle and a unique identifier.
2. The container's runtime environment MUST be created according to the configuration in `config.json`.
    If the runtime is unable to create the environment specified in the `config.json`, it MUST generate an error.
    While the resources requested in the `config.json` MUST be created, the user-specified program (from `process`) MUST NOT be run at this time.
    Any updates to `config.json` after this step MUST NOT affect the container.
3. The `prestart` hooks MUST be invoked by the runtime.
    If any `prestart` hook fails, the runtime MUST generate an error, stop the container, and continue the lifecycle at step 12.
4. The `createRuntime` hooks MUST be invoked by the runtime.
    If any `createRuntime` hook fails, the runtime MUST generate an error, stop the container, and continue the lifecycle at step 12.
5. The `createContainer` hooks MUST be invoked by the runtime.
    If any `createContainer` hook fails, the runtime MUST generate an error, stop the container, and continue the lifecycle at step 12.
6. Runtime's `start` command is invoked with the unique identifier of the container.
7. The `startContainer` hooks MUST be invoked by the runtime.
    If any `startContainer` hook fails, the runtime MUST generate an error, stop the container, and continue the lifecycle at step 12.
8. The runtime MUST run the user-specified program, as specified by `process`.
9. The `poststart` hooks MUST be invoked by the runtime.
    If any `poststart` hook fails, the runtime MUST generate an error, stop the container, and continue the lifecycle at step 12.
10. The container process exits.
    This MAY happen due to erroring out, exiting, crashing or the runtime's `kill` operation being invoked.
11. Runtime's `delete` command is invoked with the unique identifier of the container.
12. The container MUST be destroyed by undoing the steps performed during create phase (step 2).
13. The `poststop` hooks MUST be invoked by the runtime.
    If any `poststop` hook fails, the runtime MUST log a warning, but the remaining hooks and lifecycle continue as if the hook had succeeded.

![](/img/oci-lifecyle.png)

## The Architecture: Shim-v2 and the Communication Flow

Having looked at the OCI runtime specification. Lets now look at how its works in real life from when you run a command like `docker run ....` or start a container in a Kubernetes Pod.

The communication flow from when you run a command to create or start a container to the actual program that starts the container is composed of multiple layers. This assuming you are using a command line tool like `nerdctl` the communication flow will be as follows:

```sh
Client (ctr / nerdctl / Kubernetes): The client you interact with
    ↓
containerd: The High level manager or container runtime daemon
    ↓
containerd-shim: runtime shim
    ↓
runc: OCI runtime
```

Before continuing, it is important to understand the distinction between these terms:

- Docker / nerdctl / Kubernetes → user-facing tools
- `containerd` → high-level container manager
- OCI Runtime (runc, crun, kata) → low-level runtime that actually creates containers
- OCI Runtime Specification → the standard runtimes must follow

The OCI Runtime Specification is not software itself. It is a contract that runtimes implement.

In the above layout, you can notice that components are split up into multiple layers, this comes with many advantages and also improves isolation. lets look at layer by layer and what its role is.

### containerd

This is a long running process or deamon that is in charge of managing containers at a high level. Its the program that your Client interacts with when you run a command to interact with the container. `containerd` exposes and API that clients can interact with. 

It is incharge of carrying out functions like:

- image pulling/unpacking
- snapshots/filesystems
- container metadata
- lifecycle management
- networking integration hooks
- task supervision
- CRI integration for Kubernetes

However, when it comes to the function of creating the actual container process. It delegates this task to the OCI runtimes like `runc`, `urunc` and Kata containers etc.

However, even `containerd` does not interact directly with the OCI runtime, It rather leaves this task to a specific layer called the `containerd-shim`.

### The Shim

The `containerd-shim` is the middleman between the OCI runtime and `containerd`, its often OCI runtime-specific meaning, there is no single shim program for all OCI runtimes. They are often named following the `containerd-shim-<runtime>-v2` pattern e.g `containerd-shim-runc-v2`.

Historically in `shim-v1`, the shim was mantained by the `containerd` mantainers but as containers and OCI runtimes became more complex and robust handling different concerns. The shim had to be split and each OCI runtime was left to impelement its own shim. The only shim mantained by the `containerd` mantainers is the `containerd-shim-runc-v2` since its an industry standard.

This spliting of the shim from the main containerd process means even if `containerd` crashes, or restarts. The containers will not also crash or stop but rather continue running.

The main roles of the shim include:

- Launching OCI runtime binaries, i.e calling the `create/start/delete container` commands.
- Reconnecting containers after daemon restart
- Reporting events, state and metrics
- Supervising Containers
- managing stdio pipes
- process reaping
- checkpoint coordination

etc.

### OCI runtime

The shim guaranties that the OCI runtimes focuses on ensuring the OCI specification is met. This means that the OCI runtime has to focus on exposing the commands states in the spec which are `create/start/delete container`. Implying that the OCI runtime is NOT a deamon but rather a commandline program that is called by the shim to run those commands and exists after a command is run.

### containerd Plugin Architecture

As mentioned before, the OCI specification is just a standard or contract for containers and there are multiple types of OCI runtimes. And `containerd` ensures to be as modular as possible to be able to support any runtime that respects the OCI runtime specification.

To make this possible, `containerd` uses a plugin model, where, runtimes, CRIs and other dependencies can be configured dynamically as plugins. Almost everything inside it is a plugin, even core functionality.

Instead of being one large hardcoded system, `containerd` is more like the plugin manager combined + API + dependency graph. At startup it loads the plugins, resolve the dependencies and initializes their services.

The plugins come in different types and some include:

| Plugin Type | Purpose                  |
| ----------- | ------------------------ |
| Content     | image layer storage      |
| Snapshotter | filesystem layers        |
| Runtime     | container execution      |
| Metadata    | container/image metadata |
| GRPC        | API services             |
| CRI         | Kubernetes integration   |
| Diff        | filesystem diffing       |
| Event       | pub/sub events           |
| Task        | process lifecycle        |

Plugins are configured in the `/etc/containerd/config.toml` and you can read more about the plugin model in the [containerd Plugin documentation](https://github.com/containerd/containerd/blob/main/docs/PLUGINS.md)

## Beyond Containers

This standardisation of the OCI runtime and the plugable nature of its other components has led to new amazing kinds of runtimes that go beyond just containers. These runtimes now use this specification to solve different needs in the cloud native ecosystem.

Some amazing OCI runtimes to look out for that solve special needs include `urunc`, a runtime that focuses on uniKernels, Kata Containers, this focuses on lightweight Virtual machines, and new runtimes that are enabling execution of WebAssembly modules.

Thats it for today, you can always check out the formal detail OCI Runtime Specification and the ither two specifications at [opencontainers.org](https://opencontainers.org/)