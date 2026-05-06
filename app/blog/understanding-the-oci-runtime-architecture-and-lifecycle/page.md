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

The configuration is stored in the erlier mentioned `config.json` and it consists of metadata that defines how the Container Runtime will run the container. It is stored in json format and detailed JSON schema can be found in the [official schema config](https://github.com/opencontainers/runtime-spec/blob/main/schema/config-schema.json). However we shall look at the common important configuration fields. These include:

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

The Specification defines a standard lifecycle that containers are supposed to follow though out their existance and execution by the container runtime.

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