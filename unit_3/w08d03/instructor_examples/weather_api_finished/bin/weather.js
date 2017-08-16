const request = require('request');

const apiKey = '4507ec27b0a5b32877e856da0ceca6c9'

const getWeather = (res, city) => {

  const responseToClient = (res, data) =>{
    res.send(data)
  }

    request("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey, function (error, response, body) {

      const parsedBody = JSON.parse(body)
      responseToClient(res, body)
      console.log(parsedBody.main.temp, parsedBody.name)
    });
}



module.exports = getWeather;
