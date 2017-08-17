// flickr module code
const Flickr = require('flickr-sdk');

const flickr = new Flickr({
	"apiKey": process.env.API_KEY,
	"apiSecret": process.env.API_SECRET
	// you can optionally include these values for testing
	// with your own account, but DO NOT use them for authenticating
	// users, see Authentication section below.
	// "accessToken":       "xxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx",
	// "accessTokenSecret": "xxxxxxxxxxxxxxxx"
});


//need to add to this?
const getPhotos = (res) =>{
  // const responseToClient (res, data) =>{
  //   res.send(data)
  // },
	flickr
		.request()
		.media()
		.search("puppies")
		.get()
		.then(function(response) {
		    // An array of media objects matching the search term
				
				res.send(response)
})
}

module.exports = getPhotos;
