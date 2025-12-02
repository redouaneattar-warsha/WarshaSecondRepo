const express = require('express');
const app = express();
const port = 4001;

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/users', (req, res) => {
  res.send('GET: List all users');
});

app.post('/users', (req, res) => {
  res.send('POST: Create a user');
});

app.put('/users/:id', (req, res) => {
  res.send(`PUT: Update user ${req.params.id}`);
});

app.delete('/users/:id', (req, res) => {
  res.send(`DELETE: Delete user ${req.params.id}`);
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});