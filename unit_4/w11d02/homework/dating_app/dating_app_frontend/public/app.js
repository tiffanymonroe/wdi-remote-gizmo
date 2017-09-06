const app = angular.module('dating_app', []);

app.controller('mainController', ['$http', function($http){

  this.message = console.log('main controller works!');

  $http({
    method: 'get',
    url: 'http://localhost:3000/users'
  }).then(res => console.log(res))
    .catch(err => console.log(err))

}]) //end of controller
