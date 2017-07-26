
const express = require('express');
const app = express();

app.get('/', (request, response)=>{
  response.send('welcome to the home page');
})

app.get('/somedata', (request, response)=>{
  response.send('here is your amazing data');
})

app.get('/:username', (request, response)=>{
  console.log(request.params.username)
})
app.listen(3000, ()=>{
  //app function listening on port 3000
  console.log("I have started listening for requests");
})


//we built ourselves a home page!
