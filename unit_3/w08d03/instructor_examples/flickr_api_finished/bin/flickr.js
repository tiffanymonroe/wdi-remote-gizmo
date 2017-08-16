const Flickr = require('flickr-sdk');

const flickr = new Flickr({
    "apiKey":            "44b0d1c44e4e63b504adae93093c035a",
    "apiSecret":         "54d11a80c697a364",
});



const getPhotos = (res) => {
  console.log(res, ' this is res')
  const r = res;

  const response = (res, data) => {
    res.send(data)
  }

    flickr
      .request()
      .media()
      .search("puppies")
      .get({
        media: 'photos'
      })
      .then(function (res) {
        // console.log(response.body.photos.photo[0])
        const photos = res.body.photos.photo
        response(r, photos)
        console.log(photos)
          // An array of media objects matching the search term
      });

}

// console.log(getPhotos())

module.exports = getPhotos;
