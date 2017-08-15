// console.log('Huzzah! app.js is connected for Angular homework');

const app = angular.module('CarsApp', []);

app.controller('CarsController', [function(){
  this.types = ["Honda", "Ford", "Chevy", "Tesla"];
  this.colors = ["gold", "blue", "silver", "white", "black", "grey"];
}]);

app.controller('DriversController', [function(){
  this.name = "Tiffany";
  this.driverImg = 'https://cdn.pixabay.com/photo/2013/08/12/11/10/dog-171773_1280.jpg'
  this.isShy = false;
}]);
