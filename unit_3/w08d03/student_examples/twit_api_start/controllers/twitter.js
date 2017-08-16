const express = require('express');
const router = express.Router();
const getTweets = require('../bin/twitbot.js');

//write a route for angular to call

router.get('/getTweets', (req, res) =>{
  getTweets(res);
});




module.exports = router;
