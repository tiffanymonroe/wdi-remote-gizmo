const app = angular.module('MyApp', []);


app.controller('baseCtrl', ['$http', function($http){
  this.search = 
  this.find() = function(){
  $http({
    method: "GET",
    url: 'http://www.omdbapi.com/?s=' + "" + '&y=&plot=short&r=json&apikey=bea723f3'
  }).then(
    function(response){
      console.log(response);
    },
    function(err){
      console.log(err);
    }
  );
}
}]);
