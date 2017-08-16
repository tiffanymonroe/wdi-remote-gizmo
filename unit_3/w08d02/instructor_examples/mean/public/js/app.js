const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.createTodo = function(){
        $http({
            method:'POST',
            url:'/todos',
            data: {
                description: this.description,
                complete: this.complete
            }
        }).then(
            function(response){
                controller.getTodos();
            },
            function(){

            }
        );
    }

    this.getTodos = function(){
        $http({
            method:'GET',
            url:'/todos'
        }).then(
            function(response){
                controller.todos = response.data;
            },
            function(){

            }
        );
    }
    this.getTodos();
}]);
