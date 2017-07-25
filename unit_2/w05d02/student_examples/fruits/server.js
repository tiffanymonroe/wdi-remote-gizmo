const express = require('express');
const app = express();

// const fruits = ['apple', 'banana', 'pear'];

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];


app.get('/fruits', (req, res) =>{
    res.send(fruits);
});
app.listen(3000, ()=>{
  console.log('listening');

})
