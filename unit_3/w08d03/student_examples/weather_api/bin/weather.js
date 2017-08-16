const request = require('request');
const apiKey = '5ea96e4fbebffd71b77999df95b00ec5'

const getWeather = (res) =>{
  const responseToClient = (res, data) =>{
    res.send(data)
  }
    request("https://api.openweathermap.org/data/2.5/weather?q=Los+Angeles&APPID=" + apiKey, function(error, response, body){
      // console.log('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.

      responseToClient(res, body);

    })
  }


module.exports = getWeather;
