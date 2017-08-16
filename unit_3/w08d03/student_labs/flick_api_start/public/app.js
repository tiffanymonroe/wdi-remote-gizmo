const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', function($http){
    console.log(' this is happening ')
    const controller = this;
    this.getPhotos = function(){
      $http({
        method: "GET",
        url: '/photos'
      }).then(
        function(response){
          console.log(response, 'this is the response');
        }, function(err) {
            console.log(err);
        }
      );
    }
    this.getPhotos();
}]);
