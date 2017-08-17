const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.complete = false;
  this.getTodos = function(){
    // this.todos.push('pineapple')
    $http({
      method: 'get',
      url: '/todos'
    }).then(
      function(res){
        controller.todos = res.data;
        console.log(controller.todos);
      },
      function(err){
        console.log(err);
      }
    )
  },
  this.createToDo = function(){
    $http({
      method: 'post',
      url: '/todos',
      data: {
        description: this.description,
        complete: this.complete
      }
    }).then(
      function(res){
        console.log(res);
      },
      function(err){
        console.log(err);
      }
    )
  }
  this.getTodos();
}]);
