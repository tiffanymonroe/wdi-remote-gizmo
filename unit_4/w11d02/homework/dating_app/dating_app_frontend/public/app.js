const app = angular.module('dating_app', []);

app.controller('mainController', ['$http', function($http){

  this.message = console.log('main controller works!');
  this.users = [];
  this.formdata = {};


  $http({
    method: 'get',
    url: 'http://localhost:3000/users'
  }).then(res => {
    console.log(res)
    this.users = res.data
    console.log(this.users);
  })
  .catch(err => console.log(err));

  this.processForm = function() {
    console.log('processForm function . . .');
    console.log('Formdata: ', this.formdata);

    $http({
      method: 'post',
      url: 'http://localhost:3000/users',
      data: this.formdata
    }).then(res => {
      console.log(res);
      this.users.unshift(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  } //end form


}]) //end of controller
