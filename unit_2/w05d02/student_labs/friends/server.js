const express = require('express');
const app = express();

// const friends = ['Monica', 'Chandler', 'Joey', 'Ross', 'Rachel', 'Phoebe'];


const friends = [
  {
    name:'Monica',
    age: 25,
    location: 'Apt 20',
    eyeColor: 'blue',
    hairColor: 'black'
  },
  {
    name: 'Chandler',
    age: 24,
    location: 'Apt 19',
    eyeColor: 'brown',
    hairColor: 'brown'
   },
   {
     name: 'Joey',
     age: 24,
     location: 'Apt 19',
     eyeColor: 'brown'
     hairColor: 'black'
   }, '
   Ross', 'Rachel', 'Phoebe'];


app.get('/friends', (req, res) => {
  res.send(friends);
});

app.listen(3000, () => {
  console.log("I'll be there for you...");
});
