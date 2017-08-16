const express = require('express');
const router = express.Router();
const getTweets = require('../bin/twitbot.js')



router.get('/getTweets', (req, res) => {
  getTweets(res);
})



module.exports = router;
// module.exports = getTweets;
