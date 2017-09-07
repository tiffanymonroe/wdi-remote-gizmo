// console.log('do you want to build a snowman?');

const app = angular.module('product-reviews', []);

app.controller('mainController', ['$http', function($http){

  this.message = 'under control!';
  this.products = [];
  this.reviews = false;

  $http({
    method: 'get',
    url: 'http://localhost:3000/products',
  }).then(res => {

    this.products = res.data
    console.log(this.products);


  }).catch(err => console.log(err))

  this.getReviews = function(id){
    console.log('the image was clicked');
    this.reviews = true;
  $http({
    method: 'get',
    url: 'http://localhost:3000/products/' + id + '/reviews'
  })}
}]); //end controller
