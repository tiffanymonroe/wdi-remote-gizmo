const app = angular.module('MyApp', []);

app.controller('ParentController', ['$http', function($http){
    this.property1 = 'fun';
}]);

app.controller('ChildController', [function(){
    this.property1 = 'awesome';
}]);
