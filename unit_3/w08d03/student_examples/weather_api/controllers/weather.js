const express = require('express');
const router = express.Router();
const getWeather = require('../bin/weather.js');

//write a route for angular to call

router.get('/getWeather', (req, res)=>{
  getWeather(res);
})

router.post('/', (req, res)=>{
  console.log(req.body.city, 'req.body');
  getWeather(res, req.body.city);
})

module.exports = router;
