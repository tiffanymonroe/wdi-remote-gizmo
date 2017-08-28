const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.todos = [];
  this.complete = false;
  this.index = 0;
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
  },
  this.updateTodo = function(todo){
    let newComplete;
    if (todo.complete === true){
      newComplete = false
    } else {
      newComplete = true;
    }
    $http({
      method: 'put',
      url: '/todos/' + todo._id,
      data: {
        description: todo.description,
        complete: newComplete
      }
    }).then(function(res){
      controller.getTodos();
    }, function(){
      console.log(err);
    });
  },
  this.deleteTodo = function(todo){
    $http({
      method: 'delete',
      url: '/todos/' + todo._id,

    }).then(function(res){
      controller.getTodos();
    }, function(){
      console.log(err);
    });
  },
  this.editTodo = function(todo){
    $http({
      method: 'put',
      url: '/todos/' + todo._id,
      data: {
        description: this.updatedDescription,
        complete: todo.complete
      }
    }).then(function(res){
      controller.getTodos();
    }, function(err){
      console.log(err);
    });
  }
  this.getTodos();
}]);
