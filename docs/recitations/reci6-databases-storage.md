---
title: Recitation 6 - Databases + Storage
---

# Recitation 6: Databases + Storage

## Staff Overview
- Nicholas Wernink & Alex Barrios
- Emails: [ngw@andrew.cmu.edu](mailto:ngw@andrew.cmu.edu) & [ambarrio@andrew.cmu.edu](mailto:ambarrio@andrew.cmu.edu)
- Office Hours: Wed 2:30 - 4pm (Nicholas), Thu 12pm - 1pm (Alex)

# Overview
## Database
- An organized collection of data that models something
- Commonly used interchangeably to describe database management systems

## DBMS
- The software that manages a database
- Used for defining, creating, querying, updating, etc. data records
- Relational, NoSQL, Vector

  ## SQL vs NoSQL
  ![Screenshot 2024-03-14 at 22 20 07](https://github.com/CMU-17-356/cmu-17-356.github.io/assets/79665965/77c18c99-f1d0-4cb3-afda-222987e743eb)


# ACID Properties
Atomicity - either all operations of the transaction are reflected in the database or none are

Consistency - each transaction preserves the integrity of the data

Isolation - each transaction executes as if it were the only one reading/writing data

Durability - after a transaction completes successfully, the changes are permanent even in the existence of system failures

# Relational (Postgres)
- Tables, rows, columns, primary/foreign keys, etc.

## PostgreSQL
- Free and open source
- ACID compliant
- Highly extensible and supports custom data types and custom functions
- Supports a wide variety of programming languages with strong developer communities making development pretty painless

# Distributed SQL (Cockroach/Yugabyte)
Provide the scalability of NoSQL DBs with the ACID properties of SQL DBs
- Resilient to failures as data is replicated and distributed across many servers
- SQL compatible
- All nodes are able to read and write data
- Utilize consensus algorithms like Raft and Paxos to reach agreement

Typically more expensive than legacy SQL systems because of its distributed nature

You can use packages like Sequelize and typeORM by just changing your connection string!

# Document (MongoDB)
- Tables are collections, rows are documents, and there are no columns
- No data schemas/relationships necessary
- JSON document structure makes development process seamless as it easily maps to Javascript, Python, and many other languages objects
- Provides horizontal scalability through sharding/partitioning data across different nodes
- Heavily developer focused with vibrant dev communities

Popular use cases include real time analytics, IoT applications, time series data, and more

# Wide-column (Cassandra)
- Free, open source NoSQL distributed DBMS by Apache
- Column based instead of row based
- No schemas or joins

Video Links: https://www.youtube.com/watch?v=p18s8Ckn5H4 & https://www.youtube.com/watch?v=ziq7FUKpCS8


# Graph (Neo4j)
- Nodes are entities/objects which can have labels to classify them
- Relationships are connections between nodes which have a direction
- Both nodes and relationships can have properties which are key-value pairs to describe them

Video Link: https://www.youtube.com/watch?v=T6L9EoBy8Zk


# Cache/Key-Value (Redis)
- Data stored in slower databases or those experiencing high load can be retrieved very quickly through the use of a cache
- Typically sits between applications and the primary database to provide a layer of speed and performance for common operations
- Get by <id> and set by <id> are the two most commonly used operations

Redis is now a multi-modal database and can be used for a wide variety of functions including as a primary database


# Vector (Pinecone)
- Indexes and stores vector embeddings for fast retrieval and search
- With vector embeddings, you can search images and audio recordings, support retrieval augmented generations (RAG) for LLMs, and much more

Video Link: https://www.youtube.com/watch?v=dN0lsF2cvm4
![Screenshot 2024-03-14 at 22 20 59](https://github.com/CMU-17-356/cmu-17-356.github.io/assets/79665965/c1ccb471-5781-4ab6-ad46-dbd8e5486bf5)
![Screenshot 2024-03-14 at 22 21 05](https://github.com/CMU-17-356/cmu-17-356.github.io/assets/79665965/a9d13629-c2f9-4c48-a5c5-4c7ee54b60c2)


# Object Storage (S3)
- Objects are the data and buckets are the folders that contain the objects
- Used to store any type of data such as images, videos, text, etc.
- Can be pointed at from a traditional database to display images, videos, etc.

Object storage like AWS S3 provides 11 nines of data durability (i.e. virtually no data loss or corruption) → 1 billion objects over 100 hundred years without losing anyone

![Screenshot 2024-03-14 at 22 21 36](https://github.com/CMU-17-356/cmu-17-356.github.io/assets/79665965/0163b253-ea0c-4913-af19-46b1b117eec5)

![Screenshot 2024-03-14 at 22 21 44](https://github.com/CMU-17-356/cmu-17-356.github.io/assets/79665965/787e9792-e0f8-4284-b926-99abd9cdb068)

![Screenshot 2024-03-14 at 22 21 56](https://github.com/CMU-17-356/cmu-17-356.github.io/assets/79665965/2a3e98db-489f-48db-879b-989aa3bfe643)


# Browser Storage

## Local Storage
- Data is stored in the browser/system meaning that it will exist even when the browser/computer is closed
- However this data is accessible by other sites

## Session Storage
- Data only persists while the tab is open and on refresh is deleted
- More secure since the data is only available to that specific site

## Cookies
- Good for storing things like session IDs and other data that don’t have to be persisted for a long time
- You can set an expiration date/duration for how long you want it to exist and then will be deleted

![Screenshot 2024-03-14 at 22 22 03](https://github.com/CMU-17-356/cmu-17-356.github.io/assets/79665965/ebc0ddf5-cfae-4cee-8d37-f87ce25bb9a8)
