const Twit = require('twit')

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token:  process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
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
