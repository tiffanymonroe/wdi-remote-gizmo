console.log('hello');

const app = angular.module('noticeboard', []);

app.controller('mainController', ['$http', function($http){
  this.message = "hi, I am from the controller!";
  this.notices = [];

  $http({
    method: 'get',
    url: 'http://localhost:3000/notices'
  }).then(response => {
    this.notices = response.data
  })
  .catch(err => console.log(err))

  this.processForm = () => {
    console.log('process form runs');
    console.log('here is the formdata', this.formdata);

    $http({
      method: 'post',
      url: 'http://localhost:3000/notices',
      data: this.formdata
    }).then(response => {
      console.log(response)
      this.notices.unshift(response.data)
    })
    .catch(err => console.log(err));
  }
}])
