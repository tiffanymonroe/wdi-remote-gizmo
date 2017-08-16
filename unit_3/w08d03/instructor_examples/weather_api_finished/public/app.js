const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', function($http){
    console.log(' this is happening ')
    const controller = this;
    this.query   = ''
    this.message = '',
    this.getWeather = function() {
      console.log('called')
        $http({
            method: 'GET',
            url: '/weather'
        }).then(
            function(response){
                console.log(response, ' this is response')
                controller.message = response.data.main.temp + " in " + response.data.name
                // $scope.photos = response

            },
            function(err){
                console.log(err);
            }
        );
    },
    this.postWeather = function() {
      console.log('called')
      const data = {
        message: controller.query
      }
      console.log(controller.query, 'post')
        $http({
            method: 'POST',
            url: '/weather',
            data: '{"username":"matt","password":"matty"}',
            headers: {
                "Content-Type: application/json"
              }

        }).then(
            function(response){
                console.log(response, ' this is response from post')

                // $scope.photos = response

            },
            function(err){
                console.log(err);
            }
        );
    }


}]);
