const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', '$scope', '$window', function($http, $scope, $window){
    console.log(' this is happening ')
    const controller = this;
    $window.onload = function(){
      console.log('running')
      controller.getTweets()
    },
    this.photos = [],
    this.getTweets = function() {

        $http({
            method: 'GET',
            url: '/photos/getPhotos'
        }).then(
            function(response){
                console.log(response, ' this is response')
                controller.photos = response.data;

            },
            function(err){
                console.log(err);
            }
        );
    }

}])
