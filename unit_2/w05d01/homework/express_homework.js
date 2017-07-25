const express = require('express');
const app = express();

//Greetings

// app.get('/greeting/:name', (req, res) => {
//   res.send("Hello")
// });
//



//Tip Calculator

//I'm really confused by what we're supposed to do with this one.

const tip = (total, tipPercentage) => {
    console.log("I'm confused");
}

app.get('/tip/:total/:tipPercentage', (req, res) => {
  res.send(tip[req.params.total.tipPercentage]);
});


app.listen(3000, () => {
  console.log('listening');
})
