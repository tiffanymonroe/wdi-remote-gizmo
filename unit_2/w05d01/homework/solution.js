
// ---
// Title: JS Express & Routes Practice - SOLUTIONS<br>
// ---


// #Express Yourself - Solutions
//

// Require `express`
var express = require("express");
var app = express();

// Listen to port 3000
app.listen(3000);

// Greetings

app.get('/greeting/', function(req, res) {
  res.send("Hello, stranger");
});

app.get('/greeting/:name', (req, res) => {
  res.send("Wow! Hello there " + req.params["name"]);
});

// Tip Calculator

app.get('/tip/:total/:percentage', (req, res) => {
  res.send("Your tip should be: $" + (req.params["total"] * req.params["percentage"]) / 100);
});

// Magic 8 Ball
var answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:question', (req, res) => {
  res.send(req.params["question"] + "<br>" + "Magic 8 Ball says: " + answers[Math.floor(Math.random()*answers.length)]);
});

// Hungry for more?

// Fibonacci
// Need to comment this out if going to test the second section with same route.
// app.get('/fibonacci/:number', (req, res) => {
//
//   const num = parseInt(req.params["number"]);
//
//   const isFib = (num) => {
//   let prev = 0;
//   let curr = 1;
//
//   while(prev<=num){
//      if(prev == num){
//        res.send("Sweet number, dude.");
//        return;
//      }
//      curr = prev + curr;
//      prev = curr - prev;
//    }
//   res.send("Brah, I can tell this ain't a fibonacci number. Wack.");
//   };
//
//   isFib(num);
// });


// ### Fibonacci  continued

app.get('/fibonacci/:number', (req, res) => {

  const num = parseInt(req.params["number"]);
  const fibonacci = (num) => {
    let a = 1, b = 0, temp;
    while (num >= 0){
      let temp = a;
      a = a + b;
      b = temp;
      num--;
    }

    const index = b.toString();
    res.send(index);
  }
  fibonacci(num);
});
