# Primary Backup Replication

## failures

This kind of Replication cannot deal with all types of failuress. It can mainly deal with:

- Fail - Stop failure: this is when one computer on your system fails. e.g its cut off from the network or power switched of

What this replication does not cover is:

- Bugs in failure.
- Corollated failures: eg when the entire data center is shut down by an earth quake and the entire system is turn off.

Replication is often expensive and the decision to choice to have it of often more of an economic question than a technical one, eg. if you are runing a bank system, replication would be ideal because of the value of the system correctness and uptime to the customer provides compared to day running your own personal blog website.

## Types of Replication

- State Transfer: In this the primary transfers its entire state of memory or data to the Backup

- Replicated State Machine: in this model, the primary only sends operations log to the backup, i.e if its a web server and recieves incoming external requests to carry out writes or updates etc, its sends a copy of these requests to the backup and the backup applies them to its own data.

### Replicated State Machine

TO build a RSM we have certain questions to answer:

- What state are we replicating?
- How tighly sysnchronized is the primary and backup
- There shouild be some kind of mechanism to inform the client that the primary has failed and not communication should be done with the backup. (Cutover system)
- How to cope with cat over anomalies
- How to create new replicas

> CASE STUDY: VMware