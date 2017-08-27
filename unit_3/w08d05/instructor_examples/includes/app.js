const app = angular.module('MyApp', []);

app.controller('BaseCtrl', [function(){
    this.text1 = 'octogon gem';
    this.text2 = 'My Description';
    this.date = new Date().getTime();
    this.products = [
        {
            name:'one',
            price:5
        },
        {
            name: 'two',
            price: 4
        },
        {
            name:'three',
            price: 10
        }
    ]
}]);
