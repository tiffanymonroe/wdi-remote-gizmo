// console.log('connected to worldbank');
const app = angular.module('worldbank', []);

app.controller('mainController', ['$http', function($http){
  this.formdata = {};
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
  },
  this.processForm = function(model){
    $http({
      method: 'POST',
      url: '/wbinfo',
      data: this.formdata
    }).then(function(data){
      console.log("This is the data ", data);
    });
  }

  this.displayData();
  this.displayRegions();
}]);
