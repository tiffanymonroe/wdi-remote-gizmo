const app = angular.module('dating_app', []);

app.controller('mainController', ['$http', function($http){

  $http({
    method: 'get',
    url: 'http://localhost:3000/users'
  }).then(res => console.log(res))
    .catch(err => console.log(err))

}]) //end of controller
