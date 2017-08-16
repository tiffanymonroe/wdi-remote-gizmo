const Twit = require('twit')

const T = new Twit({
  consumer_key: 'ez9vq3lajHSuJ98i49CUUP3nr',
  consumer_secret:    'V0EjElqMzmDJxBVxJ8aOHBh972YbXejd0bQCcs9V2zbd4THvy8',
  access_token:        '892115668832706560-DtyBGBoY1gvrOLcA9rD6OqJauRLaXE6',
  access_token_secret:  'EFF0fNiEqJsLhKIAw8w5cNSnZLDTMhB26ih3YkPtTFLpu',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//search for puppies

//arguments
//1. end point
//2. parameters object
//3. callback function for after we get a response from the twitter endpoint



  const getTweets = (res) => {
    const response = (res, data) => {
      res.send(data)
    }
    T.get('search/tweets', { q: 'puppies since:2015-07-11', count: 10 })
                    .catch((err) => {
                      console.log(err)
                    })
                    .then((result) => {
                       let tweets = result.data.statuses;
                        console.log(tweets)
                        response(res, tweets);
                        //calling the res object, passing the data into it
                    })
  }



module.exports = getTweets;
