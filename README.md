# MongoDB Upsert Performance Bug
This repository demonstrates a performance issue related to MongoDB's `updateOne` with the `upsert: true` option when the query field is not indexed.

## Problem
The provided JavaScript code attempts to update a user's age, creating a new document if one doesn't exist.  Without an index on the `name` field, the `upsert` operation performs a collection scan for each operation, resulting in slow performance, especially for large collections.

## Solution
The solution involves creating an index on the `name` field before performing the upsert.  This allows MongoDB to quickly locate the document or the insertion point, greatly improving performance.

## How to reproduce
1. Clone the repository.
2. Create a MongoDB database.
3. Populate the database with a large dataset.
4. Run the `bug.js` script and observe the execution time.
5. Run `bugSolution.js` and compare the execution time.  The difference in speed highlights the impact of indexing.
