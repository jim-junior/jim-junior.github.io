# GFS: distributed storage systems(DSS)

## WHY IS IT HARD TO BUILD DSS

The main reason people create distributed systems is to get huge aggregate performce of using many servers to get work done.

But this requires to split work accross many servers which is called Sharding

BUt having many servers working on a task can cause faults if one server goes down.

THis then means we need to add tolerence to faults.

To enable fault torallence, we need to create replication.

But introducing replication rsks causing inconsistency in data.

To solve this we need to create consistency but this introduces low performance issues  and hence the loop starts again.

> Case Study Used in Lecture: GFS

