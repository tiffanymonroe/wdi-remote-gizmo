const app = angular.module('dating_app', []);

app.controller('mainController', ['$http', function($http){

  this.message = console.log('main controller works!');
  this.users = [];
  $http({
    method: 'get',
    url: 'http://localhost:3000/users'
  }).then(res => {
    console.log(res)
    this.users = res.data
  })

    .catch(err => console.log(err))

}]) //end of controller
