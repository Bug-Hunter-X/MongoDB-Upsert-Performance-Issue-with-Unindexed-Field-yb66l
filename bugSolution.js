```javascript
db.collection('users').createIndex( { name: 1 } );

const query = { name: 'John Doe' };
const update = { $set: { age: 30 } };

db.collection('users').updateOne(query, update, { upsert: true });
```
Adding `db.collection('users').createIndex( { name: 1 } );` before the `updateOne` operation creates an index on the `name` field.  This significantly speeds up the upsert operation by allowing MongoDB to efficiently locate documents or insertion points.