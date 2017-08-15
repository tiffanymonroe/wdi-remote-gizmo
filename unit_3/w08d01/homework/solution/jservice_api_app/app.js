const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', function($http){
  const controller = this;

  this.hideAnswer = true;
  this.showAnswer = function(){
    this.hideAnswer = !this.hideAnswer;
  }
  this.jservice = function(){
    $http({
      method: "GET",
      url: "http://jservice.io/api/random"
    }).then(
      function(response){
        controller.foundJServiceInfo = response.data;
        controller.answer = response.data.answer;
      },
      function(err){
        console.log(err);
      }
    )
  }
  this.jserviceTen = function(){
    $http({
      method: "GET",
      url: "http://jservice.io/api/random?count=10"
    }).then(
      function(response){
        controller.data = response.data;
      },
      function(err){
        console.log(err);
      }
    )
  }
  this.jserviceAnimals = function(){
    $http({
      method: "GET",
      url: "http://jservice.io/api/category?id=21"
    }).then(
      function(response){
        controller.data = response.data;
      },
      function(err){
        console.log(err);
      }
    )
  }
}])
