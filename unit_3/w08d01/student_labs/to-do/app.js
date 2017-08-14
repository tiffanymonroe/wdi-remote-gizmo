const app = angular.module('ToDo', []);

app.controller('ToDoController', [function(){
  this.list = ['buy groceries', 'clean kitchen', 'practice code', 'take a nap'];

  this.add = function(newItem){
    this.list.push(newItem);
  }

  t
}])
