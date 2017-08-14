const app = angular.module('MyApp', []);

app.controller('ParentController', [function(){
  this.property1 = 'fun';
}]);

app.controller('ChildController', [function(){
  this.property1 = 'awesome';
}]);
