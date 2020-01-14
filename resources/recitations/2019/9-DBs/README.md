## References

- [Intro to Databases (for people who don't know a whole lot about them)](https://medium.com/@rwilliams_bv/intro-to-databases-for-people-who-dont-know-a-whole-lot-about-them-a64ae9af712)
- [TryRedis](http://try.redis.io/)
- [Introduction to Redis data types and abstractions](https://redis.io/topics/data-types-intro)
- [SQLite]() ~ embedded SQL database
- [Neo4j ~ Graph DB](http://console.neo4j.org/)

## To Be Aware Of

### Columnar vs Row Store

* **Row Storage** - The data sequence consists of the data fields in one table row.
* **Column Storage** - The data sequence consists of the entries in one table column

![Column vs Row](https://github.com/CMU-17-356/cmu-17-356.github.io/blob/master/resources/recitations/9-DBs/images/colrow.png)

### Atomic Operations

```bash
x = GET count
x = x + 1
SET count x

The problem is that doing the increment in this way will only work as long as there is a single client 
using the key. 
See what happens if two clients are accessing this key at the same time:

    Client A reads count as 10.
    Client B reads count as 10.
    Client A increments 10 and sets count to 11.
    Client B increments 10 and sets count to 11.

We wanted the value to be 12, but instead it is 11! This is because incrementing the value in this way 
is not an atomic operation. 
Calling the INCR command in Redis will prevent this from happening, because it is an 
atomic operation. Redis provides many of these atomic operations on different types 
of data.
```

### Transactions & Acid

Transaction - a unit of work performed within a database; often composed of multiple operations:

```sql
BEGIN;
UPDATE accounts SET balance = balance + 100 WHERE id = 10;
UPDATE accounts SET balance = balance - 100 WHERE id = 11;
COMMIT;
```

* Atomicity
* Consistency
* Isolation
* Durability


```
Consider two transactions. T1 transfers 10 from A to B. T2 transfers 10 from B to A. Combined, there 
are four actions:

    T1 subtracts 10 from A.
    T1 adds 10 to B.
    T2 subtracts 10 from B.
    T2 adds 10 to A.

If these operations are performed in order, isolation is maintained, although T2 must wait. Consider what 
happens if T1 fails halfway through. The database eliminates T1's effects, and T2 sees only valid data.

By interleaving the transactions, the actual order of actions might be:

    T1 subtracts 10 from A.
    T2 subtracts 10 from B.
    T2 adds 10 to A.
    T1 adds 10 to B.
```

**Without isolation, what bad things could happen?**
