const express = require('express');
const router = express.Router();
const Coffee = require('../models/coffee.js');

//Create Route
router.post('/', (req, res)=>{
  Coffee.create(req.body, (err, createdCoffee)=>{
    res.json(createdCoffee);
  });
});

//Index Route
router.get('/', (req, res)=>{
  Coffee.find((err, foundCoffee)=>{
    res.json(foundCoffee);
  });
});

module.exports = router;
