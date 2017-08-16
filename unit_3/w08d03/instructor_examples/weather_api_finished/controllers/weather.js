const express = require('express');
const router = express.Router();
const getWeather = require('../bin/weather.js')

router.get('/', (req, res) => {
  getWeather(res, 'chicago')
})

router.post('/', (req, res) => {
  console.log(req.body.city, 'req.body')

  getWeather(res, req.body.city)

})



module.exports = router;
// module.exports = getTweets;
