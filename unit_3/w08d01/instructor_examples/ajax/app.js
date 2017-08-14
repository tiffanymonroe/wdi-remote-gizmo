const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', function($http){
    const controller = this;
    this.find = function(){
        $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?t='+this.query+'&y=&plot=short&r=json&apikey=bea723f3'
        }).then(
            function(response){
                controller.foundMovieTitle = response.data.Title;
            },
            function(err){
                console.log(err);
            }
        );
    }
}])
