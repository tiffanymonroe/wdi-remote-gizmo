const app = angular.module('MyApp', []);

app.directive('productTitle', function(){
    return {
        templateUrl: 'included.html',
        controller: function(){
            this.foo = 'bar';
        },
        controllerAs: 'ctrl'
    }
})
