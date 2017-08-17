const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', function($http){
    console.log(' this is happening ')
    const controller = this;
    this.message = '',
    this.getWeather = function() {
      console.log('called');
        $http({
            method: 'GET',
            url: '/weather/getWeather'
        }).then(
            function(response){
                console.log(response, ' this is response')
                console.log(response.data.main.temp);
                controller.message = response.data.main.temp + " in " + response.data.name

            },
            function(err){
                console.log(err);
            }
        );
    },
    this.postWeather = function() {
      console.log('called');
      const data = {
        city: controller.city
      }
      console.log(controller.city, 'post');
      $http({
        method: 'POST',
        url: '/weather',
        data: data
      }).then(
          function (response) {
            console.log(response, ' this is the response from POST');
            controller.message = "The weather is " + response.data.main.temp + " in " + response.data.name

        },
          function(err){
            console.log(err);
        }
      )
    }
    this.getWeather();
    this.postWeather();
}])
