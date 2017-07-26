const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
console.log(fruits);


// const fruits = ['apple', 'banana', 'pear'];




app.get('/fruits', (req, res) =>{
    res.send(fruits);
});

app.get('/fruits/:index', (req, res) => {
    res.render('show.ejs', {
      //we're creating a variable called fruit that is accesible to our show.ejs page
      fruit: fruits[req.params.index]
    });


})
app.listen(3000, ()=>{
  console.log('listening');

})
