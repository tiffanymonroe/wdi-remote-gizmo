const app = angular.module('FastLane', []);

app.controller('CarsController', [function(){
  this.types = ["Honda", "Ford", "Chevy", "Tesla"];
  this.colors = ["gold", "blue", "silver", "white", "black", "grey"];
}]);

app.controller('DriversController', [function(){
  this.name = "Cole Trickle";
  this.driverImg = "http://www.onallcylinders.com/wp-content/uploads/2012/08/Cole-Trickle.jpg";
  this.isShy = false;
}]);
