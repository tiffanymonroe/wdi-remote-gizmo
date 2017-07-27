const express = require('express');
const app     = express();
const fruits  = require('./models/fruits.js');

console.log(fruits)


app.get('/fruits', (req, res) => {
  res.send(fruits);


})

// :index is basically a variable
// that can contain anything
app.get('/fruits/:index', (req, res) => {
    //
    // res.send(fruits[req.params.index])
    res.render('show.ejs', {
      //were creating a variable called
      // fruit that is accessible inside
      // of our ejs page, which happens to be
      // show.ejs
      fruit: fruits
    });
})






app.listen(3000, () => {
  console.log('listening');
})





// CRUD
// Create - Post
// Read   - Get
// Update - patch/put
// Delete - delete






















