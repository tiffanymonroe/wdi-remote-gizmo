// console.log('connected to worldbank');
const app = angular.module('worldbank', []);

app.controller('mainController', ['$http', function($http){
  const controller = this;
  this.displayData = function(){
      $http({
        method: 'GET',
        url: '/wbinfo/count'
      }).then(function(response){
        controller.count = response.data;
      }, function(err){
        console.log(err);
      }
    );
  }
  this.displayData();
}]);
