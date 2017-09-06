const express = require('express');
const app = express();
const PORT = 2000 || process.env.PORT;

app.use(express.static('public'));


app.listen(PORT, ()=>{
  console.log("I'm listening on port: ", PORT);
});
