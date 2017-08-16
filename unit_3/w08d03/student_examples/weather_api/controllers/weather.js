const express = require('express');
const router = express.Router();
const getWeather = require('../bin/weather.js');

//write a route for angular to call

router.get('/getWeather', (req, res)=>{
  getWeather(res);
})

module.exports = router;
// module.exports = getTweets;
