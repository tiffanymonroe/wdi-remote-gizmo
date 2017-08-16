const express = require('express');
const router = express.Router();
const getPhotos = require('../bin/flickr.js')



router.get('/getPhotos', (req, res) => {
  getPhotos(res);
})



module.exports = router;
// module.exports = getTweets;
