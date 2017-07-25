//Greetings

const express = require('express');
const app = express();

app.get('/greeting/:name', (req, res) => {
  res.send("Hello")
});

app.listen(3000, () => {
  console.log('listening');
})
