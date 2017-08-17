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
  },
  this.displayRegions = function(){
      $http({
        method: 'GET',
        url: '/wbinfo/uniqueRegions/'
      }).then(function(response){
        controller.regions = response.data;
        // console.log(response);
      }, function(err){
        console.log(err);
      }
    );
  },
  this.showInfo = function(region){
    $http({
      method: 'GET',
      url: '/wbinfo/byName/' + region
    }).then(function(response){
      controller.info = response.data;
      console.log(controller.info);
    }, function(err){
      console.log(err);
    }
  );
  }
  this.displayData();
  this.displayRegions();
}]);
