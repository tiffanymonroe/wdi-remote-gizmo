const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', function($http){
    console.log(' this is happening ')
    const controller = this;
    this.getTweets = function() {
        $http({
            method: 'GET',
            url: '/tweets/getTweets'
        }).then(
            function(response){
                console.log(response, ' this is response')

            },
            function(err){
                console.log(err);
            }
        );
    }
    this.getTweets();
}])
