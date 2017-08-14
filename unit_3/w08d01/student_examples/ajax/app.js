const app = angular.module('MyApp', []);

app.controller('BaseCtrl', ['$http', function($http){
  this.find = function(){
    const controller = this;
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?t=star+wars&y=&plot=short&r=json&apikey=bea723f3'
    }).then(
      function(response){
        controller.foundMovieTitle = response.data.Title;
      },
      function(err){
        console.log(err);
      }
    );
  }
}]);
