//Dependencies
const express = require('express');
const app = express();


//Middleware
app.use(express.static('public'));


//Listener
const port = 2000;
app.listen(port, ()=>{
  console.log('listening on port: ', port);
})
