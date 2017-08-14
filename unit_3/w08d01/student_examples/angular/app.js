const app = angular.module('MyApp', []);

app.controller('MyController', [function(){
  this.hello = 'oh hai!';
  this.isActive = true;
  this.items = ['apple', 'banana', 'pear', 'apple'];
  this.divExists = false;
  this.hideDiv = true;
  this.showDiv = true;
  this.imgSrc = 'http://www.pawderosa.com/images/puppies.jpg'

  this.someProperty = 'Why so sad, pupper?';

  this.handleClick = function(){
    this.hideDiv = !this.hideDiv
  }
}]);
