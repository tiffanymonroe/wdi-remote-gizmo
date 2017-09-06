const express = require('express');
const app = express();
const PORT = 2000;
//port 2000 because Rails is running on Port 3000


app.use(express.static('public'));

app.listen(PORT, ()=>{
  console.log('noticeboard frontend, port: ', PORT);
})
