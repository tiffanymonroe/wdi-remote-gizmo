const app = angular.module('MyApp', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({enabled:true});
    $routeProvider.when('/url1', {
        templateUrl: 'included.html',
        controller: function(){
            this.foo = 'bar';
        },
        controllerAs: 'ctrl'
    })
}])
