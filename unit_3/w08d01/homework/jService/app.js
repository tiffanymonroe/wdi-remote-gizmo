// console.log('Huzzah! app.js is connected for Angular homework');

const app = angular.module("TriviaApp", [function(){
}]);

app.controller("QuestionController", ['$http', function($http){
  const controller = this;
  this.question = function(){
  $http({
    method: "GET",
    url: 'http://jservice.io/api/random'
  }).then(
      function(response){
        console.log(response);
        controller.foundQuestion = response.data[0].question;
      },
      function(err){
        console.log(err);
      }
    );
  }
}]);
