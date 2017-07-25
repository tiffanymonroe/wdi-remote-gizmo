const express = require('express');
const app = express();

//Greetings

// app.get('/greeting/:name', (req, res) => {
//   res.send("Hello")
// });
//



//Tip Calculator

//I'm really confused by what we're supposed to do with this one.

// const tip = (total, tipPercentage) => {
//     console.log("I'm confused");
// }
//
// app.get('/tip/:total/:tipPercentage', (req, res) => {
//   res.send(tip[req.params.total.tipPercentage]);
// });


//Magic 8 Ball

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
//

let magic = Math.floor(Math.random() * responses.length) + 0;



app.get('/magic', (req, res) => {
    res.send(magic[req.params])
});

//it runs, but nothing is printing out.

app.listen(3000, () => {
  console.log('listening');
})
