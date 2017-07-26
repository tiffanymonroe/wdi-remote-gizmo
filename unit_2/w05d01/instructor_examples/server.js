const express = require('express'); // require express package
const app = express(); //execute express function
const fruits = ['apple', 'banana', 'pear'];

app.get('/', (request, response)=>{ //create an event handler for a request to /
    response.send('welcome to the home page');
});

app.get('/somedata', (request, response)=>{ //create an event handler for a request to /somedata
    response.send('here is your amazing data');
});

app.get('/fruits/:index', (request, response)=>{
    response.send(fruits[request.params.index]);
});

app.listen(3000, ()=>{  // have the app start listening on port 3000
    console.log('I have started listening for requests'); //this gets run when the app starts listening
});
