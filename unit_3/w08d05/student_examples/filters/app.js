const app = angular.module('MyApp', []);

app.controller('BaseCtrl', [function(){
  this.text1 = 'octagon gem';
  this.text2 = 'My Desctiption';
  this.date = new Date().getTime();
  this.products = [
    {
      name: 'one',
      price: 5
    },
    {
      name: 'two',
      price: 4
    },
    {
      name: 'three',
      price: 10
    }
  ]
}]);
