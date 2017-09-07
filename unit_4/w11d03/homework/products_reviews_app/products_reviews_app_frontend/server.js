//dependency
const express = require('express');
const app = express();

//middleware
app.use(express.static('public'));

//listener
const port = 1700;
app.listen(port, () => {
  console.log('listening on port: ', port);
})
