const express = require('express');
const router = express.Router();
const getPhotos = require('../bin/flickr.js');

//write a route for angular to call
router.get('/getPhotos', (req, res)=>{
  getPhotos(res);
})


module.exports = router;
// module.exports = getTweets;
