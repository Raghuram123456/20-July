const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'Signup';

let db;

MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log(`Connected to MongoDB database: ${dbName}`);
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

app.post('/api/submit', (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Received data - Name: ${name}, Email: ${email}, Password: ${password}`);

  const collection = db.collection('forms');
  collection.insertOne({ name, email, password })
    .then(result => {
      res.json({ success: true, message: 'Form submitted and saved to MongoDB!' });
    })
    .catch(err => {
      console.error('Error saving to MongoDB:', err);
      res.json({ success: false, message: 'Failed to submit form. Please try again later.' });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
