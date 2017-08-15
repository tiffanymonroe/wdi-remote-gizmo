// console.log('Huzzah! app.js is connected for Angular homework');

const app = angular.module('CarsApp', []);

app.controller('CarsController', [function(){
  this.types = ["Honda", "Ford", "Chevy", "Tesla"];
  this.colors = ["gold", "blue", "silver", "white", "black", "grey"];
}]);
