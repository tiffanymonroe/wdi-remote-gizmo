const express = require('express');
const router = express.Router();
const getWeather = require('../bin/weather.js')

router.get('/', (req, res) => {
  getWeather(res, 'chicago')
})

router.post('/', (req, res) => {
  console.log(req.body, 'req.body')
  console.log(req.params)
  const obj = {
    body: req.params,
    message: 'hello'
  }
  res.send(obj)
  // getWeather(res)
  // res.redirect('/weather')
})



module.exports = router;
// module.exports = getTweets;
