const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';
let db;

// Connect to MongoDB
async function connectToMongo() {
  const client = new MongoClient(mongoUri);
  await client.connect();
  db = client.db('mydb');
  console.log('Connected to MongoDB');
}

// Initialize MongoDB connection
connectToMongo().catch(console.error);

app.get('/', async (req, res) => {
  if (!db) {
    return res.send('<h1>Error: MongoDB not connected</h1>');
  }
  // Insert or retrieve a sample message
  const collection = db.collection('messages');
  await collection.insertOne({ text: 'Hello from MongoDB!' }, { ignoreUndefined: true });
  const messages = await collection.find({}).toArray();
  const message = messages[0]?.text || 'No message found';
  res.send(`
    <h1>Welcome to My Dockerized App</h1>
    <p>Name: Dawood Imran</p>
    <p>Email: dawood.imran@tkxel.io</p>
    <p>Message from MongoDB: ${message}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});