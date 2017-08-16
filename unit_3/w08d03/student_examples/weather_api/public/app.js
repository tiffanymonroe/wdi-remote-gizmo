const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', function($http){
    console.log(' this is happening ')
    const controller = this;
    this.getWeather = function() {
        $http({
            method: 'GET',
            url: '/weather/getWeather'
        }).then(
            function(response){
                console.log(response, ' this is response')
                console.log(response.data.main.temp);
            },
            function(err){
                console.log(err);
            }
        );
    }
    this.getWeather();
}])
