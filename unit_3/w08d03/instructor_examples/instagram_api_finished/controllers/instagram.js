const Flickr = require('flickr-sdk');
const express = require('express');
const router = express.Router();


const flickr = new Flickr({
    "apiKey":            "44b0d1c44e4e63b504adae93093c035a",
    "apiSecret":         "54d11a80c697a364",
});



flickr
.request()
.media()
.search("puppies")
.get({
  media: 'photos'
})
.then(function (response) {
  console.log(response.body.photos.photo[0])
    // An array of media objects matching the search term
});

module.exports = router;
// module.exports = getTweets;
