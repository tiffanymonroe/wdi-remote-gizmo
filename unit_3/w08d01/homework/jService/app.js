// console.log('Huzzah! app.js is connected for Angular homework');

const app = angular.module("TriviaApp", [function(){
}]);

app.controller("TriviaController", ['$http', function($http){

  this.question = function(){
  $http({
    method: "GET",
    url: 'http://jservice.io/api/random'
  }).then(
      function(response){
        console.log(response);
      },
      function(err){
        console.log(err);
      }
    );
  }
}]);
