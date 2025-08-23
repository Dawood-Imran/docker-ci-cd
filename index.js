const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to My Dockerized App</h1>
    <p>Name: Dawood Imran</p>
    <p>Email: dawood.imran@tkxel.io</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});