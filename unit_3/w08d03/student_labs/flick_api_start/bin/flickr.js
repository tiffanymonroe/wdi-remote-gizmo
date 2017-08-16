// flickr module code
const Flickr = require('flickr-sdk');

const flickr = new Flickr({
	"apiKey":            "6c2a970900789813c1796ae944b004f7",
	"apiSecret":         "69bdffb902982fce"
	// you can optionally include these values for testing
	// with your own account, but DO NOT use them for authenticating
	// users, see Authentication section below.
	// "accessToken":       "xxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx",
	// "accessTokenSecret": "xxxxxxxxxxxxxxxx"
});


//need to add to this?
const getPhotos = () =>{
  const response = (res, data) =>{
    res.send(data)
  }
  flickr.photos.search({
		text: "puppies"
	}, function(err, result){
				console.log(err);
				console.log(result);
			}
	);
}


module.exports = getPhotos;
